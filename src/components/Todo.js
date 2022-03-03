import React from 'react'

const Todo = ({item,deleteTodo}) => {
  return (
    <li style={{listStyle :'none'}}>{item.todo}<button  onClick={()=>deleteTodo(item.id)} style={{marginLeft :"20px"}}>delete</button></li>
  )
}

export default Todo