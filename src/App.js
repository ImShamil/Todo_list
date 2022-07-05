import './App.css';
import React, { useState } from 'react';
import AddTodo from './Components/AddTodo.js';
import TodoList from './Components/TodoList.js';


function App() {
  const [itemsList,setItemsList]=useState([]);

  function addItem(item){
    setItemsList([...itemsList,item]);
  }

  return (
    <div>
      <h1> Todo list</h1>
      <AddTodo addItem={addItem}/>
      <TodoList itemsList={itemsList} setItemsList={setItemsList}/>
    </div>  );
}

export default App;
