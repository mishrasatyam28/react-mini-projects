import React, { useEffect, useState } from 'react'
import './styles.css'
import TrafficLightComp from './TrafficLight'

const trafficLightdata = [
    {
        color: 'red',
        bgColorClass: 'background-red',
        wait:1200,
    },
    {
        color: 'yellow',
        bgColorClass: 'background-yellow',
        wait:500,
    },
    {
        color: 'green',
        bgColorClass: 'background-green',
        wait:1000,
    }
]

function TrafficLight() {
    const [activeLight, setActiveLight] = useState('red')
    const light = trafficLightdata.find((light)=>light.color === activeLight)
    const currentIndex = trafficLightdata.findIndex((light)=>light.color === activeLight)

    useEffect(() => {
        const timer = setTimeout(() => {
            const idx = [currentIndex + 1] % trafficLightdata.length;
            setActiveLight(trafficLightdata[idx].color)
        }, light.wait)
        
        return () => clearTimeout(timer)
    },[activeLight])

  return (
      <div className='container'>
          <h1>Traffic Light</h1>
          <div className="trafficLigthContainer">
              {
                  trafficLightdata.map((light, index) => (
                    //   <div key={index} className={`trafficLight ${activeLight === light.color ? light.bgColorClass : 'background-grey' }`}>
                          
                      //   </div>
                      <TrafficLightComp key={index} isActive={activeLight===light.color} bgColor={light.bgColorClass}/>
                  ))
              }
          </div>
    </div>
  )
}

export default TrafficLight