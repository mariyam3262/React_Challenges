import React, { useState } from 'react'
import Capcha from './Capcha'
function RegistrationForm() {
    const [isHuman,setIsHuman] = useState(false);
    const [capcha, setCapcha] = useState(false);

  return (
    <div style={{ display: "flex",justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      
      <form >
        
        <label>First Name : <input type="text" /></label><br/>
        
        <label >Last Name : <input type="text" /></label><br/>
        
        <label >Email : <input type="email" /></label><br/>
        
        <label> Phone no. : <input type="number" /></label><br/>
        
        <button type="submit" disabled={isHuman ? false : true}>Submit</button>
      
      </form><br/>
      
      <label><input type="checkbox" onChange={() => setCapcha(true) } /> I'm Human</label>
      {capcha && <Capcha setIsHuman = {setIsHuman}/>}
    
    </div>
  )
}

export default RegistrationForm
