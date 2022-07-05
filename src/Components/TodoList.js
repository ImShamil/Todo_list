function TodoList({itemsList, setItemsList}){

  function ClickOnChange(itemIndex ){
    let newItemsList=itemsList.filter((item,index)=>index!==itemIndex);
    setItemsList(newItemsList);
  }
   return(
    <ul>
      {itemsList.map((item,index)=>
      
      <li key={index}>
        <input type="checkbox"></input>
        {item}
        <button type="button" onClick={()=>{ClickOnChange(index)}}> delete</button>
      </li>)}
    </ul>
   )
}


export default TodoList;