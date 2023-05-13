import React from 'react';

function ToDoList({toDoList, setToDoList}) {
  return (
    <>
      <h3>Список задач</h3>
      <div className='mb-3'>
        {toDoList.map(post => (
          <div key={post.id} className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault'
              onClick={() => {
                let newPosts = toDoList.map(el => {
                  if (post.id === el.id) {
                    el.taskStatus = !el.taskStatus;
                  }
                  return {...el};
                });
                setToDoList(newPosts);
              }}
            />
            <label
              className='form-check-label'
              id={post.taskStatus ? 'checked' : ''}
              htmlFor='flexCheckDefault'>
              {post.task}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoList;