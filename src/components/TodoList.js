import React from "react";
import Todo from './Todo';

const TodoList = ({displayList, setDisplayList,inputValue, setInputValue, setStatus, status}) => {
 return(
  <ul className="lists">
  {displayList.map((list) => (
   <Todo
   setStatus={setStatus}
   status={status}
    setInputValue={setInputValue}
    inputValue={inputValue}
    done={list.done}
    key={list.id}
    displayList={displayList}
    setDisplayList={setDisplayList}
    text={list.text}
    list={list}
    />
  ))}
  </ul>
 )
}

export default TodoList
