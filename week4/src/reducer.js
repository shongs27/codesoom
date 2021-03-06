const initialState = {
  newId: 100,
  taskTitle: "",
  tasks: [],
};

export default function (state = initialState, action) {
  if (action.type === "updateTaskTitle") {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action.type === "addTask") {
    const { newId, taskTitle, tasks } = state;
    return {
      ...state,
      newId: newId + 1,
      taskTitle: "",
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (action.type === "deleteTask") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }
  return state;
}
