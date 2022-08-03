## __Node 속성__

<br>

태그는 3가지의 Node로 이루어져있다.
1. 요소노드 -> elementNode
2. 속성노드 -> attributeNode
3. 텍스트노드 -> textNode

텍스트노드는 요소노드의 첫번째 자식노드 이므로 내용을 가지고 오고 싶다면 .firstChild를 거쳐야한다.

왜냐하면 textNode가 아닌 노드의 nodeValue값은 null이기 때문이다.

생략하면 null이 나옴.

즉, nodeValue는 텍스트노드에만 유의미하다.

<br>

## __DOM-Tree를 타고 이동할 수 있는 Node 속성__
