## 모킹

jest.fn()
jest.mock()
jest.spyOn(globalThis.console, "log")
jest.mock()와 유사하게 동작하면서 '객체'의 메소드를 spy하는 가짜함수를 반환한다

## TDD 작성순서

테스트 -> 구현 -> 리팩토링

- TDD의 대원칙말고 컴포넌트의 작성순서는 정해져 있지 않다
- 필요한 것부터 구현한다

## 컨테이너가 포함해야 하는 것

1. 자식의 특정요소가 포함되는지 확인
2. 컨테이너의 기능이 제대로 호출되는지 확인
   - 리덕스의 패턴
     - useDispatch : toBeCalledWith(action())
     - useSelector(state) : expect(queryByText(/정보/)).not.toBeNull();
       - get은 데이터를 못찾으면 오류를 보여주기 때문에 query로 써서 테스트를 끝까지 수행하자

## commit 작성법 정리

feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서의 수정
style : (코드의 수정 없이) 스타일(style)만 변경(들여쓰기 같은 포맷이나 세미콜론을 빼먹은 경우)
refactor : 코드를 리펙토링
test : Test 관련한 코드의 추가, 수정
chore : (코드의 수정 없이) 설정을 변경

jest.spyOn은 객체의 메서드를 테스트대역으로 삼을때 유용
https://haeguri.github.io/2020/12/21/clean-up-jest-mock/

## 복기

resolve - 용해하다 풀다  
reify - 구체화하다  
deprecated - 나중에는 쓰이지 않는다

1. 컴포넌트를 먼저 만들든, 리듀서를 만들든 순서에 상관없이 설계할 줄 알아야 한다.
2. test:e2e가 안됐던 이유는 속성을 name으로 오류를 주의깊게 읽지 않았기 때문이다
   오류를 보는 것은 메타인지와 같다
   1. 아는 것과 모르는 것을 나누고
   2. 아는 것에서 내가 원하는 것과 무엇이 다른지를 확인한다
   3. 이상이 없다면 모르는 것에 대해서 공부한다  
      https://github.com/CodeSoom/react-week4-assignment-2/pull/74#issuecomment-1001050363
3. 함수가 호출되는지가 중요하지 함수가 어떻게 구성되는지는 테스트항목에서 중요한 것이 아니다  
   그렇기에 다른 컴포넌트의 함수 동작을 테스트하지 않는다  
   https://codesoom-group.slack.com/archives/D02NV7DHW9Z/p1640364257000700
4. 모듈 모킹 설정
   jest는 **mocks**폴더가 있으면 자동으로 모킹한 파일을 임포트하게 된다.  
   모킹된 모듈을 임포트하여 실제와 다르게 동작시켜야 하기 때문에 import를 사용한다.  
   만약 **mocks** 폴더 안의 코드들을 수정할 필요가 없다면 임포트하지 않아도 된다.  
   => jest는 **mocks** 폴더는 자동으로 mock하기 때문에 jest.mock('react-redux');를 쓰지 않아도 된다.  
   => Jest.mock()를 위해서 **mock**폴더안에 내용은 자동으로 모듈을 가져오면서 함수들을 mock로 적용하게 되는데,
   가져온 항목에 수정이 필요하니깐 import {수정이 필요한것} from '모듈이름'으로 '수정이 필요한것'을 가져온다
   https://codesoom-group.slack.com/archives/D02NWGD4HU4/p1640419409008900
5. 초기상태가 비었다는 것을 간단하게 나타내는 코드

```
  const initialState =  { newId: 100, tasks: [], taskTitle: "" };

  describe("changeTodo", () => {
    it("changes taskTitle", () => {
      const state = reducer({ ...initialState, taskTitle: '' }, changeTodo("4주차 과제하기"));

      expect(state.taskTitle).toBe("4주차 과제하기");
    });
  });
```

initialState를 깔끔하게 넣고, taskTitle이 초기상태로 비었다는 것을 깔끔하게 표현한다

### npx (node package runner)

노드모듈의 '실행'을 간편히 하는 명령어
로컬이나 $path에 해당항목이 없다면 노드 cache 폴더에
패키지다운로드하고, 실행, 임시로 두고 나중에 실행 안하면 삭제됨

## 변수명

변수의 수명은 길수록 자세한 이름을 가져야 한다. 변수선언과 멀어질수록 의미를 파악하기 어려워지기 떄문이다.
반대로, 변수의 수명이 짧을수록 더 간단한 이름을 사용해야 한다. 변수의 선언과 가깝기때문에 의미를 파악하기 쉽고 잠깐 사용하기 때문이다.

## 제어컴포넌트

- 제어컴포넌트 - 대표적인 input
  코드로서 value와 이벤트핸들러로 값을 제어한다
- 비제어 컴포넌트 - input type="file" ref={}
  순수DOM의 조작으로 코드가 아닌 사용자가 직접제어해야 하는 경우
