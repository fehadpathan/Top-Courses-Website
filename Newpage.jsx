import React, { useState } from 'react'


const Newpage = () => {
   const[newtitle,settitle]=useState('');
   const[newdate,setdate]=useState('');
  function titlehandler(event){
    settitle(event.target.value);

  }
  function datehandler(event){
    setdate(event.target.value);
  }
  function submithandler(event){
    event.preventDefault();

    const productdata={
      title:newtitle,
      date :newdate
    };
    console.log(productdata);
    settitle('');
    setdate('');
  }

  return (
    <>
     <div>
      <form onSubmit={submithandler}>
        <input  type='text' value={newtitle} placeholder='enter the title' onChange={titlehandler}></input>
        <div>
          <input type="date" value={newdate} min="22/12/2002"  max="22/12/2003" onChange={datehandler}></input>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
     </div>
    
    </>     
  )
}

export default Newpage
