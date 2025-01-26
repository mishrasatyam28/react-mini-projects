import React, { useState } from 'react'
import { Modal } from './modal'

const ModalTest = () => {
  const [showModelPopup, setShowModelPopup] = useState(false)
  
  function handleToggleModalPopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false)
  }

  return (
    <div style={{margin:'auto auto', maxWidth:'fit-content'}}>
      <button onClick={handleToggleModalPopup}>Open Model Popup</button>
      {
        showModelPopup && <Modal id={'custom-id'} onClose={onClose}
          body={<div>Customize body</div>}
          header={<div>Customize Header</div>}
        />
      }
           
    </div>
  )
}

export default ModalTest