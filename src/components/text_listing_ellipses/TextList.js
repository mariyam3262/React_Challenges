import React, { useState } from 'react'
import Text from './Text';

function TextList() {

    const text = ["Hello !!, How are you..."]
    const [textList, setTextList] = useState([...text]);
    const [value, setValue] = useState('')
  return (
    <div className='input-container'>
      <form onSubmit={e => {e.preventDefault(); setTextList([...textList, value]);setValue('')}}>
        <input type="text" 
                placeholder='Enter your text'
                value={value} onChange = {(e) => setValue(e.target.value)} />
      </form>
      {
        textList.map(text => <Text text ={text} textList={textList}/>)
      }
    </div>
  )
}

export default TextList
