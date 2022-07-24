## __옵셔널 파라미터__

<br>

함수에서 옵셔널 파라미터 
- 매개변수에 기본 값을 할당
```js
const infoFn = function(name, age, address='대전'){
    console.log(`${name}, ${age}, ${address}`);
}
infoFn('규',27,'서울');//규, 27, 서울
infoFn('규',27);//규, 27, 대전
```
예전에는 삼항연산자로 처리
```js
console.log(address ? address : '주소없음');
```
<br>

## __객체에서의 옵셔널 체이닝__

<br>

```js
const user = {
    name : '규원',
    login : {
        id : '1gyou1',
        pw : 1234
 }
};
```

__1) user 객체의 login속성을 주석처리하면 undefined__
```js
console.log(user.login);
//{id: '1gyou1', pw: 1234}

//login 속성 주석처리 후 ↓↓
//undefined
```
__2) user 객체의 login 속성을 주석처리하면 에러발생 = 실행멈춤__
```js
console.log(user.login.id);
//1gyou1

//login 속성 주석처리 후 ↓↓
//에러발생 Uncaught TypeError: Cannot read properties of undefined (reading 'id')
```
__3) 문제 = user.login 이 있으면 .id 속성을 출력하기__

전통적인 방식
```js
if(user.login){
    console.log(`예전방식으로 출력 - ${user.login.id}`);
}
//예전방식으로 출력 - 1gyou1

//login 속성 주석처리 후 ↓↓
//아무것도 출력 X
```

최근 옵셔널 체이닝 방식
```js
console.log(`최신 방식으로 출력 - ${user.login?.id}`);
//최신 방식으로 출력 - 1gyou1

//login 속성 주석처리 후 ↓↓
//최신 방식으로 출력 - undefined
```
<br>

## __기본데이터타입 symbol__

 1. 심볼 값은 Symbol()생성자를 호출함으로서 생성된다.
2. 이때 생성되는 심볼값은 변경이 불가능한 원시값이다.
3. Symbol()을 호출할때 인자로 전달하는 문자열은 생성될 심볼에 대한 일종의 설명문으로, 오직 console.log() 등을 이용한 디버깅시에 각 심볼을 구분하기 위한 용도로 사용된다.
4. 심볼을 사용하는 이유는 새로 추가하는 프로퍼티 키를 고유하게 설정함으로서 이미 정의되어 있는 프로퍼티와 중복을 피하기 위함이다.

__심볼변수 생성__
```js
const sym1 = Symbol();//sym1에는 우주에서 유일한 고유값이 저장된다.
const sym2 = Symbol();
const sym3 = Symbol('javascript');
const sym4 = Symbol('javascript');
```

__생성된 심볼값 비교__
```js
console.log(sym1 === sym2)//false
console.log(sym3 === sym4)//false
```

__타입 검사__
```js
console.log('sym1 = ', typeof sym1)//sym1 =  symbol
console.log('sym2 = ', typeof sym2)//sym2 =  symbol
```

__심볼변수 출력__
```js
console.log('sym1 = ', sym1);//sym1 =  Symbol()
console.log('sym2 = ', sym2);//sym2 =  Symbol()
console.log('sym3 = ', sym3);//sym3 =  Symbol(javascript)
```

동적으로 객체의 속성추가시 symbol 사용예시 - 반드시 대괄호 표기법 사용
```js
const friends = {
    yj : '예진',
    th : '태화'
};
```
```js
friends[sym1] = '재희';//Symbol(): '재희'
friends.sym2 = '규원';//sym2: '규원' 심볼로 인식 X
friends[sym3] = '자바스크립트';//Symbol(javascript): '자바스크립트'}

console.log(friends)
//{yj: '예진', th: '태화', sym2: '규원', Symbol(): '재희', Symbol(javascript): '자바스크립트'}
```

Symbol.for()을 이용해서 심볼 생성 -> 내부적으로 심볼리스트에 저장관리

심볼리스트에 'samsung' 이라는 key를 갖는 심볼이 없으면 새로운 심볼 생성.

심볼리스트에 'samsung' key를 갖는 심볼이 있으면 해당 심볼값을 반환.

```js
const s1 = Symbol.for('samsung');
const s2 = Symbol.for('samsung');

console.log(s1 === s2)//true
```
<br>

----

<br>

## __이터러블규약과 이터레이터규약__

<br>

__1. 이터러블 규약 (Iterable Protocol)__

순회가능한 데이터 컬렉션을 for~of 반복문을 실행하여 반복할 때 
값이 열거되어야 하며, 내부적으로 @@iterator 메소드가 구현되어있어야 한다는 규약이다.

@@iterator : Symbol.iterator()를 줄여서 @@iterator로 부른다.

배열, 문자열(읽기전용 배열), Map 객체, Set객체 등이 이터러블 규약을 따르며, 이를 '이터러블 객체'라고 한다.
이들은 모두 for~of문을 통해 열거가 가능하지만, 열거되는 방식에는 조금씩 차이가 있다.

__2. 이터레이터 규약 (Iterator Protocol)__

next() 메소드를 통해서 하나씩 순차적으로 열거되어야 하며,
열거된 값은 {value: 값, done: boolean 값} 형태이어야 한다는 규약.

```js
const str = '가나다라마바사';
let iterator = str[Symbol.iterator]();
//내장된 @@iterator 메소드를 호출하여 이터레이터 객체를 전달받음.

console.log(iterator.next());//{value: '가', done: false}
console.log(iterator.next());//{value: '나', done: false}
console.log(iterator.next());//{value: '다', done: false}
console.log(iterator.next());//{value: '라', done: false}
console.log(iterator.next());//{value: '마', done: false}
console.log(iterator.next());//{value: '바', done: false}
console.log(iterator.next());//{value: '사', done: false}
console.log(iterator.next());//{value: undefined, done: true}
//순차적으로 마지막까지 열거한 후의 value 값은 undefined, done: true
```

배열
```js
const arrNum = [10, 20, 30];
iterator = arrNum[Symbol.iterator]();
console.log(iterator.next());//{value: 10, done: false}
console.log(iterator.next());//{value: 20, done: false}
console.log(iterator.next());//{value: 30, done: false}
console.log(iterator.next());//{value: undefined, done: true}
```
이터러블 객체 구현

this가 자신을 찾지 못해서 화살표함수는 X

```js
const myIterator = {
    i:1,
    [Symbol.iterator] : function(){
        return this;
        //이터레이터 규약을 따르기 위해 객체에 @@iterator메소드를 선언.
    },
        next : function(){
            return (this.i<4) ? {value:this.i++, done:false} : {value:undefined, done:true}
        }
};

console.log(myIterator.next())//{value: 1, done: false}
console.log(myIterator.next())//{value: 2, done: false}
console.log(myIterator.next())//{value: 3, done: false}
console.log(myIterator.next())//{value: undefined, done: true}
console.log(myIterator.next())//{value: undefined, done: true}
```

----

<br>

## __다양한 데이터를 저장할수 있는 map keys() entries() values()__

<br>

__Map 객체__

지금까지 데이터를 저장하는 방법 - 일반변수, 배열변수, 객체변수

1. 현실세계를 반영하기엔 턱없이 부족해서 Map, Set 등장
2. Map은 key가 있는 데이터를 저장한다는 점에서 Object와 유사
3. 다만 Map은 size 속성으로 항목의 수를 알 수 있게 한다는 점에서 차이가 있다.

```js
//Map 자료구조 생성
const myMap = new Map();

//데이터 저장
myMap.set('name', '규원');//문자형 key
myMap.set(27, '나이');//숫자형 key
myMap.set(true, '뀨?');//불린형 key

//데이터 인출
console.log(myMap.get('name'));//규원
console.log(myMap.get(27));//나이
console.log(myMap.get(true));//뀨?
```
Map은 이터러블 규약을 따르므로 for~of 반복문으로 출력 가능
```js
for(let value of myMap){
    console.log(value)
    //(2) ['name', '규원']
    //(2) [27, '나이']
    //(2) [true, '뀨?']
}
```
key 전체를 항목으로 하는 iterator 객체를 이용해서 출력
```js
let iterator = myMap.keys();
for(let i=0; i<myMap.size; i++){
    console.log(iterator.next())
}
//key 값만 가져옴.
//{value: 'name', done: false}
//{value: 27, done: false}
//{value: true, done: false}
```
value 전체를 항목으로 하는 iterator 객체를 이용해서 출력

위의 iterator 응용
```js
iterator = myMap.values();
for(let i=0; i<myMap.size; i++){
    console.log(iterator.next())
}
//{value: '규원', done: false}
//{value: '나이', done: false}
//{value: '뀨?', done: false}
```

Map 전체 항목을 열거 - iterator 객체를 이용해서 출력
```js
iterator = myMap.entries();
for(let i=0; i<myMap.size; i++){
    console.log(iterator.next())
}
//{value: Array(2), done: false}
//{value: Array(2), done: false}
//{value: Array(2), done: false}
```

----

<br>

## __다양한 데이터를 저장할수 있는 set keys() entries() values()__

<br>
Set은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션이다.
Set은 key가 필요없으며, value만 저장하는 자료구조이다.

```js
const mySet = new Set();

mySet.add('규원');
mySet.add('규투');
mySet.add('규쓰리');
mySet.add('규포');
mySet.add('규파이브');

//Set은 유일무이한 값만 저장됨(중복허용X)
console.log(`mySet.size = ${mySet.size}`);
//mySet.size = 5

//for~of 반복문을 이용한 출력
for(let user of mySet){
    console.log(user)
}
//규원
//규투
//규쓰리
//규포
//규파이브
```
```js
let keys = mySet.keys();
console.log(Array.isArray(keys))//false
console.log(typeof keys)//object
for(let key of keys){
    console.log(key);
}
//규원
//규투
//규쓰리
//규포
//규파이브
```
```js
let values = mySet.values();
for(let value of values){
    console.log(value)
}
//규원
//규투
//규쓰리
//규포
//규파이브
```

mySet의 항목을 열거할 수 있는 iterator 객체를 반환
```js
const iterator = mySet.entries();
for(let i=0;i<mySet.size;i++){
    console.log(iterator.next());
}
/*
    {value: Array(2), done: false}
    done: false
    value: (2) ['규원', '규원']
*/
/*
    {value: Array(2), done: false}
    done: false
    value: (2) ['규투', '규투']
*/
/*
    {value: Array(2), done: false}
    done: false
    value: (2) ['규쓰리', '규쓰리']
*/
/*
    {value: Array(2), done: false}
    done: false
    value: (2) ['규포', '규포']
*/
/*
    {value: Array(2), done: false}
    done: false
    value: (2) ['규파이브', '규파이브']
*/
```
