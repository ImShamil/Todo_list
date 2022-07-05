function TodoList({toDoList}){
    const listItems = toDoList.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}


export default TodoList;