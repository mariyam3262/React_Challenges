import React, { useState } from 'react'

function TodoItem({todo, removeTodo, iscompleted}) {
  console.log("inside todo")
    console.log(todo);
    const completeStyle = todo.completed ? {textDecoration : 'line-through'} : {textDecoration : 'none'}
  return (
    <div key = {todo.id}>
      
            <input  style= {completeStyle} type="checkbox" name="done" 
                    checked={todo.completed} onChange={() => iscompleted(todo.id)} />
            <h3  style= {completeStyle}>{todo.title}</h3>
            <p  style= {completeStyle} >{todo.discreption}</p>
            <button onClick={()=> removeTodo(todo.id)}>Delete</button>
    </div>)
}

export default TodoItem
