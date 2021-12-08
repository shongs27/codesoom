/* eslint-disable react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  // props가 없는 null 이면 {}로서 처리
  Object.entries(props || {}).forEach(([key, value]) => {
    // DOM의 속성은 소문자 처리
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    // 텍스트가 아니라 노드면
    if (child instanceof Node) {
      element.appendChild(child);
    } else element.appendChild(document.createTextNode(child));
  });

  return element;
}

const display = (
  <div>
    <p>Hello World!</p>
  </div>
);

const app = document.getElementById('app');
app.textContent = '';
app.appendChild(display);
