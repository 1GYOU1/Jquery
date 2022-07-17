## __일괄 반복처리__
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

문제1) 두개의 숫자를 매개변수명 x, y에 전달받아 그 합을 출력하는 함수를 선언하고 호출하시오.

```js
function myFn(x, y){
    console.log(x + y);
}

myFn(10, 20);//30
```
<br>

## __매개변수, 지역변수, 전역변수, scope__

문제) 현재 나의 통장잔액은 3만원이다.

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


현재 Problen - 여러번 입금시 총액이 맞지 않음 => 업그레이드(Refactoring) 개선

전역변수 - 함수바깥에서 선언한 전역변수는 함수 안에서 하용할 수 있다.

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


