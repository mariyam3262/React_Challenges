import React from 'react'

function TableItem({user}) {   
    const {name, email, gender, dob, picture} = user;

    

      console.log(name, email, gender, dob)
  return (
    <>
      <td>
        <div>
          <img
              src={picture}
              alt={name}
              style={{
                height: '28px',
                width:' 32px',
                borderRadius: '50%'
              }}
            />{"   "}
            
            {name} 
            
        </div>
      </td>
      <td>{gender}</td>
      <td>{dob}</td>
      <td>{email}</td>
    </>
  )
}

export default TableItem
