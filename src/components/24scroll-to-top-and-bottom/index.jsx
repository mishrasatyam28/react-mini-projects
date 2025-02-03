

import React from 'react'
import useFetch from '../21useFetch-hook'
import { useRef } from 'react'

export default function ScrollToTopAndBottom() {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products?limit=100",{}
    )

    const bottomRef = useRef(null);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior:'smooth'
        })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({
            behavior:'smooth'
        })
    }

    if (pending) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error...{error}</h1>
    }
  return (
    <div className=''>
          <h1>Scroll To Top and Bottom Feature</h1> 
          <h3>This is the top section </h3>
          <button onClick={handleScrollToBottom}>Scroll To Bottom</button>  
          <ul style={{listStyle:'none'}}>
              {
                  data && data.products && data.products.length ? data.products.map(item =>
                      <li>{item.title}</li>
                  ) : null
              }
          </ul>
          <button onClick={handleScrollToTop}>Scroll To Top</button>
          <div ref={bottomRef} className=""></div>
          <h3>This is the bottom of the page</h3>
    </div>
  )
}
