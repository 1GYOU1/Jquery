## __인라인방식 이벤트처리__

<br>

문제)

이미지를 클릭했을 때 msgFn 함수에 '1gyou1_test' 문자열 전달하기

__HTML__
```html
<img onclick="msgFn('1gyou1_test')" src="../image.png" alt="#">    
```
__JS__
```js
const msgFn = function(msg){
    alert(msg);
};
//1gyou1_test
```
----

<br>

## __자바스크립트 영역에서 DOM을 이용한 이벤트처리__

<br>

문제)

텍스트문장을 매개변수 msg로 전달받아 alert()으로 출력하는 msgFn 표현식 함수를 선언하기

__HTML__
```html
<div id="wrap">
    <button>클릭영역</button>
</div>
```
__JS__
```js
const myFn = function(msg){
    alert(msg);
}

document.querySelector('#wrap > button').addEventListener('click', function(){
    myFn('good')
});
```
----

<br>

## __DOM 셀렉팅__

<br>

<b style="background-color:#fff5b1">document</b> → HTML 문서 전체를 가리키는 객체

<b style="background-color:#fff5b1">.getElementById('')</b> → id를 이용해서 DOM을 선택하는 방법
```js
const $tit = document.getElementById('tit');
```
<br>

<b style="background-color:#fff5b1">.querySelector('')</b> → CSS 방식으로 하나만 선택

```js
const $h1 = document.querySelector('h1');
```
<br>

<b style="background-color:#fff5b1">.querySelector('')</b> → CSS 방식으로 여러개 선택
- 배열형식으로 저장

```js
const $item = document.querySelectorAll('.item');
```
----

<br>

## __attribute__

<br>

태그의 속성 추가 또는 변경

<b style="background-color:#fff5b1">.setAttribute</b>('속성명', '속성값')

```js
$cont.setAttribute('style', 'background-color : skyblue');
//style 변경
```
<br>

태그의 속성 제거

<b style="background-color:#fff5b1">.removeAttribute</b>('속성명', '속성값')

```js
$cont.removeAttribute('class');
//class 제거
```
<br>

태그의 속성값 가져오기

<b style="background-color:#fff5b1">.getAttribute</b>(속성명)

```js
$cont.getAttribute('id')
```
<br>

특정 속성을 가지고 있는지 확인

<b style="background-color:#fff5b1">.hasAttribute</b>(속성명)

```js
if($cont.hasAttribute('id')){
    console.log('id 값 존재.')
}
```
<br>

## __Style__

<br>
css 값 세팅

```js
$cont.style.color = 'purple';
$cont.style.fontWeight = 'bold';
$cont.style.fontSize = '24px';
$cont.style.backgroundColor = 'lavender';
$cont.style.width = '300px';
$cont.style.height = '100px';
```
css 값 가져오기
```js
window.getComputedStyle($cont).getPropertyValue('width')
window.getComputedStyle($cont).getPropertyValue('color')
```