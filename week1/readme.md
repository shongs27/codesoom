# 오리엔테이션

- 메타인지를 가진다 - 내가 아는 것과 모르는 것이 무엇인가 => 자기자신을 솔직하게 마주보자
- 의식적인 무지를 극복하자 - 모르는 것을 깨닫고 의도적으로 다양한 학습방법으로 연습한다 

- 강의 듣고 '무슨 일이 일어났지?' 떠올리면서 **output**중심으로 학습하자   
- 열심히가 중요한 것이 아니라 꾸준하게 commit 하자

### 공부법

공식문서는 무식하게 읽는게 맞다. 오류를 잡기 위해 보는 것이라면 '출발점'을 제대로 인지하고 시작
> 에러메시지는 정확하게 읽고 '내가 뭘 입력했고 어떤일을 유발했을까?'를 알고 출발점을 정확하게 잡는 것이 중요하다

스택오버플로우는 비슷한 통찰력을 관찰하고 **중요한 것은 공식문서를 통해 검증,학습한다**


# 1. JSX
https://github.com/CodeSoom/react-week1-assignment-1/pull/124
https://github.com/CodeSoom/react-week1-assignment-2/pull/116

- NPM(Node Package Manager)은 Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다
- 라이브러리는 CDN 대체되지만 지속적인 업데이트 하기 어렵다는 단점이 있다
- switch문이나 if문은 가독성을 낮추기 때문에 객체를 통해 나타내면 직관적이다
```
const fundamentalOperation = {
      '+': intValueA + intValueB,
      '-': intValueA - intValueB,
      '/': intValueA / intValueB,
      '*': intValueA * intValueB,
    };
fundamentalOperation[state.curOper];
```

- guard clauses - 중첩되는 if else문을 정리해서 명료하게 나타낸다

- JSX는 자바스크립트 확장문법으로 특정 라이브러리인 리액트에만 국한되지 않고 사용될 수 있다
```
// 바벨은 주석으로 함수를 변환시켜 대체할 수 있다
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  // 요소명 처리
  const element = document.createElement(tagName);

  // 요소의 속성값 처리
  // props가 없는 null 이면 {}로서 처리
  Object.entries(props || {}).forEach(([key, value]) => {
    // DOM의 속성은 소문자 처리
    element[key.toLowerCase()] = value;
  });

  // 요소 안의 내용을 처리
  children.flat().forEach((child) => {
    // 텍스트가 아니라 노드면
    if (child instanceof Node) {
      element.appendChild(child);
    } else element.appendChild(document.createTextNode(child));
  });

  return element;
}
```

- 전역변수의 생성을 지양하고 매개변수를 destructuring 함으로서 순수함수 구현을 지향한다  
- 객체를 받아서, 객체를 반환한다 (Receive Object, Return Oject )  
[RORO패턴](https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/)


## webpack
webpack webpack-cli webpack-dev-server
webpack serve 명령어는 webpack-dev-server를 구동한다
https://webpack.kr/api/cli/#serve

~~webpack-dev-server는 src폴더가 반드시 필요하고   
자체적으로 번들링된 main.js를 가지고 그 안에 src폴더의 내용들이 합쳐져 있다   
html만 보여줄때는 webpack.config.js에서  'html-webpack-plugin'이 필요하다~~    
=> 결국 버전 따라서 다른거다. 직접 버전을 낮춰보거나 항상 정식 doc를 믿는다

## eslint
eslint 확장프로그램은 vscode에 eslint를 소프트웨어적으로 편하게 돕기 위해 적용된다  

```npx eslint --init // eslint 설정파일 만들기
npx eslint . (--fix) // 오류탐색, 강제수정
```

## babel
babel @babel/core @babel/preset-env @babel/preset-react

- 최신문법을 ES5이전의 문법으로 바꾸어준다
- webpack과의 결합을 위해서는 babel-loader가 필요하다

## 변수명
- 변수나 매개변수는 축약형으로 쓰는 것보다 충분히 의미를 담게 작성하는 것을 지향한다
- 동작논리를 나타내는 변수명보다 기능을 하는 변수명이 더 낫다


## 느낀점
- commit은 작은 기능구현 단위로 자주 보내자
- 읽는 사람을 염두한 명확한 코딩을 하자
    - 명확하고 통일성 있는 변수, 인수 네이밍
    - switch, if~else 지양-> 객체 , guard clauses 지향
    - RORO패턴
- 대충 넘어가지말고 오류를 정확하게 읽고 출발점을 명확하게 한다
- 공식문서에 쫄지말고 각 기능의 목적을 가능한 자세히 파악한다