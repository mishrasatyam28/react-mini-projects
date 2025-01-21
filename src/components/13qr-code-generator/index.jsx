import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export const QrCodeGenerator = () => {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')
   

    function handleGenerateQrCode() {
        setQrCode(input)
        setInput('')
    }

  return (
      <div className='container'>
          <h1>13 - QR Code Generator</h1>
          <div>
              <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' name='qr-code' placeholder='Enter your value here'/>
              <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
              <div>
                  <QRCode
                      id='gr-code-value'
                      value={qrCode}
                      size={400}
                      bgColor='#fff'
                  />
              </div>
          </div>
    </div>
  )
}
