## __Truthy_and_Falsy__

<br>

```js
console.log(!!' ');//true

//falsy한 값
console.log(!!'');//false
console.log(!!0);//false
console.log(!!null);//false
console.log(!!undefined)//false;
console.log(!!NaN);//false

//그 외의 모든 값은 truthy한 값

//!!가 false였으니 !은 true
console.log(!'');//true
console.log(!0);//true
console.log(!null);//true
console.log(!undefined)//;true
console.log(!NaN);//true
```
<br>

----
<br>

## __단순_if문__

<br>

```js
//사용자로부터 문자열 값을 입력받는 prompt(안내문, 기본값) 함수

let num = prompt('좋아하는 숫자는 무엇인가요?', );
const rest = num % 2; //0 또는 1

if(!num){
    console.log('사용자가 아무것도 입력하지 않아서 기본 값을 할당함.');
    num = 777;
}else if(rest === 1){
    console.log('입력한 숫자는 홀수입니다.')
}else if(rest === 0){
    console.log('입력한 숫자는 짝수입니다.')
}

//문자 숫자를 연산 가능한 진짜 숫자로 변환
num = parseInt(num);

console.log(`num = ${num}`);
console.log(`num = ${typeof num}`);//number
```

<br>

## __다중if(시험등급)__

<br>

수학점수 score 를 입력받고,<br>
90<=score<=100  이면 "1등급",<br>
80<=score<90  이면 "2등급",<br>
70<=score<80  이면 "3등급",<br>
60<=score<70  이면 "4등급",<br>
60점 이하이면 "재평가 대상입니다." 으로 알림창 출력하는 코드를 작성하세요.

<br>

```js
const score = parseInt(prompt('수학점수를 입력해주세요.'));

if(100 >= score && score >= 90 ){
    alert('1등급');
}else if(90 > score && score >= 80){
    alert('2등급');
}else if(80 > score && score >= 70){
    alert('3등급');
}else if(70 > score && score >= 60){
    alert('4등급');
}else if(60 > score){
    alert('재평가 대상입니다.');
}else{
    alert('다시 입력해주세요.')
}
```

<br>

----
<br>

## __switch문__

<br>
switch 형식 ↓↓

<br>

```js
switch(조건비교할 변수){
    case 비교값 1 : 
        실행할 코드;
        break;
    
    case 비교값 2 : 
        실행할 코드;
        break;

    case 비교값 3 : 
        실행할 코드;
        break;

    default : 
        실행할 코드;

}
```
```js
const score = prompt('학점을 입력하세요','A or B or C');

switch(score){
    case 'A' :
        console.log('당신의 점수는 90점 이상입니다.');
        break;

    case 'B' :
        console.log('당신의 점수는 80점 이상입니다.');
        break;

    case 'C' :
        console.log('당신의 점수는 70점 이상입니다.');
        break;

    default:
        console.log('해당사항 없음.')
}
```

<br>

----
<br>

## __삼항연산자__

<br>

```js
if(true){
    console.log('참');
}else{
    console.log('거짓')
};//참

//위 코드를 삼항연산자로 변환

(true) ? console.log('참') : console.log('거짓');//참
```

<br>

변수에 어떤 값을 대입할 때 

삼항연산자 사용 사례 &downarrow;

<br>

```js
//student 변수에 age 값의 조건에 따라 다른 값을 저장(성인, 어린이)

const age = parseInt(prompt('나이를 입력하세요.'));

const student = (age > 20) ? '성인' : '어린이';

console.log(student);
```

<br>

----
<br>

## __조건부 렌더링 &&, ||__

<br>

__&&__ : 왼쪽의 조건이 참이면 오른쪽을 반드시 검사해야하는 특성을 이용.

__||__ : 왼쪽의 조건이 거짓이면 오른쪽을 반드시 검사해야하는 특성을 이용.

<br>

```js
const age = parseInt(prompt('나이를 입력하세요.'));

(age>7) && console.log('성인 O')
(age>7) || console.log('성인 X')
```
<br>

----
<br>

## __while 반복문__

<br>

__문제1)__ 

'test' 문자열을 10번 출력하기.

```js
console.log('test');

let i = 1;

while(i < 10){
    i++;
    console.log((i)+'test');
}
```

<br>

__문제2)__ 

j값이 현재 0인데 3보다 작을때까지 반복해서 콘솔창이 i값을 출력
```js
console.log('test');

let j = 0;

while(j < 3){
    j++;
    console.log(j);
}
```

<br>

__문제3)__ 

1~100까지의 합
```js
let sum=0;
let n=1;
```

<br>

__방법1__

```js
while(n<=100){
    sum += n;//1+2+3+...+100
    n++;
}

console.log(`sum = ${sum}`);//5050
```

<br>

__방법2__ - break 키워드는 제어문을 탈출


```js
 while(true){
    sum += n;
    n++;

    if(n>100){
        break;
    }
}

console.log(`sum = ${sum}`);//5050
```

<br>

__문제4)__ 

10이하의 짝수, 홀수 합 구하기

```js
let oddSum = 0;//홀수합
let evenSum = 0;//짝수합
let n = 0;

while(n <= 10){
    if(n%2 === 0){
        evenSum += n;
    } else{
        oddSum += n;
    }
    n++;
}

console.log(`홀수의 합 = ${oddSum}`);//1+3+5+7+9 = 25
console.log(`짝수의 합 = ${evenSum}`);//2+4+6+8+10 = 30
```
<br>

----
<br>

## __for문__

<br>

for반복문은 while문을 축약해서 표현

<br>

```js
//while
let n=0;
while(n<10){
    n++;
    console.log(n);
}

//for
for(변수 초기화;조건식;증감식){}

for(let n=0;n<10;n++;){
    console.log(n);
}
```
<br>

__문제1)__ 

0~9까지 콘솔창에 출력

```js
for(let i=0;i<10;i++){
            console.log(`i = ${i}`);
        }
```

<br>

__문제2)__ 

for문을 이용하여 1~100까지의 합을 구하시오

```js
let sum=0;

        for(let i=1;i<=100;i++){
            sum += i;
        }
        console.log(`1~100까지의 합은 ${sum}`);
        //1~100까지의 합은 5050
```

<br>

__방법1)__

```js
let oddSum=0;

for(i=1;i<100;i++){
    if(i%2==1){
        oddSum += i;
        oddSum = oddSum + i
    }
}
```

<br>

__방법2)__

```js
let oddSum=0;

for(let i=1;i<100;i+=2){
        oddSum += i;
    }
```

<br>

짝수의 합 구하기

```js
let evenSum=0;

for(let i=2;i<100;i+=2){
        evenSum += i;
    }
```

<br>

<b><h3>continue</h3></b>

continue를 만나는 순간 이후의 코드를 실행하지 않고 건너뛴다.

for문에서 사용할 경우 i++ 증감식 부분으로 이동시킨다.

<br>

```js
for(let i = 1; i < 10; i++){
    if(i===5){
        continue;
    }
    //i = 5 생략하고 진행.
}
```

<br>

한줄이면 중괄호 생략하고 쓸 수 있음.

<br>

```js
if(i===5) continue;
```

<br>

<b><h3>break</h3></b>

break는 for문을 아예 끝냄.

<br>


```js
for(let i = 1; i < 10; i++){
    if(i===8) break;
    //i = 7까지만 출력됨.
        }
```
