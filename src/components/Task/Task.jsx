import React from 'react';
import {useState, useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

function Task() {
  const {dispatch} = useContext(globalContext);
  const [task, setTask] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      payload: {
        task,
        id: Date.now(),
        taskStatus: false,
      }
    })
    setTask('');
  }

  return (
    <form className='mb-5' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <h3 className='captionTask'>Добавьте новую задачу:</h3>
        <input
          className='form-control '
          id='InputTask'
          onChange={event => setTask(event.target.value)}
          value={task}
        />
      </div>
      <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
        <button type='submit' className='btn btn-primary me-md-2'>
          Добавить
        </button>
      </div>
    </form>
  );
}

export default Task;
