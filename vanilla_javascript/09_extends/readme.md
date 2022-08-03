## __클래스의 상속__

<br>

하위클래스가 상위클래스를 상속받았을 때,

하위클래스는 상위클래스의 모든 권한을 갖게 된다.

```js
//할아버지 클래스
class GrandFarther{
    GrF(){
        console.log('GrandFather test')
    }
}

//아빠 클래스
class Father extends GrandFarther{
    myFather(){
        console.log('myFather test')
    }
}

//자식 클래스
class gyou1 extends Father{
    IamGyou1(){
        console.log('IamGyou1 test')
    }
}

//상속한 gyou1 클래스의 인스턴스 생성
const iam = new gyou1();

iam.IamGyou1();
```

상속키워드 __extends__

1. 기존의 클래스를 재사용해서 새로운 클래스를 작성하는 것
2. 두 클래스를 조상과 자손으로 관계를 맺어주는 것
3. 자손은 조상의 모든 프로퍼티를 상속받는다.
4. 상속개념을 적용하면 재사용성을 높이고 관리가 용이
5. 단일 상속의 개념 - 상속받을 수 있는 클래스는 단 하나

<br>

----

<br>

## __Overriding & super__

<br>

```js
//상위 클래스
class Father{
    constructor(){
        console.log('2. Father의 생성자함수 호출 성공')
    }

    sayHello(){
        console.log('Father의 sayHello() 호출');
    }
}
//하위 클래스
class Son extends Father{
    constructor(){
        console.log('1. son의 생성자함수 호출 성공')
        super();//상속받은 클래스의 생성자는 'super()' 호출을 해야한다.★
    }
    
    sayHello(){
        console.log('Son의 sayHello() 호출');
    }

    test(){
        super.sayHello();//상속받은 부모의 메소드를 호출가능
    }
}

const son = new Son();
son.sayHello();//Son의 sayHello() 호출
son.test();//Father의 sayHello() 호출
```
__constructor__
- 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드

<br>

__클래스 호출 순서__

1. son의 생성자함수 호출 성공
2. Father의 생성자함수 호출 성공

→ 하위 클래스 호출부터 불러옴.

<br>

----

<br>

## __static - 정적변수, 정적메소드__

<br>

   1. 객체를 아무리 많이 만들더라도 static변수는 오직 하나의 메모리만 생성(메모리 누적, 공용 변수)
   2. 인스턴스명이나 this로 호출하지 않고, 클래스명으로 호출한다.

```js
class HelloCount{
    //클래스 설계시 constructor()를 생략하면 컴파일러가 자동으로 아래와 같은 빈 constructor()를 하나 만들어서 넣어준다. 따라서 아래의 빈 constructor()는 여기에선 생략가능하다.
    constructor(){};

    static sCount = 0;//공용 변수의 개념

    #nCount = 0;//private

    static goUp(){//정적 메소드
        console.log('static 정적메소드 goUp() 호출 성공')
    }
    
    sayHello(){
        HelloCount.sCount++;//static 변수는 사용할때 클래스의 이름을 붙여줌. this는 에러남.
        this.#nCount++;

        console.log(this,`static변수를 이용하여 ${HelloCount.sCount}번째 인사를 합니다.`)
        console.log(this,`는 ${this.#nCount}번째 인사를 합니다.`)
        
    }
}

const hello1 = new HelloCount();
const hello2 = new HelloCount();

HelloCount.goUp();
//static 정적메소드 goUp() 호출 성공

hello1.sayHello();
//HelloCount {#nCount: 1} 'static변수를 이용하여 1번째 인사를 합니다.'
//HelloCount {#nCount: 1} '는 1번째 인사를 합니다.'
hello1.sayHello();
//HelloCount {#nCount: 2} 'static변수를 이용하여 2번째 인사를 합니다.'
//HelloCount {#nCount: 2} '는 2번째 인사를 합니다.'

//static변수는 누적되어서 나옴.(공용 변수)
hello2.sayHello();
//HelloCount {#nCount: 1} 'static변수를 이용하여 3번째 인사를 합니다.'
//HelloCount {#nCount: 1} '는 1번째 인사를 합니다.'
hello2.sayHello();
//HelloCount {#nCount: 2} 'static변수를 이용하여 4번째 인사를 합니다.'
//HelloCount {#nCount: 2} '는 2번째 인사를 합니다.'
hello2.sayHello();
//HelloCount {#nCount: 3} 'static변수를 이용하여 5번째 인사를 합니다.'
//HelloCount {#nCount: 3} '는 3번째 인사를 합니다.'
```

<br>

----

<br>

## __믹스인(mixin)__

<br>

이미 구현된 메소드를 가져다 class에서 사용하는 기법

```js
const sayMixin = {
    sayHi : function(){
        console.log('sayHi() 메소드 호출');
        console.log(`Hello ${this.name}`);
    },
    sayBye : function(){
        console.log('sayBye() 메소드 호출');
        console.log(`Bye ${this.name}`);
    }
}

class User{
    name;
    constructor(name){
        this.name = name;
    }
}

//Mixin 기법으로 메소드복사
Object.assign(User.prototype, sayMixin);

const gyou1 = new User('규원');
console.log(`gyou1.name = ${gyou1.name}`)//gyou1.name = 규원

//mixin 기법으로 연결한 메소드 호출
gyou1.sayHi();
//sayHi() 메소드 호출
//Hello 규원
gyou1.sayBye();
//sayBye() 메소드 호출
//Bye 규원
```