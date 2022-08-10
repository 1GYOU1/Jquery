## __Node 속성__

<br>

태그는 3가지의 Node로 이루어져있다.
1. 요소노드 -> elementNode
2. 속성노드 -> attributeNode
3. 텍스트노드 -> textNode

<br>
텍스트노드는 요소노드의 첫번째 자식노드 이므로 내용을 가지고 오고 싶다면 .firstChild를 거쳐야한다.

왜냐하면 textNode가 아닌 노드의 nodeValue값은 null이기 때문이다.

생략하면 null이 나옴.

즉, nodeValue는 텍스트노드에만 유의미하다.


```js
const $h1 = document.getElementById('title');
console.dir($h1);//객체를 구조적으로 살펴봄
```
<br>

----

<br>

## __DOM-Tree를 타고 이동할 수 있는 Node 속성__

<br>


```js
const $dl = document.querySelector('dl');

console.log('1. $dl의 자식태그 선택 =', $dl.children)
//배열형식
//1. $dl.children = HTMLCollection(4)

console.log('$dl.children =', $dl.children[0])
//<dt>...</dt>

console.log('2. $dl의 첫번째 자식태그 선택 =', $dl.firstElementChild)
//2. $dl의 첫번째 자식태그 선택 = <dt>...</dt>

console.log('3. $dl의 마지막 자식태그 선택 =', $dl.lastElementChild)
//3. $dl의 마지막 자식태그 선택 = <dd class="nation greting">...</dd>

//특정요소의 직계자식의 개수 파악
console.log('4. $dl의 직계자식 개수 = ',$dl.childElementCount);
console.log('5. $dl의 직계자식 개수 = ',$dl.children.length);
//4. $dl의 직계자식 개수 =  4

console.log('6. $dl의 직계부모 선택 = ',$dl.parentElement);
//body

console.log('7. $dl의 이전요소는 = ',$dl.previousElementSibling);
//<h1>DOM-Tree를 타고 이동할 수 있는 Node 속성</h1>

console.log('8. $dl의 다음요소는 = ',$dl.nextElementSibling);
//<script>부분이 나옴
```

<br>

----

<br>

## __노드 생성과 추가__

<br>

```js
/*
    <h1 name = "규원" address="신당동">Hello 1GYOU1</h1>
    만들기
    
    엄밀히 말해서 태그는 3가지의 Node로 이루어져 있다.
        1. 요소노드 -> elementNode
        2. 속성노드 -> attributeNode
        3. 텍스트노드 -> textNode
*/   

const $h1 = document.createElement('h1');//h1 요소노드 생성

//속성
$h1.setAttribute('name','규원');
$h1.setAttribute('address','신당동');

//텍스트노드
const $txt = document.createTextNode('Hello 1GYOU1')

$h1.appendChild($txt);//두개의 부품을 결합

document.body.appendChild($h1)//body에 추가
```

<br>

----

<br>

## __원하는 위치에 노드 추가 또는 이동__

<br>

__.appendChild(), insertBefore()__

```html
<ul id="subject">
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Nodejs</li>
    <li>React</li>
    <li>Vue</li>
</ul>
```

```js
const $subject = document.getElementById('subject');

//<li>phososhop</li>
const $psd = document.createElement('li');
const $psdTxt = document.createTextNode('photoshop');
$psd.appendChild($psdTxt);//결합 

//<li>illustrator</li>
const $illust = document.createElement('li');
const $illustTxt = document.createTextNode('illustrator');
$illust.appendChild($illustTxt);//결합

//$psd를 $subject의 첫번째 자식으로 추가
$subject.insertBefore($psd, $subject.firstElementChild);

//$illust를 $subject의 마지막 자식으로 추가
$subject.appendChild($illust);
```
__👇🏻 result 👇🏻__
```
photoshop
HTML
CSS
Javascript
Nodejs
React
Vue
illustrator
```

<br>

```html
<ul class="friends">
    <li>GYOU1</li>
    <li class="first"><mark>GYOU2</mark></li>
    <li>GYOU3</li>
    <li class="last"><mark>GYOU4</mark></li>
</ul>
```

```js
const $friends = document.querySelector('.friends');
const $first = document.querySelector('.first');
const $last = document.querySelector('.last');

//첫번째 자식으로 이동
$friends.insertBefore($first, $friends.firstElementChild);
//마지막 자식으로 이동
$friends.appendChild($last);
```
__👇🏻 result 👇🏻__
```
GYOU2
GYOU1
GYOU3
GYOU4
```

<br>

----

<br>

## __cloneNode(true)는 자손을 포함한 노드 복제__

<br>

__.cloneNode()__
```html
<ul class="subject">
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>nodejs</li>
    <li>react</li>
</ul>

<section></section>
```
```js
const $subject = document.querySelector('.subject');
        
//모든 자손노드를 포함하여 복제 (true)
//빈칸이나 false하면 자손노드 복제 X
const $clone = $subject.cloneNode(true);

console.log($clone);

document.querySelector('section').appendChild($clone);

//.appendChild() -> 선택한 요소 안에 자식요소를 추가
//.prepend() -> 요소의 맨 앞에 위치
```
__👇🏻 result 👇🏻__
```html
HTML
CSS
Javascript
nodejs
react

HTML
CSS
Javascript
nodejs
react
```

<br>

----

<br>

## __노드 제거, 변경__

<br>

__removeChild(), replaceChild()__

먼저 부모노드에 접근한 후 삭제나 교체를 시도한다.

```html
<ul id="list">
    <li style="color:red">list_1</li>
    <li>list_2</li>
    <li>list_3</li>
    <li style="color:blue">list_4</li>
    <li>list_5</li>
</ul>
```

```js
const $list = document.getElementById('list')
```

__문제 1)__ 첫번째 li를 삭제하시오.

```js
const $firstChild = $list.firstElementChild;

//삭제할 노드는 반드시 .removeChild를 호출한 노드의 자식이어야한다.
$list.removeChild($firstChild)
```
__문제 2)__ 마지막 li를 $firstChild로 교체하시오.
```js
const $lastChild = $list.children[$list.children.length-1]
console.log($list.children.length)//4
console.log($list.children.length-1)//3

//교체할 노드는 .replaceChild()를 호출한 노드의 자식이어야한다.
$list.replaceChild($firstChild ,$lastChild)
                //가져올 인자, 보낼(바뀔) 인자
```
__문제 3)__ list_3을 삭제하시오.
```js
const $list3 = $list.children[1]
$list.removeChild($list3)
//또는
// $list3.parentElement.removeChild($list3)
```

