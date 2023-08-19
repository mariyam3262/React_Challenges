import React, { useState } from 'react'
import Question from './Question'

function AnswerList({questions,index,setIndex, setAnswer, handleClick, answer}) {

  const [rerender, setRerender] = useState(false);

  
  return  (
    !rerender ? <div style={{
      // border:'1px solid pink',
      borderRadius:'3px',
      boxSizing: 'border-box',
      width:'780px',
      backgroundColor:'#ed98a742',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'

    }}>      
      {
        questions.map(quiz => {
            return(
                <div style={{
                  border: '1px solid green',
                  borderRadius:'5px',
                  display:'flex',
                  flexDirection: 'column',
                  justifyContent:'center',
                  alignItems:'center',
                  margin:'5px',
                  width:'620px',
                  backgroundColor:'rgb(9 255 0 / 10%)'
                 
                }}>
                  <div style={{
                              border: '1px solid blue',
                              padding: '20px',
                              boxSizing: 'border-box',
                              textAlign: 'center',
                              marginTop:'5px',
                              marginBottom : '20px',
                              borderRadius: '5px',
                              width: 'auto',
                              minWidth: '600px',
                              fontWeight: 'bolder',
                              fontSize: 'larger',
                              backgroundColor:'#3d3dd554'

                  }}> {quiz.que} </div>
                    <div style={{
                      display:'flex',
                      flexDirection: 'column',
                      justifyContent:'space-evenly',
                      boxSizing: 'border-box',
                      border:'1px solid gray',
                      borderRadius:'5px',
                      minWidth: '600px',
                      alignItems:'center',
                      marginBottom : '10px',
                      backgroundColor:'#ed98a742',
                      padding:'2px'
                    }}>
                    {
                        quiz.ans.map(answer => 
                            answer === quiz.rightAnswer ?
                            <div style={{
                              backgroundColor: '#00800091',
                              boxSizing: 'border-box',
                              padding: '5px',
                              width: 'auto',
                              borderRadius:'5px',
                              minWidth: '580px',
                              margin: '5px',
                              fontSize: 'larger',
                              fontWeight:'bold'
                            }}> {answer}  </div>:
                            <div style={{
                              backgroundColor: 'rgb(151 125 128 / 57%)',
                              boxSizing: 'border-box',
                              padding: '5px',
                              width: 'auto',
                              borderRadius:'5px',
                              minWidth: '580px',
                              margin: '5px',
                              fontSize: 'large'
                            }}> {answer} </div>
                        )
                    }
                    </div>
                </div>
            )
        })
      }

    <button style={{boxSizing: 'border-box',
                    borderRadius:'3px',
                    padding: '15px',
                    width: 'auto',
                    minWidth: '380px',
                    margin: '5px',
                    fontSize: 'larger',
                    backgroundColor:'#bf8b8b9c'

                  }}  onClick={() => {setIndex(0);setAnswer([]);setRerender(true)}}>Play again</button>
    </div>
    :
    <Question questions = {questions} 
              index ={index} 
              handleClick = {handleClick}
              answer = {answer}/>
  )
  
}

export default AnswerList
