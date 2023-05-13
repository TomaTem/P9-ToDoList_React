import {useState} from 'react';
import Header from './components/Header/Header';
import Task from './components/Task/Task';
import ToDoList from './components/ToDoList/ToDoList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
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
    <>
      <div>
        <Header />
        <main className='container my-5 py-5'>
          <Task task={task} setTask={setTask} handleSubmit={handleSubmit} />
          <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
