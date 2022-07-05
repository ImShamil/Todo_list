import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';


function App() {
  const [toDoList,setToDoList]=useState(['']);
  console.log(toDoList);
  return (
    <div>
      <h1> Todo list</h1>
      <AddTodo setToDoList={setToDoList}/>
      <TodoList/>
    </div>  );
}

export default App;
