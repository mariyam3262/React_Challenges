import React from 'react'
import ShowResult from './ShowResult'
import Button from './Button'

function Question({questions, index, setAnswer,  setIndex, handleClick, answer}) {
  return (
    <div style={{ border : '1px solid gray',
                  borderRadius : '15px', 
                  display: 'flex', 
                  // justifyContent : 'center',
                  alignItems: 'center',
                  flexDirection:'column',
                  width: 'auto',
                  height: 'auto',
                  backgroundColor:'#8ec77b80',
                  
                 }}>


       {
            index < questions.length  ? 
                <> 
                  <div style={{border: '1px solid green',
                              boxSizing:'border-box',
                              padding: '3px',
                              margin : '10px',
                              borderRadius: '5px',
                              width: 'auto',
                              minWidth: '500px',
                              fontSize: 'large',
                              textAlign: 'center',
                              backgroundColor: '#309f4a40'
                              }}>
                                
                      Question {index + 1} / {questions.length}
                                
                  </div>
                  <div style={{border: '1px solid red',
                              padding: '20px',
                              boxSizing: 'border-box',
                              textAlign: 'center',
                              marginBottom : '40px',
                              borderRadius: '5px',
                              width: 'auto',
                              backgroundColor:'#ff9e9e',
                              minWidth: '500px',
                              fontWeight: 'bolder',
                              fontSize: 'larger'}}>
                    
                      {questions[index].que} </div>

                    <div style={{display: 'flex', 
                                flexDirection: 'column', 
                                }} >


                      {questions[index].ans.map((answer, inx) => 
                                          <Button  key={inx}
                                                   onClick={handleClick} 
                                                   answer={answer}
                                                   questions={questions}
                                                   index={index}/>
                                                               )}  

                    </div>
                   
                </> :
             <ShowResult questions ={questions} 
                          index={index} 
                          setIndex ={setIndex} 
                          setAnswer= {setAnswer}
                          handleClick={handleClick} 
                          answer={answer}/>
       }     
              
    </div>
  )
}

export default Question
