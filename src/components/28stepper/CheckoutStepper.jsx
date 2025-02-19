import React, { useEffect, useRef, useState } from 'react'
import './styles.css'

function CheckoutStepper({ stepConfig = [] }) {
    const [currentStep, setCurrentStep] = useState(2);
    const [isCompleted, setIsCompleted] = useState(false);
    const stepRef = useRef([]);
    const [margin, setMargin] = useState({
        marginLeft: 0, MarginRight:0
    })
    
    if (!stepConfig.length) {
        return <></>;
    }


    function handleNext() {
        setCurrentStep(prevStep => {
            if (prevStep === stepConfig.length) {
                setIsCompleted(true);
                return prevStep;
            } else {
                return prevStep + 1;
            }
        })
    }

    function calculateProgressBarWidth() {
        return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
    }

    const ActiveComponent = stepConfig[currentStep - 1]?.Component;

    useEffect(() => {
        
    },[stepRef.current])


    return (
    <>
      <div className='stepper'>
          {
              stepConfig.map((step,index) => {
                  return (
                      <div key={step.name}
                          ref={el => (stepRef.current[index] = el)}
                          className={`step ${currentStep > index + 1 || isCompleted ? 'complete' : ''} ${currentStep === index + 1 ? 'active' : ''}`}>
                          <div className="step-number">{currentStep > index+1 || isCompleted ?(<span>&#10003;</span>):(index+1)}</div>
                          <div className="step-name">{step.name}</div>
                      </div>
                  )
              })
}
                
                  {/* progress bar */}

            <div className="progress-bar">
                <div className="progress" style={{width:`${calculateProgressBarWidth()}%`}}></div>
            </div>
            
            </div>

          
            <ActiveComponent/>
            
            {!isCompleted && (
                <button className='btn' onClick={handleNext}>{currentStep === stepConfig.length ? "Finish" : "Next"}</button>
            )
            }
    </>
  )
}

export default CheckoutStepper
