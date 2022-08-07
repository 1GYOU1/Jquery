## __기본 생성자함수로 인스턴스 생성__

<br>

Number 생성자함수를 이용해서 Number 객체 생성

```js
const age = new Number(17);
document.write('<br>age = '+age);
document.write('<br>typof age = '+typeof age);
/*
age = 17
typof age = object
*/
```
String 생성자함수를 이용해서 String 객체 생성
```js
const name = new String('duly');
document.write('<br><br>name = '+name);
document.write('<br>typeof name = '+typeof name);
/*
name = duly
typof name = object
*/
```
Boolean 생성자함수를 이용해서 Boolean 객체 생성
```js
const isRobot = new Boolean(false);
document.write('<br><br>isRobot = '+isRobot);
document.write('<br>typeof isRobot = '+typeof isRobot);
/*
isRobot = false
typeof isRobot = object
*/
```
Object 생성자함수를 이용해서 Object 객체 생성
```js
const duly = new Object({name:'둘리'});
document.write('<br><br>duly.name = '+duly.name);
document.write('<br>typeof duly = '+typeof duly);
/*
duly.name = 둘리
typeof duly = object
*/
```
Array 생성자함수를 이용해서 Array 객체 생성
```js
const arrNum = new Array(3,5,7);
document.write('<br><br>arrNum = '+arrNum);
document.write('<br>typeof arrNum = '+typeof arrNum);
/*
arrNum = 3,5,7
typeof arrNum = object
*/
```
Function 생성자함수를 이용해서 Function 객체 생성
```js
const sumFn = new Function('x,y','return x+y;');
document.write('<br><br>sumFn(3,4) = '+sumFn(3,4));
document.write('<br>typeof sumFn = '+typeof sumFn);
/*
sumFn(3,4) = 7
typeof sumFn = function
*/
```
Date 생성자함수를 이용해서 Function 객체 생성
```js
const today = new Date();
document.write('<br><br>today =' +today);
document.write('<br>typeof today = '+typeof today);
/*
today =Sun Aug 07 2022 10:08:13 GMT+0900 (한국 표준시)
typeof today = object
*/
```

<br>

----

<br>

## __수학과 관련된 기능을 제공하는 Math__

<br>

__Math.floor()__ - 무조건 내림(필수★★★★★)

```js
let result = 0;
result = Math.floor(3.9);
document.write(`result = ${result}`);
//result = 3
```
__Math.round()__ - 반올림
```js
let result = 0;
result = Math.round(3.5);
document.write(`result = ${result}`);
//result = 4
```
__Math.ceil()__ - 무조건 올림
```js
let result = 0;
result = Math.ceil(4.2);
document.write(`result = ${result}`);
//result = 5
```
__Math.random()__ - 0 < X < 1 사이의 소수점 난수 랜덤
```js
let result = 0;
result = Math.ceil(4.2);
document.write(`result = ${result}`);
//result = 0.45831440454173666
```
__문제1)__

0~10 사이의 정수 중 하나를 랜덤으로 추출
```js
let nowIdx = Math.floor(Math.random()*11);
document.write(`nowIdx = ${nowIdx}`);

let nowIdx2 = Math.round(Math.random()*10);
document.write(`nowIdx2 = ${nowIdx2}`);
```

<br>

----

<br>

## __Math객체를 이용한 로또 번호 추출__

<br>

```js
//1~45 구슬준비
const balls = new Array();
for(let i=1;i<=45;i++){
balls.push(i);
}

//추출한 구슬을 저장할 변수
const lotto = new Array();
for(let i=0;i<6;i++){

//45개의 구슬중에서 랜덤으로 6개를 선정 => 0~44
const nowIdx = Math.floor(Math.random() * balls.length);

lotto.push(balls[nowIdx]);

balls.splice(nowIdx,1);//선정한 구슬 제거
}

console.log(lotto);

for(let i=0;i<6;i++){
document.write(lotto[i]);
}
```

<br>

----

<br>

## __날짜와 시간 정보를 제공하는 생성자함수 Date()__

<br>

날짜, 시간 정보 구하기

<b>현재날짜와 시간정보</b>가 now 변수에 저장

```js
const now = new Date();
//Sun Aug 07 2022 11:30:42 GMT+0900 (한국 표준시)
```
__년도__
```js
const year = now.getFullYear();
console.log(year + '년')//2022년
```
__월__ 0~11 이라서 +1 필수
```js
const month = now.getMonth();
console.log(month + 1 + '월')//8월
```
__일__
```js
const day = now.getDate();
console.log(day + '일')//7일
```
__요일__ 구하기
```js
const Day = now.getDay();//0~6(일 ~ 토)
let dayName = null;

switch(Day){
    case 0 : dayName = 'Sunday'; break;
    case 1 : dayName = 'Monday'; break;
    case 2 : dayName = 'Tuesday'; break;
    case 3 : dayName = 'Wednesday;'; break;
    case 4 : dayName = 'Thursday'; break;
    case 5 : dayName = 'Friday'; break;
    case 6 : dayName = 'Saturday'; break;
}
console.log(dayName)//Sunday
```
__시__
```js
const hours = now.getHours();//0 ~ 23
console.log(hours + '시')//11시
```
__분__
```js
const minutes = now.getMinutes();
console.log(minutes + '분')//29분
```
__초__
```js
const seconds = now.getSeconds();
console.log(seconds + '초')//35초
```
<br>

----

<br>

## __setInterval()을 이용한 시계만들기__

<br>

```html
<h1>11 : 46 :30</h1>
<button id="stop">STOP</button>
```
const intervalKey = window.setInterval(콜백함수, 시간);

window.clearInterval(intervalKey);
```js
const $h1 = document.querySelector('h1');
const $stop = document.querySelector('#stop');

const intervalKey = window.setInterval(function(){
    const now = new Date();

    //시 분 초 추출
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    $h1.textContent = hours +' : '+ minutes +' : '+ seconds;
    
}, 1000);

$stop.addEventListener('click', function(){
    window.clearInterval(intervalKey)
})
```
<br>

----

<br>
