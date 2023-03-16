# Code Review by Chat GPT-4
## Suggestions and improvements
1. Separate CSS, JavaScript, and HTML into different files for better organization and maintainability. Create a `.css` file for styles and a `.js` file for JavaScript.

2. Use semantic HTML elements like `<header>`, `<section>`, `<footer>`, etc. for better structure and accessibility.

3. Use lowercase for the `backgroundColor` variable to follow camelCase naming conventions in JavaScript.

4. Use `const` instead of `let` for variables that don't change, like totalProblems, correct, incorrect, and backgroundColor.

5. Use `textContent` instead of `value` for the `textarea` element to improve accessibility.

6. Add `type="button"` to the buttons to ensure they don't submit forms by default.

7. Use `addEventListener` for attaching event listeners instead of inline event handlers for better separation of concerns.

## What is addEventListener() and "DOMContentLoaded"?
`addEventListener()` is a JavaScript method used to attach event listeners to HTML elements. It takes two arguments: the event type (e.g., "click", "mouseover", etc.) and a callback function that will be executed when the event is triggered.

`"DOMContentLoaded"` is an event type that fires when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, or other external resources to finish loading. Attaching an event listener with this event type ensures that the callback function is executed when the DOM is ready, allowing you to safely manipulate the HTML elements.

Here's an example using `addEventListener()` with the `"DOMContentLoaded"` event:
```javascript
document.addEventListener("DOMContentLoaded", function() {
    // This code will run once the DOM is ready
    console.log("The DOM is fully loaded and parsed");
});
```
In the updated code I provided earlier, I used this event to call the init() function when the DOM is ready:
```javascript
document.addEventListener("DOMContentLoaded", init);
```
This ensures that the `init()` function is executed when the DOM is fully loaded, preventing any issues that might arise from trying to manipulate elements before they are available in the DOM.

## What is DOM?
DOM stands for Document Object Model. It is a programming interface for web documents, representing the structure of a document as a tree of objects. Each object in this tree is called a "node," representing a part of the document, such as an HTML element, an attribute, or text.

The DOM allows scripts and programming languages, like JavaScript, to interact with and manipulate the content and structure of an HTML or XML document. Through the DOM, you can access, modify, create, or delete elements and their attributes, as well as add event listeners to handle user interactions.

Here's a simple example of using the DOM in JavaScript to manipulate an HTML document:

### HTML:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <h1 id="title">Hello, World!</h1>
    <button id="changeTitle">Change Title</button>

    <script src="script.js"></script>
</body>
</html>
```
### JavaScript (script.js):
```javascript
document.getElementById('changeTitle').addEventListener('click', function() {
    const titleElement = document.getElementById('title');
    titleElement.textContent = 'New Title!';
});
```
In this example, when the button with the ID `changeTitle` is clicked, the JavaScript code accesses the DOM to find the `h1` element with the ID `title`, and changes its text content to "New Title!". This demonstrates how the DOM allows for interaction and manipulation of web documents using JavaScript.

## 배운거 정리
1. backgroundcolor는 한 단어이다.
2. 애매하게 `const`, `let` 섞어쓰지 말고 변하지 않는건 `const` 사용하기
3. javascript를 이용하여 HTML의 text를 변경할 때는 `value` 대신 `textContent` 사용하기
4. <button> 태그는 기본적으로 form을 submit 하므로, 단순한 버튼일 때는 `type="button"` 설정하기
5. javascript에서 `addEventListener()` method를 사용하여 별도의 파일로 분리 후 HTML과 상호작용할 수 있다.
6. `"DOMContentLoaded"` event type은 stylesheets, images 등 외부 리소스 파일을 불러오기 전에 function을 호출하지만, `<body>` 태그에 `onload` 속성을 설정하면 불러온 후에 function을 호출한다.
7. DOM은 Document Object Model의 약자이다.
8. DOM은 문서의 구조를 객체 트리로 표현하는데, 이 트리의 각 객체를 "node"라고 하며, HTML element, attribute 또는 text와 같은 문서의 일부를 나타낸다(그래서 javascript에서 document를 붙여주는구나). 

## 기타
1. 물어볼게 산더미 같은데 어느 선에서 끊어야할까?
2. 책에서 공부하고 나면 사용하려고 미뤄두던 것들도 있는데, 책하고 상호보완적으로 해야겠다.