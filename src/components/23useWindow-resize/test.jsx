import React from 'react'
import useWindowResize from '.'

export default function UseWindowResizeTest() {
    const windowSize = useWindowResize()
    const { width, heigth } = windowSize;

  return (
      <div>
          <h1>Use Window Resize Hook</h1>
          <p>
              Width is {width}
          </p>
          <p>
              Height is {heigth}
          </p>
    </div>
  )
}
