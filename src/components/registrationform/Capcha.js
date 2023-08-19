import React, { useState } from 'react'
import Image from './Image';

function Capcha({setIsHuman}) {
    console.log("inside capcha")
    const [answer, setAnswer] = useState(Math.floor(Math.random() * 5) + 1);
    const [open, setOpen] = useState(true);
    
  return (
    <div >
      {
        open && <Image answer = {answer} setOpen = {setOpen}  setIsHuman ={setIsHuman} />
      }
    </div>
  )
}

export default Capcha
