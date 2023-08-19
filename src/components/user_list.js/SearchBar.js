import React, { useEffect, useState } from 'react'

function SearchBar({value, setValue, users, setUsers,setFiltteredUsers}) {
     
  
   useEffect(()=> {
    console.log("value:",value,"----")
    let filteredUsers = value !== '' ? users.filter(user =>JSON.stringify( Object.values(user).map(val => val.toLowerCase()))
                                              .includes(value)) : users
    setFiltteredUsers(filteredUsers)
  }, [value]);



  return (
    <>
      <input type="text" placeholder= "search by name , gender or email"
             autoFocus
             value = {value}
             onChange={(e) => setValue(e.target.value)}  />
    </>
  )
}

export default SearchBar
