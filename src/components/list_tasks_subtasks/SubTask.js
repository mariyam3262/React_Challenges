import React, { useState } from 'react'

function SubTask({subTasks,maintask, handleTaskStatus}) {

    
  return (
    <div className='subtask-contaniner'>
        <div>
            <h3>InCompleted</h3>
            {
                // console.log(subTasks)
                subTasks.map((task, index) => {                    
                    const tasktext = Object.keys(task)[0];                    
                    return !task[tasktext] ? <li key = {index} onClick={() => handleTaskStatus( maintask,tasktext, index)}> {tasktext} </li> : null
                })
            }
        </div>
        <div>
            <h3>Completed</h3>
            {
                // console.log(subTasks)
                subTasks.map((task, index) => {
                    const tasktext = Object.keys(task)[0]
                    return task[tasktext] ? <li key = {index} onClick={() => handleTaskStatus( maintask,tasktext, index)}> {tasktext} </li> : null
                })
            }
        </div>
    </div>
  )
}

export default SubTask
