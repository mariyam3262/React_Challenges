import React from 'react'
import {useState} from 'react'
import Question from './Question';

function Quiz() {
    const questions = [
        {que:'color of sky',
         ans : ['green','blue','dark'],
         rightAnswer : "blue"},

         {que:'react is ______',
         ans : ['framework','technology','library'],
         rightAnswer : "library"},

         {que:'JavaScript is ____ scripting technology',
         ans : ['client side','server side','SQL'],
         rightAnswer : "client side"},

         {que:'Motive of life _____',
         ans : ['Earning','Growth','Happiness'],
         rightAnswer : "Happiness"}
    ] ;

    const [index, setIndex] = useState(0)
    const [answer, setAnswer] = useState([]);

    const handleClick = (value) => {setAnswer([...answer, value ]);
                                setIndex(prevInx => prevInx + 1);
                                console.log(answer)
                                }
    
  return (
    <div style={{display: 'flex', justifyContent: 'center' , alignItems:'center', textTransform: 'capitalize'}}>
      {
        questions.length > 0 && <Question questions = {questions} 
                                          index ={index} 
                                          setIndex ={setIndex}
                                          setAnswer = {setAnswer}
                                          handleClick = {handleClick}
                                          answer = {answer}/>
      }
    </div>
  )
}

export default Quiz
