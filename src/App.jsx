import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React from 'react';
import {globalContext as GlobalContext} from './contexts/globalContext';
// import { reducer } from './reducers/reducer';
// import { useReducer } from 'react';
import {useLocalStorage} from './hooks/useLS';
import './App.css';

function App() {
  const initialState = {
    toDoList: [],
  };

  const [state, dispatch] = useLocalStorage('toDoList', initialState);
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [toDoList, setToDoList] = useLocalStorage('toDoList', []);

  return (
    <>
      <GlobalContext.Provider
        value={{state, dispatch}}>
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
