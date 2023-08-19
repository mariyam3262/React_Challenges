import React, { useEffect, useState } from 'react'

function Follower() {
    const USERS = [
        {name:'josef', followers: 0, followings:0},
        {name:'mary', followers: 0, followings:0},
        {name:'michael', followers: 0, followings:0},
        {name:'siri', followers: 0, followings:0},
        {name:'daud', followers: 0, followings:0},
        {name:'joe', followers: 0, followings:0}
    ]

    const [users, setUsers] = useState([...USERS]);
    const[user, setUSer] = useState('');
    const [user1, setUser1] = useState({name : '', followers : 0, followings : 0 });
    const [user2, setUser2] = useState({name : '', followers : 0, followings : 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user1.name != user2.name){

            const newUser1 = users.find(user => user.name == user1.name);
            const newUser2 = users.find(user => user.name == user2.name);
            
            newUser1.followings = newUser1.followings + 1
            newUser2.followers = newUser2.followers + 1;
            const shellowList = users.filter(user => user.name != user1.name && user.name != user2.name);
            
            setUsers([...shellowList, newUser1, newUser2]);
            alert(`${newUser1.name} have ${newUser1.followers} followers and is following ${newUser1.followings} people`)
            
            // console.log(user1, user2);
            console.log(newUser1, newUser2,  [...shellowList, newUser1, newUser2] )
        }else{
            alert('user can not follow to  himself/herself')
        }
        
    }

  return (
    <div>

        <form onSubmit={(e) => {e.preventDefault(); 
                  users.find(u => u.name == user) ? alert('already exist'):
                                setUsers([{name : user , followers : 0, followings : 0 },
                                                    ...users])}}>
            <input type="text" placeholder='Enter user name' 
                    onChange={(e) => setUSer(e.target.value.trim())} value={user} required/></form>
      {
        users.map(user => (<li onClick={() => setUser1({...user})}> {user.name} </li>))
      }

      <form onSubmit={handleSubmit}> 

        <input type="text" onChange={(e) => setUser1({...user1,name : e.target.value.trim()}) } value={user1.name} />
                {'  '} will follow to    {'  '}
        <input type="text" onChange={(e) => setUser2({...user2,name : e.target.value.trim()}) } value={user2.name} />
        
        {' '}<button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default Follower
