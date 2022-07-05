import './TodoList.css';
import trashCanImg from '../img/trash_can.svg';

function TodoList({itemsList, setItemsList}){

  function ClickOnChange(itemIndex ){
    let newItemsList=itemsList.filter((item,index)=>index!==itemIndex);
    setItemsList(newItemsList);
  }
   return(
    <ul>
      {itemsList.map((item,index)=>
      <li key={index}>
        <div className="itemBox">
          <input className='btnChck' type="checkbox"></input>
          <span>{item}</span>
          <button 
          className="listBtn" type="button" 
          onClick={()=>{ClickOnChange(index)}}> 
          <img src={trashCanImg} alt="trash_can"/> 
          </button>
        </div>
      </li>)}
    </ul>
   )
}


export default TodoList;