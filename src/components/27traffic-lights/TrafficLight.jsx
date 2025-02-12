import React from 'react'

function TrafficLightComp({isActive, bgColor}) {
  return (
      <div className={`trafficLight ${isActive ? bgColor : 'background-grey' }`}>
          
    </div>
  )
}

export default TrafficLightComp