## Jest

자바스크립트 테스팅 프레임워크

- babel-jest
- @testing-library/react : 실제DOM에 쿼리구문으로 쉽게 접근
  - render에서 쿼리구문(getText(동기), findBy(비동기))을 꺼내 DOM을 가져온다
  - fireEvent와 같은 유저액션이 가능하다
- @testing-library-jest-dom : [Matcher 추가 확장](https://github.com/testing-library/jest-dom)
- jest-plugin-context : context를 사용지원
  => JEST는 라이브러리의 활용도가 높다

## TDD

1. Red - write a little test that doesn’t work, perhaps doesn’t even compile at first
2. Green - make the test work quickly, committing whatever sins necessary in the process
3. Refactor - eliminate all the duplication created in just getting the test to wor

2번까지 구현이 1차목표, 후에 지속적인 리팩토링(3번)으로 개선

## 용어

- Assertion - 단정문으로 기대하는 값과 실제하는 값이 일치하는지 확인 ex) exepct와 Matcher의 조합  
   expect(기대하는것).<Matcher>
- Signiture - 모든 테스트 연산은 name, parameters, return을 명세
- Mocking - 함수, 컴포넌트를 mocking해서 만들수 있다 (mock.spyOn은 객체 메소드를 mocking한다)
- token - 최소한의 의미, 자격
- BDD: describe(테스트대상) - context(상황묘사 with, without, when) - it(기대결과)
  - 간단한건 test()를 사용하지만 BDD로 구현의도를 드러내며 작성하는 것이 옳다
  - 개별 테스트는 만약 할 일이 있을 때(GIVEN), List컴포넌트를 렌더하면(WHEN), 할 일 목록이 렌더링 된다(THEN)

```
    const task = '3주차 과제하기'

    // Given
    const { getByPlaceholderText } = render(<App />);

    // When
    const input = getByPlaceholderText('할 일을 입력해 주세요');
    fireEvent.change(input, {
      target: {
        value: task,
      },
    });

    // Then
    expect(input.value).toEqual(task);
```

- test suite : test:unit을 관계별로 묶어둔것

## 테스트

- 통합테스트 - 여러가지 컴포넌트들이 상호작용해서 잘 작동하는지 확인하는 것 (App.js는 통합테스트를 작성해야하는가?)
- 유닛테스트 - 함수, 컴포넌트 등의 최소단위로 최소한의 기능을 테스트 하는 것
- 기능테스트 - e2e테스트 (end to end 테스트로 처음부터 끝까지 기능테스트 수행) ex) conceptJS - 실제 브라우저에서 사용자 테스트 가능하게 한다

## 터미널 부가명령어

--watchAll --verbose

## 요점

0. 기능을 점검하는 계획을 세워 테스트를 시작한다

- 1. 뷰를 잘 보여주는가?
- 2. 동작(함수)은 잘 작동하는가?

1. 단위테스트는 **컴포넌트 본연의 기능을 만족하는 최소한의 것**만 구현한다
2. 전체적인 통합테스트는 App.js의 비즈니스 로직을 다룬 컨테이너 컴포넌트에서 가능하다
   => 부모(컨테이너) 컴포넌트들에서는 자식 컴포넌트가 가진 특정 요소를 포함하는지를 테스트하는걸 추천
   https://github.com/CodeSoom/react-week3-assignment-1/pull/95#issuecomment-993627287
   테스트끼리 상태가 공유되는 것들은 beforEach(테스트 실행전에 동작)와 같은 메소드를 통해 모두 초기화한다.
3. 리스트가 있는지 expect().not.tobeNull(), expet().toHaveTextContent() 등으로 다양한 Matcher로 확인가능하니 testing library를 잘 알 것

### 느낀점

- 새로운 것을 배울때는 일단 헤딩이다  
  최소한의 구현은 충분히 혼자 할 수 있다. 약한 소리 하지 말 것
  doc를 보되 한글 번역이 있으면 그걸 참조한다  
  https://codesoom-group.slack.com/archives/C02N79T6JTA/p1638544785020300
- 학습을 위한 글쓰기는 중요하다. 미사여구는 줄이자.

### 개선점

!! 함수동작 중심의 테스트구현 말고 useState를 mocking 해서 점검하는 것을 공부해보자 => 4주차에서 redux로 상태관리하는것을 mocking
!! Mocking에 대해 공부하자 => (4주차 1강의 28분부터)
https://github.com/CodeSoom/react-week3-assignment-1/pull/95/files

query*는 찾지 못한 경우에도 테스트가 종료되지 않고, get*은 찾지 못하면 에러가 발생하여 테스트가 종료된다. 그래서 무조건 있어야 하는 경우를 가정한다면 get*을 사용하고, 없는 경우도 고려한다면 query*를 쓴다.
