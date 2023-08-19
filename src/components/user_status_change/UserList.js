import React, { useContext, useEffect } from 'react'
import UserStatus from './UserStatus'
import {UserContext} from './UserStatus'

function UserList() {

    const {userState, setUserState} = useContext(UserContext);
    
    const randomUser = () => {

        const keyArray = Object.keys(userState);
        const randomNum = Math.floor(Math.random() * keyArray.length)
        const newUser = {...userState}
        newUser[keyArray[randomNum]] = !userState[keyArray[randomNum]]
        setUserState(newUser)
    }

    useEffect(()=> {
        const intervalID = setInterval(randomUser,2000)
        return () => clearInterval(intervalID) 
    }, [userState])

    // console.log(userState)

  return (
    <div>
      {
        
        Object.keys(userState).map(key => <li> {key} : {userState[key] ? "🟢" : "🔴"}  </li>)
      }
    </div>
  )
}

export default UserList
