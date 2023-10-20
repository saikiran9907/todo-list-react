import React from 'react'
import Card from'../card/Card'
const Todo = ({item, deleteAction,editAction, completeItem}) => {
  return (
    <div>
      <Card item={item}  actionDelete={deleteAction} actionEdit={editAction} completeItem={completeItem}/>
    </div>
  )
}

export default Todo
