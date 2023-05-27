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
          el.taskCheckStatus = !el.taskCheckStatus;
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
      const id = action.payload;
      let newPosts = state.toDoList.map(el => {
        if (id === el.id) {
          el.taskEditStatus = !el.taskEditStatus;
        }
        return {...el};
      });
      return {...state, toDoList: newPosts}
    }
    case 'SAVE_EDITED_TASK': {
      const {id, editTask: task} = action.payload;
      console.log(action.payload);
      console.log('task');
      console.log(task);
      console.log("массив старый ")
      console.log(state.toDoList);
      let newPosts = state.toDoList.map(el => {
        if (id === el.id) {
          el.task = task;
          el.taskCheckStatus = false;
          el.taskEditStatus = false;
        }
        console.log("1 элемент " + el);
        return {...el};
      });
      console.log("массив ")
      console.log(newPosts);
      return {...state, toDoList: newPosts}
    }
    default: {
      return state
    }
  }
}
