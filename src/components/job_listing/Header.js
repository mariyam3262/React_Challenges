import React from 'react'



function Header({keywords, setKeywords}) {

    const handleDel = (val) => {
        
        setKeywords(keywords.filter(keyword => keyword !== val));
        console.log(keywords)
    } 

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'gray'}}>

      <h3>{keywords.map(val => <span> {val} <button onClick={()=> handleDel(val)}>del</button> </span>)}</h3>
      <button onClick={() => setKeywords([])}> clear</button>
    </div>
  )
}

export default Header
