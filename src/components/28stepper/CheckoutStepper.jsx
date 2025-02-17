import React from 'react'

function CheckoutStepper({ stepConfig = [] }) {
    
    if (!stepConfig.length) {
        return <></>;
    }

  return (
      <div className='stepper'>
          {
              stepConfig.map((step,index) => {
                  return (
                      <div key={step.name}>
                          <div className="step-number">{index+1}</div>
                          <div className="step-name">{step.name}</div>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default CheckoutStepper