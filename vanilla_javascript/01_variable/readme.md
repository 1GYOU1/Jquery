## var로_선언한_변수에서_발생하는_Hoisting

```js
/* 여러줄 주석

변수선언하는 이유 - 데이터를 저장하기 위해

var -> let, const 로 대체해서 사용하는 추세
*/
var puppy = '구름이';//문자열 저장

//데이터출력 대상 => 브라우저, 콘솔창


document.write(puppy);
console.log(puppy);
alert(puppy);

/*
호이스팅현상 - 아래에 선언한 변수를 끌어올려서 사용 가능하게 한다.

복잡한 대규모 프로그램에서는 의도하지 않은 오류를 일으키게 하는 현상.

*/

console.log(name);
var name = '홍길동';
```
<br>

## let을_사용한_변수로_호이스팅_문제해결

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

## const를_사용하면_호이스팅_안됨

```js
//let은 호이스팅이 안되므로 에러발생
// console.log(name);
// console.log(dog);

let dog = '푸들';
const name= '구름이';//상수

//상수는 선언과 할당을 무조건 동시에 해야 함.
// name='구름이';//상수에는 재할당이 안됨. 

console.log(name);
```