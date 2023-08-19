import React, { useState } from 'react'

function Meaning({definitions, partOfSpeech}) {
   
    const defs = definitions.slice(0,5);
    // console.log(defs);
    
  return (
    <div>
        <h2> {partOfSpeech} </h2>

        <h4>Definitions : </h4>
      {
        defs.map(def => <p> {def.definition} <br/> <em>{def.example} </em></p>)
      }
     
    </div>
  )
}

export default Meaning
