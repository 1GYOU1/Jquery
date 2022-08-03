## __var로 선언한 변수에서 발생하는 Hoisting__

<br>

변수선언하는 이유 - <b>데이터를 저장</b>하기 위해

var -> <b>let, const</b>로 대체해서 사용하는 추세

호이스팅현상 - 아래에 선언한 변수를 끌어올려서 사용 가능하게 한다.

복잡한 대규모 프로그램에서는 의도하지 않은 오류를 일으키게 하는 현상.

<br>

```js
var puppy = '구름이';//문자열 저장

document.write(puppy);
console.log(puppy);
alert(puppy);

console.log(name);
var name = '홍길동';
```
<br>

## __let을 사용한 변수로 Hoisting 문제해결__

<br>

```js
let dog;//변수를 선언만 하고 값을 할당하지 않으면 undefined 값이 자동할당.
dog = '구름이';//변수에 값을 할당(대입)
dog = '행복한 구름이';//재할당

//에러발생 - 'dog' has already been declared
//한번 선언한 변수는 또 다시 선언할 수 없음.
// let dog = '이쁜 구름이';

document.write(dog);

let name = '둘리';//변수의 선언과 할당을 동시에 함.
```
<br>

## __const를 사용하면 Hoisting 안됨__

<br>

```js
//let은 호이스팅이 안되므로 에러발생
// console.log(name);
// console.log(dog);

let dog = '푸들';
const name= '구름이';//상수

//상수는 선언과 할당을 무조건 동시에 해야 함.
// name='구름이';
//상수에는 재할당이 안됨. 

console.log(name);
```
<br>

----
<br>

## __var로 선언한 변수의 유효범위__

<br>

일반적으로 변수는 중괄호 단위로 유효하다. 

하지만 var 키워드는 중괄호 단위의 유효범위가 설정되지 않으므로 논리적인 흐름 예측에 어려움을 겪게 만든다.

var 키워드는 함수단위로 유효범위가 설정된다.

<br>

```js
var nickname = '구름이';

    {
        var nickname = '돌돌이';
    }

    console.log(nickname);//돌돌이;

    var address = '서울';

    function addFn(){
        var address = '인천';
        console.log(address);//인천
    }

    addFn();

    //var 키워드는 함수단위로 유효범위가 설정된다.
    console.log(address);//서울
```
<br>

## __let & const로 선언한 변수의 유효범위__

<br>

let, const로 선언한 변수는 중괄호 단위로 유효하다.

<br>

```js
let nickname = '구름이';
    {
        let nickname = '돌돌이';

        const age = 25;
    }

    // console.log(age);//에러발생 : age is not defined

    console.log(nickname);//구름이
```
<br>

----
<br>

## __let & const로 선언한 변수의 특징__

<br>

let, const로 선언한 변수는 중괄호 단위로 유효하다.

<br>

__let으로 선언한 변수의 특징 ↓__

let은 뚜껑없는 컵 

&rarr; 원할 때마다 다른 내용물로 변경 가능
논리적인 흐름상 중간 내용이 바뀌어야 하는 변수라면 let으로 선언하기

__const로 선언한 변수의 특징 ↓__

const는 밀폐된 컵 

&rarr; 한번 내용물을 담으면 뚜껑으로 완전 밀폐
논리적인 흐름상 중간에 내용이 바뀌면 안되는 변수라면 const로 선언

<br>

```js
let address = '서울시 강남구';
address = '서울시 서초구';
console.log(address);

const account = '국민은행 1234-56-78910 한규빵';
account = '농협은행 10987-65-43210 한규투';
//에러발생 Assignment to constant variable.

console.log(account);
```
<br>

----
<br>

## __string 복합 문법 작성__

<br>

```js
   const username = '1gyou1';
        console.log(`username 데이터타입 : ${typeof(username)} 입니다`)
        //username 데이터타입 : string 입니다.
        console.log('username 데이터타입 : '+typeof username+ ' 입니다')
        //username 데이터타입 : string 입니다.
        console.log('username 데이터타입 :',typeof username,'입니다')
        //username 데이터타입 : string 입니다. ,는 공백이 한칸 생김
        console.log('username 데이터타입 : %s 입니다.',typeof(username));
        //username 데이터타입 : string 입니다.
```
<br>

----
<br>

## __배열변수 - Array__

<br>

배열은 여러타입의 데이터를 혼합해서 저장 가능. 

but 권하진 않음.

<br>

```js
//배열에 저장된 값을 원소(item)라고한다
const arrSome = ['계란','구슬',100,true,undefined,null];
```
```js
console.log(arrSome);
```
![캡처1](https://user-images.githubusercontent.com/90018379/179382822-bc30e1a9-14d8-4754-8751-9c910205dc93.PNG)

```js
//출력 - 배열변수명[자리값(index)]
console.log(arrSome[0]);//계란
console.log(arrSome[1]);//구슬
console.log(arrSome[2]);//100
console.log(arrSome[3]);//true
console.log(arrSome[4]);//undefined
console.log(arrSome[5]);//null
```
![캡처2](https://user-images.githubusercontent.com/90018379/179382851-6e1199a6-9b7d-493b-9a98-e93ba5614fe3.PNG)

<br>

배열의 끝에 데이터를 추가

<br>

__방법1)__

```js
arrSome[6] = '햄버거';
console.log(arrSome[6]);//햄버거
```

![캡처3](https://user-images.githubusercontent.com/90018379/179382882-e74717c7-189e-4a5e-9622-398d093d83f7.PNG)

<br>

__방법2)__
```js
arrSome.push('푸쉬맨');
console.log(arrSome[7]);//푸쉬맨
```
![1gyou1](https://user-images.githubusercontent.com/90018379/179382898-a6f53e84-d3ce-496e-9eeb-f97b4e0cf4eb.PNG)

<br>

__방법3)__
```js
arrSome[arrSome.length] = '도시락';
console.log(arrSome[arrSome.length-1]);//도시락
```
![1gyou1](https://user-images.githubusercontent.com/90018379/179382918-d8bc6b28-9b50-4f02-8c1c-048a9686eb93.PNG)

<br>

배열의 길이 측정 - 배열명.length

배열의 맨 마지막 인덱스 번호는 항상(배열명.length-1)

```js
arrSome.push('규오니');
console.log(arrSome[arrSome.length-1]);
console.log('arrSome 배열의 길이는 '+arrSome.length+' 이다.');
```

![1gyou1](https://user-images.githubusercontent.com/90018379/179382934-24bf9a87-da51-424f-8ff4-cb58d519fe17.PNG)

<br>

만약 없는 인덱스로 출력을 시도하면 undefined

```js
console.log(arrSome[100]);//undefined
```

<br>

배열변수의 값 변경

```js
arrSome[0] = '과자';
arrSome[1] = '사탕';
```

<br>

for 반복문을 이용하여 배열 출력

```js
for(let i = 0; i < arrSome.length; i++){
    console.log(arrSome[i]);
}
```

![1gyou1](https://user-images.githubusercontent.com/90018379/179382959-5eafda1a-65ea-4f88-a1b3-57c66a8fa484.PNG)

<br>

빈 배열 선언후 출력

```js
const city = [];

city[0] = '서울';
city[1] = '인천';
city[2] = '대전';
```

<br>

while 반복문으로 배열을 출력

```js
let i=0;

while(i<city.length){
    console.log(city[i]);
    i++;
}
```
![1gyou1](https://user-images.githubusercontent.com/90018379/179383193-60ad0224-05a1-4ffb-8bf9-6d9ee604aa03.PNG)

<br>

배열인지 아닌지 확인하는 방법

```js
console.log(`arrSome은 배열일까? ${typeof arrSome}`);//object
console.log(`arrSome은 배열일까? ${Array.isArray(arrSome)}`);//true
console.log(`i는 배열일까? ${Array.isArray(i)}`);//false
```
<br>

----
<br>

## __객체변수 - object__

<br>

리터럴(literal)은 사람이 이해할 수 있는 문자나 약속된 기호를 사용해서 값을 생성하는 표기법

리터럴(literal)방식으로 객체를 생성

객체의 형태 - {key : value}, {property : value}

객체변수 hong에 저장되는 값은 객체의 본체를 가리키는 주소값이다.

<br>

```js
const gyou1 = {
    nation : 'korea',
    name : '규워니',
    age : 27
};
```
<br>

객체변수에 저장된 데이터 출력방법은 = 객체변수명.프로퍼티명

```js
console.log(gyou1.nation, gyou1.name, gyou1.age);//korea 규워니 27
console.log(gyou1.nation);//korea
console.log(gyou1.name);//규워니
console.log(gyou1.age);//27
```

<br>

who와 gyou1은 같은 주소값을 가지게 된다.

```js
const who = gyou1;
console.log(who.nation, who.name, who.age);//korea 규워니 27
console.log(who.nation);//korea
console.log(who.name);//규워니
console.log(who.age);//27
```

<br>

값 바꾸기

```js
who.nation = '미국';
who.name = '규빵이'
```
```js
console.log(who.nation);//미국
console.log(who.name);//규빵이
console.log(who.age);//27
```
```js
console.log(gyou1.nation);//미국
console.log(gyou1.name);//규빵이
console.log(gyou1.age);//27
```

<br>

객체의 프로퍼티 추가

```js
who.address = '서울시 강남구';

console.log('gyou1 = ',gyou1);
console.log('who = ',who);//같은 결과
```

<br>

----
<br>

## __객체와 프로퍼티__

<br>

객체변수는 데이터 저장구조가 효율적이면서, 동시에 데이터 각각의 직관적 의미파악이 가능하다.

그래서 보통 서로 관련있는 데이터를 저장할 경우는 객체변수를 사용하는 경우가 많다.

property에 하이픈(-)이 포함되어 있으면 따옴표로 감싸야 한다.

<br>

```js
const iAm = {
    name : '1gyou1',
    nation : 'korea',
    'foot-size' : '230'
};
```

<br>

property에 하이픈(-)이 포함되어 있으면 대괄호[ ]표기법으로 해야함

객체의 프로퍼티에 접근

```js
console.log(iAm.name);//1gyou1
console.log(iAm.nation);//korea
console.log(iAm['foot-size']);//230
```

<br>

객체의 property 삭제

```js
delete iAm.name;
delete iAm.nation;
delete iAm['foot-size'];

console.log(`iAm = `, iAm);
//iAm =  {}
```
<br>

----
<br>

## __메소드를 가진 객체__

<br>

```js
const gyou1 = {
    name : '규원',
    age : 27,
    address : '서울',

    info : function(){
        console.log('나는 '+this.address+'에 사는 '+this.age+'살 '+this.name+' 입니다.')
    }
};
```

<br>

앞에 .(점)찍고 호출하면 메소드

.(점)없이 호출하면 함수

```js
gyou1.info();
//나는 서울에 사는 27살 규원입니다.
```
<br>

----
<br>

## __객체의 축약표현__

<br>

```js
const name = 'gyou1';
const age = 27;
```

<br>

위 데이터를 객체변수로 생성

key와 value의 이름이 동일하면 key를 생략할 수 있다.

이때 key는 value의 이름으로 자동 생성됨.

```js
const gyou1 = {
    name,//name : name 축약
    age//age : age 축약
};
console.log(gyou1);
//{name: 'gyou1', age: 27}
```
<br>

객체에서 메소드를 정의할 때 function 키워드를 생략한 축약표현 가능

```js
const coin = {
    name : '500원',
    go : function(){
        console.log(this.name+' 앞')
    },
    back(){
        console.log(this.name+' 뒤')
    }
}
coin.go();//500원 앞
coin.back();//500원 뒤
```

<br>

## __구조분해할당, 비구조할당__

<br>

__1. 배열 구조분해(비구조) 할당__
```js
 const pet = ['강아지', '고양이', '거북이', '달팽이', '토끼'];
```
배열에 담긴 데이터를 꺼내서 별개의 변수에 저장해야 할 일이 발생
```js
// const dog = pet[0];
// const cat = pet[1];
// const turtle = pet[2];
// const snail = pet[3];
// const rabbit = pet[4];
```
과정을 간소화하는 새로운 문법이 등장
```js
const [dog, cat, turtle, snail, rabbit] = pet;

 //확인
console.log(dog, cat, turtle, snail, rabbit);
//강아지 고양이 거북이 달팽이 토끼
```
<br>

__2. 객체 구조분해(비구조) 할당__
```js
const person = {
    username : '1gyou1',
    age : 27,
    email : '1gyou1@naver.com'
};
```
배열에 담긴 데이터를 꺼내서 별개의 변수에 저장해야 할 일이 발생
```js
// const username = person.username;
// const age = person.age;
// const hobby = person.hobby;
```
위 과정을 간소화하는 새로운 문법이 등장
```js
const {username, age, email} = person

//확인
console.log(username, age, email);
//1gyou1 27 1gyou1@naver.com
```
<br>

__3. 구조분해 할당을 통한 두 값의 맞교환__

```js
let a=3, b=5;
```
1) 옛날방식
```js
let tmp = a;
//임시변수를 이용해서 a값 저장

a=b;
b=tmp;

console.log(a,b)//a=5, b=3
```
2) 최신방식
```js
[a,b] = [b,a];
console.log(a,b)//a=5, b=3
```

<br>

----

<br>

## __값복사, 참조값복사 - DeepCopy, ShallowCopy__

<br>

__값 복사란?__

두 개의 메모리가 존재하고 한쪽의 메모리에 있는 값이
다른 메모리로 그 값만을 복사하는 행위를 말한다.
    
이 두 개의 메모리는 완전히 독립적인 상태이다.
우리가 일반적으로 많이 하는 파일복사 값 복사에 해당한다. 
    
이렇게 두 변수가 완전히 독립성을 갖는 것을 <span style="background-color:#fff5b1">'깊은복사, Deep Copy'</span>라고 한다.

<br>

__참조값 복사란?__

객체변수는 참조변수이며,
참조변수의 할당은 참조값 값복사가 된다.
    
따라서 두 객체 변수는 같은 참조값(주소값)을 가지므로 서로 독립적이지 않다.
즉, 같은 실체를 가리킨다.
    
이런 것을 <span style="background-color:#fff5b1">'얕은 복사, Shallow Copy'</span>라고 한다. 

-> 주소 타고 값을 가져옴

<br>

```js
const han = {
    name : '규원',
    age  : 27
}
```
__객체의 얕은 복사 (Shallow Copy)__
```js
const gyou1 = han;//참조값 복사

gyou1.name = '뀨';
gyou1.age = 7;

console.log(gyou1);
//{name: '뀨', age: 7}
console.log(han);
//{name: '뀨', age: 7}
```

__객체의 깊은 복사 (Deep Copy)__

- spread 연산자를 이용하여 가능
- Object.assign(타겟, 원본) - 불변
```js
const gyou2 = {};
Object.assign(gyou2, han);

gyou2.address = '신당동';
console.log('dyly =', han);//dyly = {name: '뀨', age: 7}

//깊은 복사 ↓↓
console.log('dyly =', gyou2);//dyly = {name: '뀨', age: 7, address: '신당동'}
```

<br>

----

<br>

## __원본데이터를 훼손하지 않고 복사하는 spread 연산자__

<br>

<b>'배열'</b>에서 spread 연산자 사용법

```js
const member = ['규원', '예진', '태화'];
```
아래 두줄과 같이 작성하면 __ShallowCopy__
```js
const newMember = member;//원본 주소로 타고가서 가져옴
newMember.push('뀨');

console.log(member);//(4) ['규원', '예진', '태화', '뀨']
console.log(newMember);//(4) ['규원', '예진', '태화', '뀨']
```

원본의 상태를 보존하는 __DeepCopy (불변)__

```js
const newMember = [...member, '재희'];
newMember.push('뀨');

const nowMember = [...member, '철수', '영희', ...newMember];

console.log('member = ',member);//(3) ['규원', '예진', '태화']
console.log('newMember = ',newMember);//(5) ['규원', '예진', '태화', '재희', '뀨']
console.log('nowMember = ',nowMember);//(10) ['규원', '예진', '태화', '철수', '영희', '규원', '예진', '태화', '재희', '뀨']
```

<br>

<b>'객체'</b>에서 spread 연산자 사용법

```js
const eBoy = {
    kor : '국어'
};
const mBoy = {
    kor : '국어',
    eng : '영어'
};
const hBoy = {
    kor : '국어',
    eng : '영어',
    math : '수학'
};
```
- 비슷한 프로퍼티를 갖고 있는 서로 다른 세 객체
- 생성할 때 프로퍼티가 많아도 모두 직접 타이핑해야 함.

<br>

spread 연산자를 이용하면 원본객체의 데이터만 가져온다.
```js
const eStudent = {
    kor : '국어'
};

const mStudent = {
    ...eStudent,
    eng : '영어'
}

const hStudent = {
    ...mStudent,
    math : '수학'
}

console.log(hStudent)//{kor: '국어', eng: '영어', math: '수학'}
```
