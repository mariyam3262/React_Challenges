import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';
import ExportDropdown from './ExportDropdown';
import TableItem from './TableItem';

function UserList() {

    
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [value, setValue] = useState('');
    const [selectedUsers , setSelectedUsers] = useState([])
    const [sortValue, setSortValue] = useState('name');
    const [filteredUsers, setFiltteredUsers] = useState([...users])
    const [direction, setDirection] = useState({
      name: 'UP',
      dob : 'UP',
      email: 'UP'
    })

    useEffect(()=> setFiltteredUsers([...users]), [users])

    const getFormattedDate = (date) => {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
    }

    const sortByName = () => {
      console.log("inside fn",direction.name)
     return  users.sort((user1, user2) => direction.name === 'DOWN' ? 
                                                    user1.name < user2.name ? 1 : -1 :
                                                    user1.name < user2.name ? -1 : 1)
    }

    const sortByDob = () => {
      console.log("inside fn", direction.dob)
      return users.sort((user1, user2)=> direction.dob === 'DOWN'?
                                                   new Date(user1.dob) <new Date(user2.dob) ?  1 : -1 :
                                                   new Date(user1.dob) <new Date(user2.dob) ? -1 : 1 )
    }

    const sortByEmail = () => {
      console.log("inside fn",direction.name)
     return  users.sort((user1, user2) => direction.email === 'DOWN' ? 
                                                    user1.email < user2.email ? 1 : -1 :
                                                    user1.email < user2.email ? -1 : 1)}
    console.log(users)
    useEffect(()=>{
        axios.get('https://randomuser.me/api?results=5')
        .then(res => {
           setUsers(res.data.results.map(user => {return {name : `${user.name.title} ${user.name.first} ${user.name.last}`,
                                                  gender : user.gender,
                                                  dob : getFormattedDate(new Date(user.dob.date)),
                                                  email: user.email,
                                                  picture : user.picture.thumbnail}}));
        })
        .catch(err => {
            setError(err)
        })
    },[])
  
    useEffect(()=>{

      let val = sortValue.toLocaleLowerCase().trim();

      switch (val) {

        case 'name':
          sortByName();
          break;

        case 'dob':
          sortByDob();
          break;

        case 'email':
          sortByEmail();
          break;
      }

    },[sortValue, direction]);

  return (
    <div>
      {
        <>
        
          <>
          <SearchBar value={value} 
                          users= {users} 
                          setUsers={setUsers} 
                          setValue={setValue}
                          setFiltteredUsers= {setFiltteredUsers}
                          /> 
          <ExportDropdown selectedUsers={selectedUsers} users ={users}/> 
          </>
        <table>
            <tbody>
                
                <tr>
                    <td onClick={e => {setSortValue(e.target.textContent);
                                      setDirection({...direction, name : direction.name === 'DOWN' ? 'UP' : 'DOWN' })}}>
                                           Name         </td>

                    <td onClick={e => setSortValue(e.target.textContent)}>   Gender       </td>

                    <td onClick={e => {setSortValue(e.target.textContent);
                                       setDirection({...direction, dob : direction.dob === 'DOWN' ? 'UP' : 'DOWN' })}}>  
                                             DOB          </td>
                                             
                    <td onClick={e => {setSortValue(e.target.textContent);
                                       setDirection({...direction, email : direction.email === 'DOWN' ? 'UP' : 'DOWN' })}}>   Email        </td>
                </tr>
                     {
                        filteredUsers.map(user => (<tr onDoubleClick={() => setSelectedUsers([...selectedUsers, user])}><TableItem user = {user}/></tr>))
                    }
           </tbody>
        </table>

        </>
      }
     
    </div>
  )
}

export default UserList
