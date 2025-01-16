import React, { useEffect, useState } from 'react'
import './styles.css'
const RandomColorGenrator = () => {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState("#000000")

  function randomColorUtility(length) {
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor() {
    //#654321

    const hex = [1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if (typeOfColor === 'rgb')
      handleCreateRandomRgbColor();
    else
      handleCreateRandomHexColor();
  },[typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "grid",
        justifyItems: "center",
      }}
    >
      <h1>09-Color-generator</h1>
      <div className="container">
      <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div className="container" style={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '30px',
          marginTop:'50px'
        }}>
          <h3>{typeOfColor === 'rgb' ? 'RGB Color' :'HEX Color'}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  )
}

export default RandomColorGenrator