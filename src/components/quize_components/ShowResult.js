import React,{useRef} from 'react'
import AnswerList from './AnswerList';


function ShowResult({questions, index, setAnswer, setIndex, handleClick,answer}) {

    const result  = useRef(null)
    
    result.current = questions.filter((quiz, index) => quiz.rightAnswer === answer[index]);
    // console.log(result.current.length)
    
    const score = (result.current.length / questions.length) * 100;
    return (
            <>
                <div style={{
                    border:'1px solid red',
                    borderRadius:'5px',
                    fontSize: '20px',
                    boxSizing:'border-box',
                    minWidth:'800px',
                    width:'auto',
                    padding:'10px',
                    margin: '5px',
                    textAlign: 'center',
                    backgroundColor: 'rgb(227 118 33 / 57%)',
                    fontWeight:'bolder'
                }}> 
                
                    Your score is {score} %.
                    
                </div>
                <div style={{
                    fontSize:'small',
                    fontWeight: 'bolder',
                    padding:'5px',
                    boxSizing:'border-box',
                    margin: '10px'
                }}> 
                
                        Number of questions attemted right are {result.current.length} out
                            of {questions.length}
                </div>
                <AnswerList questions = {questions} 
                            setIndex={setIndex} 
                            index={index} 
                            setAnswer ={setAnswer}
                            handleClick={handleClick} 
                            answer={answer}/>
            </>)
}

export default ShowResult
