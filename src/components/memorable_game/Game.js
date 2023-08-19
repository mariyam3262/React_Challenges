import React, { useEffect, useState } from 'react'
import Card from './Card';



const cards = [
  {
    id:1,
    name:'Apple'
  },
  {
    id:2,
    name:'Apple'},

  {
    id:3,
    name:'Mango'},

  {
    id:10,
    name:'Lilly'},
  {
    id:7,
    name:'Rose'},

  {
    id:5,
    name:'Melon'},
  {
    id:6,
    name:'Melon'},
  
  {
    id:8,
    name:'Rose'},
  {
    id:9,
    name:'Lilly'},
  {
    id:4,
    name:'Mango'},
  
]

function Game() {
    

    const [activeCards, setActiveCards] = useState([]);
    const [cardList, setCardList] = useState([...cards]);
    const [unflippedCards, setUnflippedCards] = useState([])   

    const handleClick = (card) => {
           openCards(card);
                
    };

    const openCards = (card) => activeCards.length < 2 ?
        setActiveCards([...activeCards, card]) :
        setActiveCards([card])

    useEffect(() => {
        if (activeCards.length === 2) {
          setTimeout(matchCards, 1000);
        }
        return clearInterval(setTimeout(matchCards,  1000))
      }, [activeCards]);

    const matchCards = () => {
        const [first, second] = activeCards;
        if(first.name === second.name && first.id !== second.id) {
              setCardList([...cardList].filter(card => (card !== first && card !== second)));
             
        }else{
          setActiveCards([])
        }
        
        
    }

    console.log("active cards", activeCards);
    console.log("unflipped cards", unflippedCards)
  return (
    <div className='App-header'>
    { cardList.map( (card, index)=> <div key ={index}>
        
        <Card key={index} unflippedCards={unflippedCards} card = {card} index={index} handleClick={handleClick} activeCards={activeCards}/>
       
      </div>)
    }
    </div>
  )
}

export default Game
