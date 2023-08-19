import React, { useEffect, useState } from 'react'
import Board from './Board';

function Game() {
    const [isX, setIsX] = useState(true);
    const [array, setArray] = useState(Array(9).fill(null));
    const [winnerPlayer, setwinnerPlayer] = useState('');
    const [historyArray, setHistoryArray] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(null)

    // console.log(historyArray)

   function winner(array){ 
    
    const winnerValues = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i =0 ; i< winnerValues.length ; i++){        
        const [a, b, c] = winnerValues[i]       

        if(array[a] && array[a] === array[b] && array[a] === array[c]) {            
            return array[a]
        }
        
    }
    return null
    
}   
   useEffect(()=> {
    const win = winner(array);
    setwinnerPlayer(win);
   },[array])


    const handleClick = (ind) => {                                        
                                    const nextMove = [...array];
                                    if(nextMove[ind] || winnerPlayer                                                                                                          ) return;
                                    nextMove[ind] = isX ? 'X' : 'O';
                                    
                                   if(currentMove){
                                        setHistoryArray([...historyArray.slice(0,currentMove + 1), nextMove]);
                                        console.log(historyArray)
                                        setCurrentMove(prev => prev + 1)
                                    }else{
                                         setHistoryArray([...historyArray, nextMove]);
                                                        }
                                                        

                                    setArray(nextMove);
                                    setIsX(!isX);

                                    };

    
  return (
    <div>
        <div>
            {winnerPlayer ? <p>Winner : {winnerPlayer} </p> :
                            <p>Next Move : {isX ? 'X' : 'O' }</p>}

            <Board value = {array} handleValue = {handleClick}/>
        </div>
       
        <div>
            <p> Your moves</p>
            {
                historyArray.map( (arr, ind) => ind > 0 ?  <> 
                                                <button onClick={()=> {setArray(arr);  setCurrentMove(ind)} }> 
                                                        Goto move # {ind} </button>
                                                <br/> </> :
                                                <> 
                                                <button onClick={()=> {setArray([]); setHistoryArray([Array(9).fill(null)])} }> 
                                                        Initial move </button>
                                                <br/> </>
                                                )
            }
        </div>
    </div>
  )
}

export default Game
