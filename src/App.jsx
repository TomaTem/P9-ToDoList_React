import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React from 'react';
import {globalContext as GlobalContext} from './contexts/globalContext';
import {useState} from 'react';
import {useLocalStorage} from './hooks/useLS';
import './App.css';

function App() {
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
    <>
      <GlobalContext.Provider value={{toDoList, setToDoList, task, setTask, handleSubmit}}>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
