## 산술연산자와 대입연산자

```js
let result = true;

const num_1 = 100;
const num_2 = 2;

let result = num_1 + num_2;

//템플릿 문자열을 이용해서 출력
console.log(`result = ${result}`);

console.log('----------')


//문제1
//10을 할당받는 상수 x와 3을 할당받는 상수 y를 선언하시오.

const x = 10;
const y = 3;

console.log(x+y);

console.log('----------')

//문제2
//x, y 의 합을 상수 hab에 대입하는 코드를 작성후 콘솔창에 출력하시오.
//출력형식 : hab = 20

const hab = x+y;

console.log('hab =',hab);
console.log('hab = '+hab);
console.log(`hab = ${hab}`)

console.log(`x-y = ${x-y}`);
console.log(`x*y = ${x*y}`);
console.log(`x/y = ${x/y}`);//64비트 부동소수점으로 처리
console.log(`x%y = ${x%y}`);//% : 나머지를 구하는 연산자
```
<br>

## 논리연산자의 결과는 true, false이고 타입은 boolean

```js
let result = true;

//and의 개념
result = true && true;//true
result = true && false;//false
result = false && true;//false

//or의 개념
result = true || false;//true
result = false || false;//false

//Not의 개념(부정 - 반대로)
result = !result;//false

console.log(`result = ${result}`);
console.log(typeof result);//변수의 타입확인
```
<br>

## 누적의개념과_복합대입연산자

```js
let busCard = 1000;
let money = 15000;

//버스카드에 15000원을 충전하면 얼마가 될까?

/*
점원이 버스카드를 충전기에 삽입한다.
충전금액을 입력한다.

기존 버스카드에 남아있는 잔액을 읽어와 충전금액과 합한다.
합산한 금액을 버스카드에 대입한다.
*/
busCard = busCard + money;//왼쪽 = 으로 넘겨줌. 자기자신에게 할당.//16000
busCard += money;//약식표현법(복합대입연산자)//31000

busCard = busCard - 3000;//28000
busCard -= 3000;//25000

console.log(`busCard = ${busCard}`)
```
<br>