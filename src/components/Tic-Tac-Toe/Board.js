import React from 'react'
import Square from './Square'

function Board({value, handleValue}) {
  return (
    <>
        <div>
            <Square value = {value[0]} handleValue = {() => handleValue(0)}/>
            <Square value = {value[1]} handleValue = {() => handleValue(1)}/>
            <Square value = {value[2]} handleValue = {() => handleValue(2)}/>
        </div> 
        <div>
            <Square value = {value[3]} handleValue = {() => handleValue(3)}/>
            <Square value = {value[4]} handleValue = {() => handleValue(4)}/>
            <Square value = {value[5]} handleValue = {() => handleValue(5)}/>
        </div> 
        <div>
            <Square value = {value[6]} handleValue = {() => handleValue(6)}/>
            <Square value = {value[7]} handleValue = {() => handleValue(7)}/>
            <Square value = {value[8]} handleValue = {() => handleValue(8)}/>
        </div> 
    </>
  )
}

export default Board
