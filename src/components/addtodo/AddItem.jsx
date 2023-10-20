import React, {useState} from 'react'
import './AddItem.css'


import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
const AddItem = ({addItem}) => {

    const [input, setInput] = useState('');
    const settingTodoData = (e)=>{
        setInput(e.target.value);
    }
    const setTodo =()=>{
        let data = {
            name:input,
            id:Math.floor(Math.random()*1000),
            isCompleted:false
        }
        addItem(data);
        setInput('');
    }
  return (
    <>
    <div className='add-tem-form'>
        <input type='text' onChange={settingTodoData} value={input}/>
        <button onClick={setTodo}>Add item</button>
    </div>
    </>
    
  )
}

export default AddItem
