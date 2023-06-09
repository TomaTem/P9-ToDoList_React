import React from 'react';

function ToDoList({toDoList, setToDoList}) {
  return (
    <>
      <div class='d-grid gap-2 mt-5'>
        <h3 className='captionList badge text-bg-primary'>Список задач</h3>
      </div>
      <div className='mb-3'>
        {toDoList.map(post => (
          <div key={post.id} className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              defaultChecked={post.taskStatus ? 'checked' : ''}
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
              className={`form-check-label ${post.taskStatus ? 'checked' : ''}`}
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
