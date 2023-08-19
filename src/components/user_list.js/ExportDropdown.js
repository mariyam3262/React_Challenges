import React from 'react'
import {CSVLink} from 'react-csv'

function ExportDropdown({selectedUsers, users}) {

  

  const exportData = selectedUsers.map(user => {return {name : user.name,
                                                dob: user.dob, email: user.email, 
                                                gender : user.gender}})
  return (
    <> 
          Export as .csv {"   "}    
          {selectedUsers.length > 0 && 
          <button> <CSVLink data={exportData}>selected records  </CSVLink> </button>} 
          <button>
          <CSVLink data={users.map(user => {return {name : user.name,
                                                dob: user.dob, email: user.email, 
                                                gender : user.gender}})}>All records  </CSVLink> 
           
          </button>
               
    </>
  )
}

export default ExportDropdown
