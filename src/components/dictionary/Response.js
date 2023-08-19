import React from 'react'
import Result from './Result';

function Response({response}) {

    const {word, meanings, phonetic} = response;
    console.log(meanings)

  return (
    <>
      <h1>{word}</h1>
      <h3>phonetic : {phonetic}</h3>

      <Result meanings = {meanings}/>
      {console.log(word)}
    </>
  )
}

export default Response
