import React, { useState } from 'react'
import TodoItem from './TodoItem';


function AddTodo() {

    const [todos,setTodos] = useState([]) 
    const [todo, setTodo] = useState({ id: '',
                                       title:'',discreption:'', completed: false});

    const handleSubmit = (e) => {
                            e.preventDefault();                            
                            setTodos([{...todo, id: `todo__${Math.random().toString().substring(2)}`},
                            ...todos]);
                           setTodo({...todo, title : '', discreption:''})
                            }
    console.log(todos)
    const removeTodo = (id) => setTodos(todos.filter(item => item.id !== id));

    const iscompleted = (id) => setTodos(todos.map(todo => todo.id === id ?
                                                           {...todo, completed : !todo.completed}: todo))
                            
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value = {todo.title} 
                    onChange={(e) => setTodo({...todo,title:e.target.value})} 
                    placeholder='Enter title' required/>

            <input type='text' value={todo.discreption}
                    onChange={(e)=> setTodo({...todo,discreption:e.target.value})}
                    placeholder='Enter discreption' required/>
            <button type='submit'>Add</button>
        </form>
        {
          todos.map((todo,index) => {
            return <TodoItem key= {index} todo = {todo} 
                      removeTodo = {(id) => removeTodo(id)}
                      iscompleted = {(id) => iscompleted(id)}/>
          })
        }
     
    </div>
  )
}

export default AddTodo
