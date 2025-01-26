import React from 'react'
import './modal.css'

export const Modal = ({id,header,body,footer,onClose}) => {
  return (
    <div id={id || 'Modal'} className='modal'>
      <div className="modal-content">
        <div className="header">
          <span className='close-modal-icon' onClick={onClose}>&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {
            body ? body : <div>
              <p>This is our Model Body</p>
            </div>
          }
        </div>
        <div className="footer">
          {
            footer ? footer : <h2>Footer</h2>
          }
        </div>
          </div>
    </div>
  )
}
