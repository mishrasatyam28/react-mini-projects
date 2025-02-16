import React from 'react'

function CheckoutStepper({stepConfig=[]}) {
  return (
      <div className='stepper'>
          {
              stepConfig.map((step,index) => {
                  return (
                      <div key={step.name}>
                          <div className="">{index+1}</div>
                          <div className="step-name">{step.name}</div>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default CheckoutStepper