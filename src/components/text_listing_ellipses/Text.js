import React from 'react'
import Popup from 'reactjs-popup'

function Text({text, textList}) {
  return (
    <div>
      {
       text.length > 5 ? <>
            <span className='text'>{text.slice(0, 6)}</span>
            <Popup trigger=
                {<span>...</span>}
                position="center">
                <div className='popup-container popup-text'>{text}</div>
            </Popup>
       </> : text
      }
      
    </div>
    
  )
}

export default Text
