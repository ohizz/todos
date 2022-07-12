import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({ inputValue, setInputValue, displayList, setDisplayList, status}) => {

 
 const handleSubmit = (e) => {
  e.preventDefault();
  if(inputValue === '' || inputValue === null) {
   return;
  }else {
  setDisplayList([
   ...displayList, {
    text: inputValue,
    done : status, 
    id:uuidv4(),
   }
  ]);
  setInputValue('');
 }
 }


 return(
  <form>
   <input className='inputForm' type='text' onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="enter your todo"/>
   <button onClick={handleSubmit}>
   <i className="fa fa-pencil-square-o"></i>
   </button>
  </form>
 )
}

export default Form;