## __산술연산자와 대입연산자__

<br>

```js
let result = true;

const num_1 = 100;
const num_2 = 2;

let result = num_1 + num_2;

//템플릿 문자열을 이용해서 출력
console.log(`result = ${result}`);
```

<br>

__문제1)__ 

10을 할당받는 상수 x와 3을 할당받는 상수 y를 선언하시오.
```js
const x = 10;
const y = 3;

console.log(x+y);
```

<br>

__문제2)__ 

x, y 의 합을 상수 hab에 대입하는 코드를 작성후 콘솔창에 출력하시오.

출력형식 : hab = 20

```js
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

----
<br>

## __논리연산자의 결과는 true, false이고 타입은 boolean__

<br>

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

----
<br>

## __누적의개념과 복합대입연산자__

<br>

버스카드에 15000원을 충전하면 얼마가 될까?

점원이 버스카드를 충전기에 삽입한다.
충전금액을 입력한다.

기존 버스카드에 남아있는 잔액을 읽어와 충전금액과 합한다.
합산한 금액을 버스카드에 대입한다.

<br>

```js
let busCard = 1000;
let money = 15000;

busCard = busCard + money;//왼쪽 = 으로 넘겨줌. 자기자신에게 할당.//16000
busCard += money;//약식표현법(복합대입연산자)//31000

busCard = busCard - 3000;//28000
busCard -= 3000;//25000

console.log(`busCard = ${busCard}`)
```
<br>

----
<br>

## __증감연산자와 복합대입연산자__

<br>

```js
let x = 200;
let y = 100;

x = x+1;//201
x += 1;//202
x++;//203

y = y-1;//99
y -= 1;//98
y--;//97

x = x+y;//300
x +=y;//397

// x = x-y 
x -= y;//300

// x = x*y
x *= y//29100

// x = x/y
x /= y;//300

// x = x%y
x %= y;//9


console.log(`현재 x = ${x}`);
console.log(`현재 x = ${y}`);
```
<br>

----
<br>

## __동등연산자 일치연산자 비교연산자__

<br>

```js
 const score1 = 100;
        const score2 = '100';

        console.log(`typeof score1 : ${typeof score1}`);//number 숫자
        console.log(`typeof score1 : ${typeof score2}`);//string 문자열

        //동등연산자 == 로 값 비교할 경우 값만 비교하므로 true
        console.log(`score1 == score2 결과는 : ${score1 == score2}`);//true

        //일치연산자  === 로 비교할 경우 값, type 비교하므로 false
        //조금 더 엄격한 검사방법인 일치연산자 사용을 권장
        console.log(`score1 === score2 결과는 : ${score1 === score2}`);//false
        
        console.log('-------');
        
        let dulyAge = 7;
        let micol = 7;

        console.log(dulyAge > micol);//false
        console.log(dulyAge >= micol);//true or의 개념이기 때문
        console.log(dulyAge < micol);//false
        console.log(dulyAge <= micol);//true or의 개념이기 때문

        console.log(dulyAge == micol);//true
        console.log(dulyAge != micol);//false 동등연산자의 부정 //앞에 =하나 지우고 !

        console.log(dulyAge === micol);//true
        console.log(dulyAge !== micol);//false
```
<br>

----
<br>

## __type변환__

<br>

__자바스크립트의 기본데이터 타입 - 6가지__

1. number
2. string
3. boolean
4. null - '비어있다 or 지금 현재 값을 알 수 없다'라는 의미의 아주 특별한 값
5. undefined - 변수를 선언만 하면 값도 type도 모두 undefined이다.
6. symbol

<br>

```js
//string을 number 타입으로 변환1
const score1 = '100';
const score2 = Number('100세');

console.log(`score 변수의 타입은 ${typeof score1}`);//string
console.log(`score 변수의 타입은 ${typeof score2} - ${score2}`);//number - NaN(Not a Number) 한글이 껴있어서 NaN 출력

//string을 number 타입으로 변환2
const age = parseInt('40세');//parseInt 정수로 변환

console.log(`age 변수의 타입은 : ${typeof age} - ${age}`);//number - 40

//string을 number 타입으로 변환3
const weight = parseFloat('75.9');//parseFloat 소수점 포함 정수로 변환

console.log(`weight : ${typeof weight} - ${weight}`);//number - 75.9
```
<br>

----
<br>

## __Null병합연산자__

<br>

__?? (Null 병합 연산자)__

왼쪽 피연산자의 값이 null 또는 undefined 이면 오른쪽 피연산자를 반환(return)하고, 그렇지 않으면 왼쪽 피연산자의 값을 반환하는 논리 연산자이다.

<br>

```js
//인터넷으로 데이터를 받아와서 저장
let dnldData = null;//다운로드 받은 데이터
dnldData = 'Download File 01'

let result = dnldData ?? '다운로드 받은 데이터가 없습니다.';

console.log(`result = ${result}`);


//0은 null 또는 undefined에 해당하지 않음.
const lucky = 0 ?? 42;

console.log(`lucky = ${lucky}`);//0
```