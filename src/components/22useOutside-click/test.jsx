import React, { useRef, useState } from 'react'
import useOutsideClick from '.';

const UseOnclickOutsideTest = () => {
    const ref = useRef();
    useOutsideClick(ref,()=>setShowContent(false))
    const [showContent, setShowContent] = useState(false)
    
  return (
    <div>
        {
              showContent ?
                <div ref={ref}>
                  <h1>Random Content</h1>
                  <p>Please click outside of this. It won't close if you click inside of this content.</p>
                </div> 
                  : <button
                      onClick={() => setShowContent(true)}>Show Content</button>      
        }
    </div>
  )
}

export default UseOnclickOutsideTest