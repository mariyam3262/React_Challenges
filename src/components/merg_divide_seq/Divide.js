import React, { useState } from 'react'


function Divide({list}) {
   
    const mid = Math.floor(list.length / 2);
    const slice = list.slice(0, mid);
    const slice2 = list.slice(mid)
    console.log(list)
    
  return (
    <div>
        <p className='item'> {'---'} {list} {'    '} </p>
        {list.length != 1 && <div className='main-contaniner'>
            <Divide list={slice}/>
            <Divide list={slice2}/></div>}
      
    </div>
   
  )
}

export default Divide
