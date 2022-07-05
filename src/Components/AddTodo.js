import './AddTodo.css';
import React, { useState } from 'react';

function AddTodo({addItem}){
    const [value, setValue] = useState('');
    
    function hadleOnChange(e){
        setValue(e.target.value);
    }
    function handleOnSubmit(e){
      if(value!==''){
        addItem(value);
        setValue('');
      }
        e.preventDefault();
        
    }
    return(
      <form class ="todoForm"onSubmit={handleOnSubmit} >
        <div className='formContainer'>
          <input
            className="todo todoInp " 
            type="text" 
            placeholder="Какие планы?" 
            onChange={hadleOnChange} 
            value={value}/>
          <button className="todo todoBtn" type="submit">Добавить</button>
        </div>
      </form>
    )
}
export default AddTodo;