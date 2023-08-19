import React, { useEffect, useState } from 'react'

function Button({onClick,answer, questions, index }) {

    const [isTrue, setIsTrue] = useState('default')

    const handleClick = (e) => {
        let ans = e.target.value;
        ans  == questions[index].rightAnswer ? setIsTrue('green'): setIsTrue('red');
        setTimeout(() => {onClick(ans);setIsTrue('default')}, 700); 
    }


  return (
    <>
      <button style={{
                        boxSizing: 'border-box',
                        padding: '15px',
                        width: 'auto',
                        minWidth: '500px',
                        margin: '5px',
                        fontSize: 'larger',
                        backgroundColor: isTrue == 'default' ? '#bf8b8b9c' : (isTrue == 'green' ? 
                                                                                'rgb(48 159 74 / 63%)' : 
                                                                                'rgb(235 83 83)'),
                        textTransform: 'capitalize'
                        }} 
                        
                        onClick={handleClick}
                        value={answer}>{answer}</button>
    </>
  )
}

export default Button
