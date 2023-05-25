export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = action.payload;
      return {...state, toDoList: [...state.toDoList, newTask]};
    }
    case 'CHECK_TASK': {
      const id = action.payload;
      let newPosts = state.toDoList.map(el => {
        if (id === el.id) {
          el.taskStatus = !el.taskStatus;
        }
        return {...el};
      });
      return {...state, toDoList: newPosts}
    }
    case 'DELETE_TASK': {
      const id = action.payload;
      let reducedToDoList = state.toDoList.filter(
        el => id !== el.id
      );
      return {...state, toDoList: reducedToDoList}
    }
    case 'EDIT_TASK': {
      // const id = action.payload;
      // let reducedToDoList = state.toDoList.filter(
      //   el => id !== el.id
      // );
      // return {...state, toDoList: reducedToDoList}
      break
    }
    default: {
      return state
    }
  }
}
