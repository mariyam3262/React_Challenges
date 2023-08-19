import React, { useState } from 'react'
import SubTask from './SubTask';
import _ from 'lodash'

function MainTasks() {

    const INITIAL_LIST = {
        "Organize closet": [
          { "Donate old clothes and shoes": false },
          { "Buy new shelf": false },
          { "Put in shelf by color": false },
        ],
        "Finish homework": [
          { "Finish math homework": false },
          { "Finish science homework": false },
          { "Finish Reactjs homework": false },
        ],
        "Achieve nirvana": [
          { "Meditate a little": false },
          { "Gain some wisdom": false },
        ],
      };

      const [tasks, setTasks] = useState({...INITIAL_LIST});

      const handleTaskStatus = (maintask,tasktext, index) => {

        const newList = _.cloneDeep(tasks);
        newList[maintask][index][tasktext] = !newList[maintask][index][tasktext];
        setTasks(newList)

      }

  return (
    <>
      {
        Object.entries(tasks).map(([task, [...subtasks]]) => 
                    <div key ={task}> 
                      
                      <h2>{task}</h2>
                      <SubTask  handleTaskStatus = {handleTaskStatus}
                                maintask={task}
                                setTasks ={setTasks}
                                subTasks={[...subtasks]}/> </div>)
      }
    </>
  )
}

export default MainTasks
