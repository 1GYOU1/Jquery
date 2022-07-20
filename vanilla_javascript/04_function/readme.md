## __일괄 반복처리__

<br>

함수의 형태
<pre>
function 함수명(매개변수1, 매개변수2, 매개변수3){
    실행할 코드덩어리;
}

실행방법(호출) - 함수명(인자1, 인자2, 인자3);
</pre>

<br>

함수의 선언
```js
function coffeeFn(shoot,ice,cup){
    console.log(`샷 ${shoot} 추가`);
    console.log(`얼음 ${ice} 추가`);
    console.log(`물 ${cup} 추가`);
    console.log(`커피 한잔 완성`);
}
```

<br>

함수호출
```js
coffeeFn(1,1,1);
console.log('----')
coffeeFn(1,2,1);
console.log('----')
coffeeFn(2,2,3);
```
<br>

![1gyou1](https://user-images.githubusercontent.com/90018379/179383625-a151afba-e26a-4d8e-8450-b3ee5484a003.PNG)

<br>

__문제1)__ 

두개의 숫자를 매개변수명 x, y에 전달받아 그 합을 출력하는 함수를 선언하고 호출하시오.

```js
function myFn(x, y){
    console.log(x + y);
}

myFn(10, 20);//30
```
<br>

----
<br>

## __매개변수, 지역변수, 전역변수, scope__

<br>

__문제)__ 

현재 나의 통장잔액은 3만원이다.

저금할 금액을 전달받아 합산해서 총액을 알려주는 함수를 선언하고 호출하고 싶다.


콘솔창에 출력 => "현재 통장잔액은 35000원 입니다."
=> 코딩시 필요한 변수는?

1. 함수변수명 : saveFn
2. 총액 : totMoney
3. 입금액 : money 


console.log(totMoney);

에러 totMoney is not defined
지역변수 - 함수 안에서 선언한 변수는 함수 바깥에서 사용할 수 없다.

console.log(money)
에러 - 매개변수는 지역변수 개념이다.

<br>

```js
function saveFn(money){
    let totMoney = 30000;
    totMoney = totMoney + money;
    console.log('현재 통장잔액은 '+ totMoney +'원 입니다.')
}

saveFn(5000);
saveFn(5000);
```
![1gyou1](https://user-images.githubusercontent.com/90018379/179385737-21e3a3ea-7fcc-4993-a06f-2413a9a2555c.PNG)

<br>

현재 Problen - 여러번 입금시 총액이 맞지 않음 => 업그레이드(Refactoring) 개선

전역변수 - 함수바깥에서 선언한 전역변수는 함수 안에서 하용할 수 있다.

<br>

```js
let someMoney = 30000;

function bankFn(money){
    someMoney += money;
    console.log('현재 통장잔액은 '+ someMoney +'원 입니다.')
}
bankFn(1000);
bankFn(1000);
console.log(someMoney);//출력가능
```

![1gyou1](https://user-images.githubusercontent.com/90018379/179385761-e9147c95-51dc-45bc-aa29-8dccf9a9c381.PNG)

<br>

----
<br>

## __return 값이 있는 함수__

<br>

return : 함수의 종료를 의미하며, 그 이후에 나온 코드는 실행 X

return 값 : 호출한 곳에 '반환값'을 돌려준다.

return : 실행 순서의 관점에서 보면 호출한 곳으로 돌아간다.

<br>

__문제1)__

두개의 값을 전달받아 곱을 리턴하는 함수 kobFn(a,b)를 선언하세요.

```js
function kobFn(a,b) {
    return a*b;
}

const result = kobFn(7,111);
console.log(`result = ${result}`);
//result = 777
```

<br>

__문제2)__ 

두개의 수를 one, two에 전달받아 그 합을 return 하는 화살표함수 habFn를 선언하시오. 리턴받은 값을 sum 변수에 할당후 콘솔창에 "sum = 100" 과 같은 형식으로 출력하시오.
```js
function habFn(one, two){
    return one+two;
}

const sum = habFn(70,30);
console.log(`sum = ${sum}`);
//sum = 100
```
<br>

----
<br>

## __선언식 함수(기명함수)__

<br>

```js
function sumFn(a,b){
    console.log(a+b);
}        
sumFn(100,200);//300
```

<br>

## __표현식함수(익명함수)__

<br>

표현식 함수는 변수의 익명함수를 할당하는 방식

익명함수는 이름이 없는 함수를 의미한다. -> function(){}

<br>

```js
const subFn = function(a,b){
    console.log(a-b);
}
subFn(300,200);100
```

<br>

----
<br>

## __화살표함수__

<br>

함수 선언 방식을 간소화한 함수이다.

<br>

__문제)__ 

전달받은 두 값의 곱를 출력하는 화살표함수 mulFn을 선언하시오.

```js
const mulFn = (a,b) =>{
    console.log(a*b)
}
mulFn(10,7);//70
```
<br>

## __화살표함수 특징__

<br>

1. 익명함수를 변수에 대입해서 사용
```js
const breakfast = () => {
    return '아침식사는 수박주스';
};

console.log(breakfast());
//아침식사는 수박주스
```
2. 리턴이 바로 표현이 가능하면 { return } 생략가능
```js
const lunch = () => '점심은 오렌지 주스' 
console.log(lunch());
//점심은 오렌지 주스
```
3. 매개변수가 1개이면 ( ) 생략가능
```js
const dinner = props => '저녁은 '+ props;        
console.log(dinner('스테이크'));
//저녁은 스테이크
```

## __화살표함수로 변환하기__

<br>

__문제1__

```js
function addFn(x, y){
    console.log(x+y);
}
```
```js
const addFn = (x, y) => console.log(x+y);
addFn(10, 20);
//30
```
<br>

__문제2__

```js
function saveFn(money){
    let totMoney = 30000;
    totMoney += money;

    console.log(`현재 통장잔액은 ${totMoney}원 입니다. <br />`);
}
```
```js
const saveFn = money => {
    let totMoney = 30000;
    totMoney += money;
    console.log(`현재 통장잔액은 ${totMoney}원 입니다. <br />`);
}
saveFn(3000);
//현재 통장잔액은 33000원 입니다.
```

<br>

----
<br>

## __콜백함수__

<br>

콜백 함수는 어떤 함수를 실행시키고 난 이후에 결과를 받을 함수 혹은, 그 다음에 실행될 함수를 의미합니다.

어떤 함수의 매개변수로 또 다른 함수를 전달할 수 있는데, 주로 콜백함수는 매개변수 형태로 전달받아 실행시키게 된다.

<br>

```js
//콜백으로 사용할 myFn 함수
const myFn = function(nickname){
console.log(`${nickname}님이 myFn 콜백함수를 호출함`);
}

//콜백함수를 전달받아 실행할 historyFn 함수
const historyFn = function(callback){
callback('1gyou1');
}

historyFn(myFn);
//1gyou1님이 myFn 콜백함수를 호출함
```