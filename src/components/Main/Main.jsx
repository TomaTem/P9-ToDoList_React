import {useState} from 'react';
import Task from '../Task/Task';
import ToDoList from '../ToDoList/ToDoList';
import React from 'react';
import {useLocalStorage} from '../../hooks/useLS';

export default function Main() {
  const [toDoList, setToDoList] = useLocalStorage('toDoList', []);
  const [task, setTask] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      task,
      id: Date.now(),
      taskStatus: false,
    };
    setToDoList(prev => [...prev, post]);
    setTask('');
  }

  return (
    <main className='container my-5 py-5 main'>
      <Task task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </main>
  );
}
