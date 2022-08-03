## __재귀와 스택__

<br>

1~100까지의 합 = 5050

1~100까지의 합을 구하는 재귀함수 → sum

재귀함수 = 자기 자신을 호출
```js
function sum(n){//100+99+...+3+2+1 구하기
    if(n<=1) return 1;//종료조건
        return n + sum(n-1);//n-1 = 99  //자기 자신을 호출
    }

const result = sum(100);
console.log(result)//5050
```
재귀함수의 경우, 

100부터 순회한 다음 호출스택에 쌓여 있는 값을 처리해 나가게 되는데,

스택(Stack)은 LIFO(Last In Fist Out) 방식이기 때문에

제일 마지막에 반환된 1부터 100까지 순차적으로 더해서 값을 반환하게 된다.

위 예제는 100+99+..+2+1 순으로 들어왔기 때문에

나갈때는 1부터 나간다는 얘기.

<br>

----

<br>

## __전역변수 지역변수 유효범위(scope)의_개념__

<br>


```js
let username = '규원';//runFc() 입장에서 보면 전역변수에 해당

function runFn(){
    const username = '뀨?'
    /*
        중괄호 안에서 username 변수를 먼저 찾고, 
        없으면 중괄호 밖(전역)에 있는지 찾는다.
    */

    console.log(username + ' Go');

    /*
        함수의 중괄호 안에서 선언한 지역변수에 해당
    */
    let address = '서울특별시 중구'
}

//함수 중괄호 안에서 선언한 지역변수는 밖에서 인식하지 못하기 때문에 에러발생.↓↓
//ReferenceError: address is not defined
//console.log(address + '에 살아요')

runFn();
//중괄호 안에 username 없을때 ↓↓
//규원 Go

//중괄호 안에 username 있을때 ↓↓
//뀨? Go
```
----

<br>

## __유령변수와 클로저__

<br>

일반적으로 지역변수는 함수가 실행되는 시점에 메모리가 생성되고, 종료될때 소멸된다.
```js
const closerFn = function(){
    let score = 60;

    return function(){
        score++;
        console.log(score);
    };
};

const printScore = closerFn();

printScore();//61
printScore();//62
printScore();//63
printScore();//64
printScore();//65
printScore();//66
```
위 예제 처럼 지역변수를 로직에서 활용하는 함수를 리턴하면 소멸되어야 할 지역변수가

소멸되지 않고 리턴된 함수 안에서 살아남아 계속 사용할 수 있게 된다.

<br>

이때 <b>살아남은 변수</b>를 <span style="background-color:#fff5b1;">'유령변수'</span>라 할 수 있으며, 

<b>리턴된 함수</b>를 <span style="background-color:#fff5b1;">'클로저'</span>라고 한다.

<br>

----

<br>

## __브라우저의 전역객체(변수)는 window__

<br>

window 객체는 생략가능
```js
window.console.log('1. console 메소드는 window객체에 등록된 것이었음.')

window.alert('2. window 객체에 등록된 메소드')

//window가 가지고 있는 property, method를 확인
console.log('3. window =', window)
/*  
    3. window = Window 
    {window: Window, self: Window, document: document, name: '', location: Location, …}
*/
```