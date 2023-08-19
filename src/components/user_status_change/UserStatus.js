import React, { createContext, useState } from 'react'
import UserList from './UserList';

export const UserContext = createContext();

function UserStatus() {
    const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: true,
    Sam: true,
    Eric: true
});

  return (
    <div>
      
        <UserContext.Provider value = {{userState, setUserState}}>
            <UserList/>
        </UserContext.Provider>

    </div>
  )
}

export default UserStatus
