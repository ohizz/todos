import React,{useState, useEffect, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';

const Todo = ({done, setStatus,status, displayList, setDisplayList,text, list, inputValue, setInputValue}) => {
 const ref = useRef(null)
 let labelId = uuidv4(); 
 const [active, setActive] = useState(false);

 const deleteHandler = () => {
 setActive(true);
 setDisplayList(displayList.filter((x) => x.id !== list.id))
 localStorage.removeItem('items');
 }


 const editHandler = () => {
  const editingRow = displayList.find((x) => x.id === list.id)
  setDisplayList(displayList.filter((x) => x.id !== list.id));
  setInputValue(editingRow.text);
   setStatus(editingRow.done);
  localStorage.removeItem('items');
 }

 const doneHandler = () => {
   setDisplayList(displayList.map((i) => {
    if(i.id === list.id){
     return{
      ...i, 
      done: !i.done,
     }
    }
    return i;
  })
  )
  localStorage.setItem('items', JSON.stringify(displayList))
 }
 return(
  <div className='list'>
   <div>
   <input id={labelId} className='checky' type='checkbox' defaultChecked={done} ref={ref}/>
   <label htmlFor={labelId} key={list.id} onClick={doneHandler}><span>{text}</span></label>
   {/* <small>{`complete: ${done}`}</small> */}
   </div>
   <button onClick={editHandler}>
   <i className="fa fa-pencil-square-o"></i>
   </button>
   <button className='lastBtn' onClick={deleteHandler}>
    <i className="fa fa-trash-o"></i>
   </button>
  </div>
  )
}

export default Todo;