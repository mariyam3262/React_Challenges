import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function QR_Code() {

    const [qr, setQr] = useState('')

  return (
    <div>
      <p style={{display : 'flex', justifyContent: 'center',flexDirection : 'column', alignItems: 'center' ,marginTop: '10px'}}>
        Enter your input :
        <div> <input type="text" value={qr} onChange={(e) => setQr(e.target.value)} /> </div>
        
        <QRCode
            id="myqr"
            value={qr}
            size={150}
            bgColor="#fff"
            
        />
        
      </p>
    </div>
  )
}

export default QR_Code
