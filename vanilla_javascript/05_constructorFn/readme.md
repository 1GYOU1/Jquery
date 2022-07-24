## __사용자정의 생성자함수__

<br>

```js
const hong = {name:'홍길동', age:20};
const duly = {name:'둘리', age:7};
const hani = {name:'하니', age:15};
```

<br>

위와 같이 데이터 구조가 같은 객체가 여러개 필요할 때 생성자함수 사용을 고려해 볼 수 있다. 

생성자함수는 {key:value}의 형태로 된 객체변수를 생성하는 또 다른 방법이다.

속성과 메소드를 미리 설계도에 디자인한 후,
객체변수는 New 키워드를 이용해서 만들어진 인스턴스다.

생성자함수의 이름은 대문자로 시작하는게 관례

<br>

```js
function Character(name, age){
    this.name = name;
    this.age = age;
    this.info = function(){
                console.log(`이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`);
            }
}
```
```js
const hong = new Character('홍길동', 20);
console.log(hong);//Character {name: '홍길동', age: 20}
console.log(hong.name,hong.age);//홍길동 20
hong.info();
//이름은 홍길동이고, 나이는 20살 입니다.
```
```js
const duly = new Character('둘리',7)
console.log(duly);//Character {name: '둘리', age: 7}
console.log(duly.name,duly.age);//둘리 7
duly.info();
//이름은 둘리이고, 나이는 7살 입니다.
```
```js
const hani = new Character('하니',15);
console.log(hani);//Character {name: '하니', age: 15}
console.log(hani.name,hani.age);//하니 15
hani.info();
//이름은 하니이고, 나이는 15살 입니다.
```
<br>

----

<br>

## __프로토타입을 이용한 상속__

<br>

![KakaoTalk_20220724_100631514](https://user-images.githubusercontent.com/90018379/180628859-781ab818-22fc-45b2-9009-9c1283cbe6b1.png)


<br>

Profile.prototype 객체에 info() 메소드 등록 

=> 효율적인 메모리 사용

```js
function Profile(id, name){
    this.id = id;
    this.name = name;
}

Profile.prototype.info = function(){
    console.log(`내 이름은 ${this.name}이고, 아이디는 ${this.id} 입니다.`)
};

const me = new Profile('duly', '둘리');
console.log(`id = ${me.id}`)
//id = duly
console.log(`name = ${me.name}`);
//name = 둘리
me.info();
//내 이름은 둘리이고, 아이디는 duly 입니다.

//부모역할을 하는 Profile.prototype의 존재 확인
console.log(me);
console.log(me.constructor);
//인스턴스 me의 생성자함수 Profile.prototype을 가리킨다.
```

<br>

## __게터와 세터를 포함된 생성자함수__

<br>

```js
const Profile = function(id, name){
    this.id = id;
    this.name = name;
};

Profile.prototype = {
    setId : function(id){
        this.id = id;
    },

    getId : function(){
        return this.id;
    },

    setName : function(name){
        this.name = name;
    },

    getName : function(){
        return this.name;
    },

    info : function(){
        console.log(`당신의 이름은 ${this.name}이고, id는 ${this.id} 입니다.`);
    }
};

const hong = new Profile('hgd', '홍길동');
hong.info();
//당신의 이름은 홍길동이고, id는 hgd 입니다.

hong.setId('duly');
hong.setName('둘리');

hong.info();
//당신의 이름은 둘리이고, id는 duly 입니다.

console.log(hong.getId());
//duly
console.log(hong.getName());
//둘리
```

<br>

----