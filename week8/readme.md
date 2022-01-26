이번 주차 배운 것의 키워드는 3가지다

1. Style component
2. 컴포넌트 최적화 개선
3. 리덕스 개발환경 개선

한가지씩 점검해보자

1. Style component
   스타일 컴포넌트는 기존의 CSS를 통해 수행하던 디자인을 자바스크립트에서 사용함으로서 일원화해준다  
   CSS를 다시 만들 필요 없이 UI를 만드는 리액트의 작업에서 디자인을 같이 고민해서 처리해줄 수 있다는 것이 무척 편했다  
   이것은 CSS의 컴포넌트화로 이미 만들어진 틀(컴포넌트)에 hydrate라는 개념을 적용해서 디자인을 입혀준다는 개념이었다.  
   얼마든지 깊어질 수 있는 기술개념을 파고들면서 원리의 중요성에 대해서 다시 한번 깨달았다  
   자바스크립트의 기본개념과 리액트의 컴포넌트화에 구조에 대해서 명확하게 알수록 기타 라이브러리의 대한 개념 적용도 얼마든지  
   빠르게 적용할 수 있겠다라는 생각이 들었다.  
   기초를 게을리 하지 말자

2. 컴포넌트 최적화 개선  
   컴포넌트의 최적화는 react.memo와 useCallback의 react hook을 이용해서 이뤄졌는데, 최적화에 대한 명확한 정답은 없다는게 결론이다.  
   두 hook에 대한 고려대상을 정해보자면 props로 이어진 두 컴포넌트의 데이터가 무분별한 리렌더링을 일으키는 사이드이펙트가 있을 경우인데,  
   이러한 경우는 많은 자식 컴포넌트를 다루는 등의 아주 무거운 컴포넌트이거나, (그렇다 하더라도) 대게의 경우는 현대상의 기술은 리렌더링으로  
   인한 가상DOM의 비교라는 자체가 문제가 되지 않기 때문에 컴포넌트의 최적화는 hook의 사용에 의지하여 리렌더링을 방지하는 것보다 **구조의 개선**에 대해서 고민해봐야 한다는 조언을 얻을 수 있었다  
   리액트와 리덕스를 분리하는 컨테이너-컴포넌트 관계도 그러한 구조에 도움이 줄 수 있겠구나 하는 생각과 단순한 기술에 대해 의지하는 것보다
   보다 큰 틀에서 '구조'를 생각 할 수 있어야 한다는 점을 배웠다

3. 리덕스 개발환경 개선
   불편함을 해결하기 위해 새로운 기술이 나온다.  
   그냥 해야 하니깐 리덕스를 배운게 아닌가 하는 반성을 해본다  
   리덕스의 개발설정이 불편하게 느껴지면서도 개선하려는 고민을 하지 못하는게 아직 내가 코더에 불가하다는게 아닌가 하는 생각이 든다  
   내가 기억하고 공부해야하는것은 리덕스의 flux구조에 있는 것이지 개발환경 설정을 하나하나 외운다는 생각을 하지말자  
   기술은 매번 바뀌고 큰 틀만 잡고 적용해서 바꿀 수 있는 그 능력을 기르자