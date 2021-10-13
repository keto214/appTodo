import React from 'react';
import './App.css';
import TodoList from './TodoList';
import {Router} from "react-router";
function App() {
  return (
    <div className='todo-app'>
      
      <TodoList />
      
    </div>
  );
}

export default App;