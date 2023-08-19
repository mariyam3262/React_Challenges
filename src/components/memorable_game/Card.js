import React, { useEffect } from 'react'
import { useState } from 'react'

function Card({ index, card, handleClick, activeCards, unflippedCards}) {

  const [isFlipped, setIsFlipped] = useState(false)
  const innerClick  = (card) => {
    setIsFlipped(true)
    handleClick(card)
  }
  
  useEffect(() => {
    isFlipped &&  setTimeout(()=> setIsFlipped(false), 1000);
    return clearInterval(setTimeout(()=> setIsFlipped(false), 1000))

  }, [isFlipped])

  return (
    <div className='card-container' key={index}>
        <div key={index} className='card'>
          <div onClick={()=> innerClick(card)}>
            {isFlipped ? card.name : "?"}
          </div>
        </div>
        

    </div>
  )
}

export default Card
