import React from 'react';
import {useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

function ToDoList() {
  const {state, dispatch} = useContext(globalContext);

  function chekingTask(id) {
    dispatch({
      type: 'CHECK_TASK',
      payload: id,
    });
  }

  function deletingTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    });
  }

  function editingTask(id) {
    dispatch({
      type: 'EDIT_TASK',
      payload: id,
    });
  }

  return (
    <>
      <div className='d-grid gap-2 mt-5'>
        <h3 className='captionList badge text-bg-primary'>Список задач</h3>
      </div>
      <div className='mb-3'>
        {state.toDoList.map(post => (
          <div key={post.id} className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              defaultChecked={post.taskStatus ? 'checked' : ''}
              value=''
              id='flexCheckDefault'
              onClick={() => chekingTask(post.id)}
            />
            <label
              className={`form-check-label ${post.taskStatus ? 'checked' : ''}`}
              htmlFor='flexCheckDefault'>
              {post.task}
            </label>
            <button
              type='button'
              // onClick={() => editingTask(post.id)}
              className='btn btn-outline-primary editBtn'>
              <i class='fa-solid fa-pen'></i>
            </button>
            <button
              type='button'
              onClick={() => deletingTask(post.id)}
              className='btn btn-outline-primary deleteBtn'>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoList;
