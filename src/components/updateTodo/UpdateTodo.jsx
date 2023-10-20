import React, { useState } from 'react'
import './UpdateTodo.css'
const UpdateTodo = ({todo,onSubumit}) => {
    const [input, setInput] = useState(todo.name);
    const settingTodoData = (e) =>{
        setInput(e.target.value)
    }
    const setTodo = (e) =>{
        let data ={
            id:todo.id,
            name:input,
            isCompleted:todo.isCompleted
        }
        onSubumit(data);
    }
    // console.log(input);
    
    
    return (
        <>
        <div className='update-tem-form'>
            <input type='text' onChange={settingTodoData} value={input}/>
            <button onClick={setTodo}>Update</button>
        </div>
        </>

      )
}

export default UpdateTodo;

