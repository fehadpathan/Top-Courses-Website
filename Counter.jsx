import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0);
    function decreasehandler(){
        setcount(count-1);

    }
    function increasehandler(){
        setcount(count+1);
    }
    function resethandler(){
        setcount(0);

    }
  return (
    <div>
        <div>
            <div>
                <button onClick={decreasehandler}>-</button>
            </div>
            <div>
                {count}
            </div>
            <div>
                <button onClick={increasehandler}> +</button>
            </div>
            <div>
                <button onClick={resethandler}>Reset</button>
            </div>
        </div>
      
    </div>
  )
}

export default Counter
