import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Response from './Response';

function Query() {

    const [query , setQuery] = useState('Hello');
    const [response, setResponse] = useState('');
    const [loaded, setLoad] = useState(false);

   const search = ()=> {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`)
        .then(res => {setResponse(res.data[0]);setLoad(true)}).catch(err => console.log(err))
   }

    const handleSubmit = (e) => {e.preventDefault();search()}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input autoFocus type="text" value ={query} onChange={(e) => setQuery(e.target.value)} />
        <br/><small><i> ** Hit Enter for response </i></small>
      </form>
      {loaded ? <Response response = {response}/>: <h4>Patient is key of success </h4>}
    </div>
  )
}

export default Query
