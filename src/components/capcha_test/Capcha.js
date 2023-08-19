import React, { useState } from 'react'
import Image from './Image';

function Capcha() {
    
    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState(1);

    const handleClick = () => {setOpen(true);setAnswer(Math.floor(Math.random() * 5 + 1))}
  return (

    <div>
      <button onClick={handleClick}>
        I'm not robot
      </button>
      {
        open && <Image answer = {answer} setOpen = {setOpen}/>
      }
    </div>
  )
}

export default Capcha
