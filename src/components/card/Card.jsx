import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import './Card.css';
const Card = ({item, actionEdit,actionDelete,completeItem}) => {

  return (
    <div className={item.isCompleted ? 'card-design completed' : 'card-design'}>
      <div className='text-ellipse' >{item.name}</div>
      <div className='action-icons'>
            <EditIcon onClick={()=> actionEdit(item)}></EditIcon>
            <DeleteForeverRoundedIcon onClick={()=> actionDelete(item.id)}></DeleteForeverRoundedIcon>
            {item.isCompleted ?
            <CheckBoxIcon onClick={()=> completeItem(item)}></CheckBoxIcon>:
            <CheckBoxOutlineBlankIcon onClick={()=> completeItem(item)}></CheckBoxOutlineBlankIcon>
            }
            
      </div>
    </div>
  )
}

export default Card
