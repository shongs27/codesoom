## Jest
자바스크립트 테스팅 프레임워크

- babel-jest
- @testing-library/react : 실제DOM에 쿼리구문으로 쉽게 접근  
  - render에서 쿼리구문(getText(동기), findBy(비동기))을 꺼내 DOM을 가져온다
  - fireEvent와 같은 유저액션이 가능하다
- @testing-library-jest-dom : [Matcher 추가 확장](https://github.com/testing-library/jest-dom)    
- jest-plugin-context : context를 사용지원

## 용어
- Assertion - 단정문으로 기대하는 값과 실제하는 값이 일치하는지 확인 ex) exepct와 Matcher의 조합  
    expect(기대하는것).<Matcher>
- Signiture - 모든 테스트 연산은 name, parameters, return을 명세
- token - 최소한의 의미, 자격
- BDD : describe(테스트대상) - context(상황묘사 with, without, when) - it(기대결과)
 => 간단한건 test()를 사용하지만 BDD로 구현의도를 드러내며 작성하는 것이 옳다
- test suite : test:unit을 관계별로 묶어둔것

## 테스트
- 통합테스트 - 여러가지 컴포넌트들이 상호작용해서 잘 작동하는지 확인하는 것
- 유닛테스트 - 함수, 컴포넌트 등의 최소단위로 최소한의 기능을 테스트 하는 것
- 기능테스트 - e2e테스트 (end to end 테스트로 처음부터 끝까지 기능테스트 수행) ex) conceptJS - 실제 브라우저에서 사용자 테스트 가능하게 한다

## 터미널 부가명령어
--watchAll --verbose

## 요점
0. 동작 중심으로, 계획을 세워 테스트를 시작한다
1. 컴포넌트의 테스트 구현은  **컴포넌트 최소 목적**에 부합하는 **것**만 구현한다
2. 전체적인 통합테스트는 App.js의 비즈니스 로직을 다룬 컴포넌트에서 쓰도록 지향한다
3. 테스트끼리 상태가 공유되는 것들은 beforEach(테스트 실행전에 동작)와 같은 메소드를 통해 모두 초기화한다. (문맥이 다른 테스트를 새로 작성하는 것과 다르다)
4. 리스트가 있는지 expect().not.tobeNull(), expet().toHaveTextContent() 등으로 다양한 방법으로 확인가능하니 라이브러리 doc의 API도 중요하다


### 느낀점
- 새로운 것을 배울때는 일단 헤딩이다  
  최소한의 구현은 충분히 혼자 할 수 있다 약한 소리 하지 말 것  
  doc를 보되 한글 번역이 있으면 그걸 참조한다  
  https://codesoom-group.slack.com/archives/C02N79T6JTA/p1638544785020300
- 학습을 위한 글쓰기는 중요하다. 미사어구는 줄여서 필요한 말만 사용하자
