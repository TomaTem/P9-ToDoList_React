export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = action.payload;
      return {...state, toDoList: [...state.toDoList, newTask]};
    }
    case 'REWRITE_TODOLIST': {
        return {...state, toDoList: action.payload}
    }
    case 'DELETE_TASK': {
      break;
    }
    default: {
      return state
    }
  }
}
