import React from 'react'

function Square({value, handleValue}) {
  return (
    <>
        <button className='btn-game' onClick={handleValue}> {value}</button> 
    </>
  )
}

export default Square
