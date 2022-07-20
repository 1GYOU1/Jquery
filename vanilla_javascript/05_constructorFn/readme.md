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

<br>

```js
function Character(name, age){
    this.name = name;
    this.age = age;
}
```
```js
const hong = new Character('홍길동', 20);
console.log(hong);//Character {name: '홍길동', age: 20}
console.log(hong.name,hong.age);//홍길동 20
```
```js
const duly = new Character('둘리',7)
console.log(duly);//Character {name: '둘리', age: 7}
console.log(duly.name,duly.age);//둘리 7
```
```js
const hani = new Character('하니',15);
console.log(hani);//Character {name: '하니', age: 15}
console.log(hani.name,hani.age);//하니 15
```
<br>

----
<br>