## 리액트의 목적
- UI와 비즈니스 로직의 분리
- 가상DOM을 활용한 렌더링 최적화

## 선언형 프로그래밍
리액트는 선언형 프로그래밍으로 '어떻게 구현할 것인지'에 대한 고민은 ReactDOM으로 이전시키고  
'어떻게 보여줄 것인가?'에 집중해서 컴포넌트 별로 관심사를 분리시켜 독립적인 프로그래밍을 구현한다  

## 리액트 Hooks
React Hook은 state와 생명주기 기능을 연동(hook into)한다

## useState
- 상태를 변경하는 이 hooks의 정체는 컴포넌트를 갱신된 값과 함께 불러오는 것이다
- 여러개의 state를 추가하는 것보다 하나의 객체로 설정해서 관리하는 것이 가독성에 좋다
```
const [state, setState] = useState({
    id: 
    todo:
    todos:
})
```
- 비동기로 작동하여 최신의 값을 반영하지 못할때는 setter함수를 함수형 업데이트(콜백함수)로 두어 처리한다 (무작정 쓰지 않는다)
- useEffect를 사용하여 최신값을 알아볼 수 있다


## input과 button
- 가급적 DOM을 직접 조작하는 useRef는 지양한다  
https://reactjs.org/docs/forms.html#controlled-components  
=> controlled component에 있는 input은 value로 DOM처리를 해줄 수 있다

# 느낀점
- 코드의 가독성이 중요하다  
이해가 쉬운 변수명, 의미단위의 띄어쓰기, guard Clauses, 단복수의 의미 ...etc...
- 내가 사용하는 최신트렌드의 기술은 꼼꼼히 읽어보자  
https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html  
ex) 더이상 React.createElement로 jsx를 transform 하지 않는다  
    @babel/preset-react., eslint-plugin-react는 jsx-runtime을 돕는다


