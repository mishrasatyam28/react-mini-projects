

import React, { useRef } from 'react'

function ScrollToSection() {

    const ref = useRef()
    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background:'grey'
            }
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background:'red'
            }
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background:'blue'
            }
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background:'red'
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'black',
                color:'white'
            }
        }
    ]

    function handleScrollToSection() {
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior:'smooth'
        })
    }

    return (
        <div className="">
            <h1>Scroll To Particular section</h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button>
            {
                data.map((item,index) =>
                    <div ref={index===3?ref:null} style={item.style}>
                        <h2 className=''>{item.label}</h2>
                    </div>
                )
            }
        </div>
      
  )
}

export default ScrollToSection