import React, { useState } from 'react'

const Products = (props) => {
    let [title,setttle]=useState(props.title);
    function clickhandler(){
         setttle="sam";
        console.log("hit me");
    }
  return (
    <div>
      <h1>{setttle}</h1>
      <button onClick={clickhandler}>hit me</button>
    </div>
  )
}

export default Products
