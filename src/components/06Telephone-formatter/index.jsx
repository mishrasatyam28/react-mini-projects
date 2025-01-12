import React, { useState } from 'react'

const TelephoneFormatter = () => {
    const [phoneValue, setPhoneValue] = useState("")

    const getStringWithNumberOnly = (str) => {
        return [...str].filter((v) => Number.isInteger(+v) && v !== " ").join("")
    }

    function formatString(e) {
        const numStr = getStringWithNumberOnly(e.target.value)

        setPhoneValue(
            numStr.length > 3 ? " +(" + numStr.substring(0, 3) + ") - " + numStr.substring(3) : numStr
            
        )
    }

  return (
      <div className='container'>
          <h1 className="">06-TelePhone formatter</h1>
          <input
              type="tel"
              id="phone"
              placeholder='Mobile Number'
              maxLength={16}
              autoComplete='off'
              style={{fontSize:"1.5rem",marginBottom:"1rem"}}
              value={phoneValue}
              onChange={formatString}
          />   
          
          <div className="" style={{margin:"20px"}}>
          <label htmlFor="phone">+(123) - 4567890</label>
          </div>  
    </div>
  )
}

export default TelephoneFormatter