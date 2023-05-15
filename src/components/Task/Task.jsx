import React from 'react';

function Task({task, setTask, handleSubmit}) {
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
