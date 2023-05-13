import React from 'react'

function Task({task, setTask, handleSubmit}) {
  return (
    <form className='mb-3' onSubmit={handleSubmit}>
    <div className='mb-3'>
      <h5>Добавьте новую задачу:</h5>
      <input
        className='form-control '
        id='InputTask'
        onChange={event => setTask(event.target.value)}
        value={task}
      />
    </div>
    <button type='submit' className='btn btn-primary'>
      Добавить
    </button>
  </form>
  )
}

export default Task;