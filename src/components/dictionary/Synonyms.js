import React from 'react'

function Synonyms({synonyms}) {
  return (
    <>
        {synonyms.length > 0 && <h4>Synonyms: </h4>}
        {synonyms.map(name => <li> {name} </li>)}
    </>
  )
}

export default Synonyms
