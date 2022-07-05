import React, { useState } from 'react';

function AddTodo({addItem}){
    const [value, setValue] = useState('');
    
    function hadleOnChange(e){
        setValue(e.target.value);
    }
    function handleOnSubmit(e){
        addItem(value);
        e.preventDefault();
        setValue('');
    }
    return(
        <form onSubmit={handleOnSubmit} >
        <input type="text" 
          placeholder="What will you do?" 
          onChange={hadleOnChange} 
          value={value}/>
        <button type="submit">Add</button>
      </form>
    )
}
export default AddTodo;