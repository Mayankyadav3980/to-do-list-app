import React from 'react'
import del from '../assets/icons8-delete-24.svg'

const TodoList = ({id, handleDelete, data}) => {
  return (
        <div className='list-item'>
            <li>{data}</li>
            <button onClick={() => handleDelete(id)}>
             <img src={del} 
              alt="delete"
              style={{}}
               />
             </button>
        </div> 
        
  )
}

export default TodoList

