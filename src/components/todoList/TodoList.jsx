import React, {useEffect, useState}from 'react';
import Todo from '../todo/Todo'
import './TodoList.css';

import UpdateTodo from '../updateTodo/UpdateTodo';

import AddItem from '../addtodo/AddItem'
const TodoList = () => {
 const [todoList, setTodoList] = useState([]);
 const [addItemForm, toggleAddItemForm] = useState(false);
 const [updateTodo, setUpdateTodo] = useState('');

 useEffect(()=>{
   let todoStoredList = localStorage.getItem('todoList') ? localStorage.getItem('todoList') : null;
   let todoStoredListParseObj = JSON.parse(todoStoredList);
   if(!todoStoredListParseObj || !todoStoredListParseObj.length){
    return
  };

  setTodoList(todoStoredListParseObj)

 },[])

  const storeTodoList =(todoList)=>{
    const newTodos = todoList.sort((x, y) => Number(x.isCompleted) - Number(y.isCompleted));
    localStorage.setItem('todoList',JSON.stringify(newTodos))
    setTodoList(newTodos)
  }
  const addItem = (todo) => {
     if(!todo || !todo.name){
        return;     
    }
    const newTodos = [...todoList, todo];
    storeTodoList(newTodos);
  }
  const deleteItem = (id) => {
    const newTodoList = todoList.filter((item)=> item.id !=id)
    storeTodoList(newTodoList)
  }

  const deleteAll = () => {
    storeTodoList([])
  }

  const updateForm = (todo) => {
    setUpdateTodo(todo)
  }
  const updateTodoItem = (todo) => {
    todoList.map((item)=>{
         if(item.id == todo.id){
          item.name = todo.name;
         }
        
    })
    storeTodoList([...todoList]);
    setUpdateTodo('');
  }
  const showForm =()=>{
    toggleAddItemForm(!addItemForm)
  }

  const completeItem =(todo)=>{
   todoList.map((item)=>{
      if(item.id == todo.id){
        item.isCompleted = !item.isCompleted 
      }
   })
   
   storeTodoList([...todoList]);
   
  }
  return (
    <div className='todoList'>
      <h1>Todo App</h1>

     { !updateTodo && <AddItem addItem={addItem}/>}
      
      {updateTodo && 
        <UpdateTodo todo={updateTodo} onSubumit={updateTodoItem} />
      }
      
     <div className="todo-list">
     { todoList && todoList.length?  <h3>Todo list</h3> : ''}
     {
        todoList &&
        todoList.map((item, ind) => {
          
          return <Todo key={ind} ind={ind} item={item} deleteAction={deleteItem}completeItem={completeItem} editAction={updateForm} />
        })
      }
     </div>

    </div>
  )
}

export default TodoList
