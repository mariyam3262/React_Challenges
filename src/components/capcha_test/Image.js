import React from 'react'

function Image({answer, setOpen}) {
    const ONE =
    "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const TWO =
    "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const THREE =
    "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const FOUR =
    "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const FIVE =
    "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const SIX =
    "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const isAnswer = (id) =>{ id == answer ? setOpen(false) : alert('intruder !!')}
  
    const boxStyle = { width: 200, height: 200 }

    return (
    <div style={{ display: "flex", justifyContent: "center", flex: "row" }}>
        <p style={{ alignSelf: "center", fontSize: 20 }}> Select {answer}</p>

      <img src = {ONE} style={boxStyle} onClick = {() => isAnswer(1)}/>
      <img src = {TWO} style={boxStyle} onClick = {() => isAnswer(2)}/>
      <img src = {THREE} style={boxStyle} onClick = {() => isAnswer(3)}/>
      <img src = {FOUR} style={boxStyle} onClick = {() => isAnswer(4)}/>
      <img src = {FIVE} style={boxStyle} onClick = {() => isAnswer(5)}/>
      <img src = {SIX} style={boxStyle} onClick = {() => isAnswer(6)}/>
    </div>
  )
}

export default Image
