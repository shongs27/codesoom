import { render, fireEvent } from "@testing-library/react";
import Reducer from "./reducer";

import { updateTaskTitle } from "./actions";
/* 계획
1. updateTaskTitle
    - input이 잘 변하는지 보여준다
2. addTask
    - task가 잘 추가되는지 보여준다
3. deleteTask
    - task가 잘 지워지는지 보여준다
*/

describe("reducer", () => {
  describe("updateTaskTitle", () => {
    it("change taskTitle", () => {
      //given
      const initialMockState = {
        taskTitle: "",
      };
      const state = Reducer(initialMockState, updateTaskTitle("잘생겼는데?"));

      expect(state.taskTitle).toBe("잘생겼는데?");
    });
  });
});
