import React, { useState } from 'react'
import './styles.css'
const StringTransformers = () => {
  const [inputString, setInputString] = useState("hello world")
  const [transformedString, setTransformedString] = useState(inputString)

  function handleLowerCase() {
    setTransformedString(inputString.toLowerCase())
  }

  function handleUpperCase() {
    setTransformedString(inputString.toUpperCase())
  }
  
  function toCamelCase() {
    const words = inputString.split(' ');
    const camelCase = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join('')
    setTransformedString(camelCase)
  }

  function toPascalCase() {
    const words = inputString.split(' ')
    const pascal = words.map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('');
    setTransformedString(pascal)
  }

  function tosnakeCase() {
    const snakeCase = inputString.replace(/\s+/g, '_').toLowerCase();
    setTransformedString(snakeCase)
  }

  const toKebab = () => {
    const kebabCase = inputString.replace(/\s+/g, '-').toLowerCase();
    setTransformedString(kebabCase);
  }

  const trim = () => {
    setTransformedString(inputString.trim());
  }

  return (
    <div className='container'>
      <h1>07-String Formatter</h1>
      <textarea value={inputString} onChange={(e) => setInputString(e.target.value)} rows="6" cols="50" />
      <div className='btns'>
        <button onClick={handleLowerCase} className='button'>Lower Case</button>
        <button onClick={handleUpperCase} className='button'>Upper Case</button>
        <button onClick={toCamelCase} className='button'>Camel Case</button>
        <button onClick={toPascalCase} className='button'>Pascal Case</button>
        <button onClick={tosnakeCase} className='button'>Snake Case</button>
        <button onClick={toKebab} className='button'>Kebab Case</button>
        <button onClick={trim} className='button'>Trim</button>
      </div>
      <div className="">
      <strong>Transformed String:</strong>
      <p>{transformedString}</p>
      </div>
    </div>
  )
}

export default StringTransformers