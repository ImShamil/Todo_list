import React, { useState } from 'react';
import './App.css';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';



function App() {
  const [toDoList,setToDoList]=useState([]);

  function addItem(item){
    setToDoList([...toDoList,item]);
  }

  console.log(toDoList);
  return (
    <div>
      <h1> Todo list</h1>
      <AddTodo addItem={addItem}/>
      <TodoList toDoList={toDoList}/>
    </div>  );
}

export default App;
