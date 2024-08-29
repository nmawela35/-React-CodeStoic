import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const [addBy,setAddBy] = useState(1)

    function increment(){
        setAddBy(addBy+1)
    }

    function decrement(){
        setAddBy(addBy-1)
    }

    function increase(){
        setCount(count+addBy)
    }
    
    function decrease(){
        setCount(count-addBy)
    }




  return (
    <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <h3>{count}</h3>
        <br /><br />
        <button onClick={increment}>Increase By</button>
        <button onClick={decrement}>Decrease By</button>
        <h3>{addBy}</h3>
    </div>
  )
}

export default Counter