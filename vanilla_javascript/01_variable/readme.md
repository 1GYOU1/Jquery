## __var로 선언한 변수에서 발생하는 Hoisting__
변수선언하는 이유 - 데이터를 저장하기 위해

var -> let, const 로 대체해서 사용하는 추세

호이스팅현상 - 아래에 선언한 변수를 끌어올려서 사용 가능하게 한다.

복잡한 대규모 프로그램에서는 의도하지 않은 오류를 일으키게 하는 현상.

```js
var puppy = '구름이';//문자열 저장

document.write(puppy);
console.log(puppy);
alert(puppy);

console.log(name);
var name = '홍길동';
```
<br>

## __let을 사용한 변수로 Hoisting 문제해결__

```js
let dog;//변수를 선언만 하고 값을 할당하지 않으면 undefined 값이 자동할당.
dog = '구름이';//변수에 값을 할당(대입)
dog = '행복한 구름이';//재할당

//에러발생 - 'dog' has already been declared
//한번 선언한 변수는 또 다시 선언할 수 없음.
// let dog = '이쁜 구름이';

document.write(dog);

let name = '둘리';//변수의 선언과 할당을 동시에 함.
```
<br>

## __const를 사용하면 Hoisting 안됨__

```js
//let은 호이스팅이 안되므로 에러발생
// console.log(name);
// console.log(dog);

let dog = '푸들';
const name= '구름이';//상수

//상수는 선언과 할당을 무조건 동시에 해야 함.
// name='구름이';
//상수에는 재할당이 안됨. 

console.log(name);
```
<br>

## __var로 선언한 변수의 유효범위__

일반적으로 변수는 중괄호 단위로 유효하다. 

하지만 var 키워드는 중괄호 단위의 유효범위가 설정되지 않으므로 논리적인 흐름 예측에 어려움을 겪게 만든다.

var 키워드는 함수단위로 유효범위가 설정된다.

```js
var nickname = '구름이';

    {
        var nickname = '돌돌이';
    }

    console.log(nickname);//돌돌이;

    var address = '서울';

    function addFn(){
        var address = '인천';
        console.log(address);//인천
    }

    addFn();

    //var 키워드는 함수단위로 유효범위가 설정된다.
    console.log(address);//서울
```
<br>

## __let & const로 선언한 변수의 유효범위__

let, const로 선언한 변수는 중괄호 단위로 유효하다.

```js
let nickname = '구름이';
    {
        let nickname = '돌돌이';

        const age = 25;
    }

    // console.log(age);//에러발생 : age is not defined

    console.log(nickname);//구름이
```
<br>

## __let & const로 선언한 변수의 특징__

let, const로 선언한 변수는 중괄호 단위로 유효하다.

let으로 선언한 변수의 특징 ↓

let은 뚜껑없는 컵 -> 원할 때마다 다른 내용물로 변경 가능
논리적인 흐름상 중간 내용이 바뀌어야 하는 변수라면 let으로 선언하기

const로 선언한 변수의 특징 ↓

const는 밀폐된 컵 -> 한번 내용물을 담으면 뚜꺼으로 완전 밀폐
논리적인 흐름상 중간에 내용이 바뀌면 안되는 변수라면 const로 선언

```js
let address = '서울시 강남구';
address = '서울시 서초구';
console.log(address);

console.log('-------');

const account = '국민은행 1234-56-78910 한규빵';
account = '농협은행 10987-65-43210 한규투';
//에러발생 Assignment to constant variable.

console.log(account);
```
<br>

## __string 복합 문법 작성__

```js
   const username = '1gyou1';
        console.log(`username 데이터타입 : ${typeof(username)} 입니다`)
        //username 데이터타입 : string 입니다.
        console.log('username 데이터타입 : '+typeof username+ ' 입니다')
        //username 데이터타입 : string 입니다.
        console.log('username 데이터타입 :',typeof username,'입니다')
        //username 데이터타입 : string 입니다. ,는 공백이 한칸 생김
        console.log('username 데이터타입 : %s 입니다.',typeof(username));
        //username 데이터타입 : string 입니다.
```