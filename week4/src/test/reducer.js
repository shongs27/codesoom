const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: { id: 2 },
};

export default function (state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }
  if (action.type === 'addTask') {
    return {
      ...state,
      tasks: { id: 1 },
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }
  return state;
}
