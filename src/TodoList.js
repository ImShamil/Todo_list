function TodoList({toDoList, setToDoList}){

  function ClickOnChange(itemIndex ){
    let newToDolist=toDoList.filter((_,index)=>index!==itemIndex);
    setToDoList(newToDolist);
  }
  

   return(
    <ul>
      {toDoList.map((item,index)=>
      
      <li key={index}>
        <input type="checkbox"></input>
        {item}
        <button type="button" onClick={()=>{ClickOnChange(index)}}> delete</button>
      </li>)}
    </ul>
   )
}


export default TodoList;