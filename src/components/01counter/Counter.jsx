import React, { useState } from 'react'
import './style.css'
const Counter = () => {
    const [count, setCount] = useState(0)
    const [incrementOrDecrement, setincrementOrDecrement] = useState(1);
 

    function handleDecrement() {
        setCount(count - Number(incrementOrDecrement))
    }

    function handleIncrement() {
        setCount(count + Number(incrementOrDecrement))
    }

    function reset()
    {
        setCount(0);
        setincrementOrDecrement(1)
    }
    
  return (
      <div className='container'>
          <div className="sequence">
              <p className='sr-number'>1</p>
          </div>
          <h1 className='title-counter'>01-Counter</h1>
          <p>{count}</p>
          <div className="flex-button">
              <button onClick={handleDecrement} className='button'>-</button>
              <button onClick={handleIncrement} className='button'>+</button>
          </div>
          <div className="flex-input">
              <p>Increment/Decrement by</p>
              <input type="text" name="" id="" value={incrementOrDecrement} onChange={(e)=>setincrementOrDecrement(e.target.value)} />
          </div>
          <div className="">
          <button onClick={reset} className='button'>Reset</button>
          </div>
    </div>
  )
}

export default Counter