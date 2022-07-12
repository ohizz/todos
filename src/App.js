import React, { useEffect } from 'react';
import {useState} from 'react';
import "./App.css";
import ClearAll from './components/ClearAll';
import Footer from './components/footer';
import Form from './components/Form';
import TodoList from './components/TodoList';
const App = () => {
 const [inputValue, setInputValue] = useState('');
 const [displayList, setDisplayList] = useState([]);
 const [status, setStatus] = useState(false);

 useEffect(() => { 
  const data = JSON.parse(localStorage.getItem('items'));
  if(data){
    setDisplayList(data)
  }
 },[]);


 useEffect(() => {
   if(displayList.length)
  localStorage.setItem('items', JSON.stringify(displayList));
 },[displayList]);
 return(
   <>
    <div className='wrapper'>
       <h1>todolist</h1>
       <Form  inputValue={inputValue} setInputValue={setInputValue} displayList={displayList} setDisplayList={setDisplayList} status={status} setStatus={setStatus}/>
       <TodoList displayList={displayList} setDisplayList={setDisplayList} inputValue={inputValue} setInputValue={setInputValue} status={status} setStatus={setStatus} />
       <ClearAll displayList={displayList} setDisplayList={setDisplayList}/>
       <Footer/>
     </div>
   </>
 )
}

export default App;
