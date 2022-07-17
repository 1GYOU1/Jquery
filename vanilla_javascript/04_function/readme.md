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

myFn(1, 2);
```
