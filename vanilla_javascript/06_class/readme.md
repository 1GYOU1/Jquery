## __객체변수 설계도 class__

<br>
같은 패턴의 객체변수를 만들때 사용하는 class

class는 객체변수 설계도

형식 : class 클래스명 {};

```js
 class myChu{
    color;
    taste;
}

//초기생성할 때 아무 값도 전달하지 않으므로 undefined가 할당.
const strawBerry = new myChu();

strawBerry.color = '빨강';
strawBerry.taste = '딸기';

console.log(strawBerry);
/*
    myChu {color: '빨강', taste: '딸기'}
    color: "빨강"
    taste: "딸기"
    [[Prototype]]: Object
*/
```

<br>

## __constructor()를 가진 class__

<br>

```js
class MyChu{
    color;
    fruit;

    //생성자함수는 new 키워드로 인스턴스 생성시 자동 호출됨.
    constructor(color, fruit){
        this.color = color;
        this.fruit = fruit;
    }

    info(){
        console.log(` ${this.color}색 ${this.fruit}맛 마이쮸`)
    }
}

const chu1 = new MyChu('빨강','딸기');
chu1.info();
//빨강색 딸기맛 마이쮸
console.log(chu1);
//MyChu{color: '빨강', fruit: '딸기'}
```

<br>

## __접근제한자와 this 게터 세터로 캡슐화__

<br>
브라우저기반 자바스크립트의 캡슐화
private 필드(프로퍼티)는 '#'으로 표현.

직접 접근할 수 없다.

```js
class Bank{
    #money;

    constructor(money){
        //this는 인스턴스 kb에 매칭된다.
        this.#money = money;
    }

    //게터, 세터함수를 이용한 private 변수 접근 설정 = > 캡슐화
    
    //게터함수
    getMoney(){
        return this.#money;
    }
    //세터함수
    setMoney(money){
        this.#money = money;
    }
}

const kb = new Bank(50000);

console.log(kb.#money);
//에러발생 : Private field '#money' must be declared in an enclosing class

kb.setMoney(200000);
console.log(kb.getMoney());
//200000
```