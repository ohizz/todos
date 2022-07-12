import React from 'react';
const ClearAll = ({displayList, setDisplayList}) => {
 const clearHandler = () => {
  setDisplayList([]);
  localStorage.removeItem('items');
}

 return(
  <>
  {displayList.length >= 1 && <div className='clearAll'>
  <button className='clear' onClick={clearHandler}>clear all
</button>
  </div>}
  </>
 )
}

export default ClearAll;