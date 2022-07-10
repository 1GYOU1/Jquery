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
    alert('60점 이하이면 "재평가 대상입니다."');
}else{
    alert('다시 입력해주세요.')
}
```

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

변수에 어떤 값을 대입할 때 

삼항연산자 사용 사례

```js
//student 변수에 age 값의 조건에 따라 다른 값을 저장(성인, 어린이)

const age = parseInt(prompt('나이를 입력하세요.'));

const student = (age > 20) ? '성인' : '어린이';

console.log(student);
```

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