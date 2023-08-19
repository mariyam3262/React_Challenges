import React, {useState} from 'react'

function Activity({act}) {
  const {activity, 
        accessibility, 
        link, 
        participant, 
        price, 
        type,
        key} = act;
    
  const [expand, setExpand] = useState(false)
  console.log(act)
  return (
    <div className='activity'>
        <h3>{activity}</h3> 
        <button onClick={() => setExpand(!expand)}>{expand ? 'collaps' : 'expand'}</button>
        {expand && 
            Object.keys(act).filter(key => key !== 'activity')
              .map(key => <li> {key} : {act[key]} </li>)}
    </div>
  )
}

export default Activity
