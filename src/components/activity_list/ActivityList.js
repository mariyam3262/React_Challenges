import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Activity from './Activity'

function ActivityList() {

    const [activityList, setActivityList] = useState([]);
    const [generated , setGenerated] = useState(false);
    const [disable , setDisable] = useState(false)

    const generateActivity = () =>{
      setDisable(true)
        const getActivity =  () => {axios.get('https://www.boredapi.com/api/activity').then(res => setActivityList([...activityList, res.data]))
        .catch(err => console.log(err))
        setGenerated(true)
        setDisable(false)}

        getActivity()
    }

  return (
    <div>
      { <button className='btn-generate' disabled = {disable} onClick={() => generateActivity()}> Generate </button>}
      {

        generated &&  activityList.map(act => <> <Activity key={act.key} act={act}/> 
                         </>)
      }
    </div>
  )
}

export default ActivityList
