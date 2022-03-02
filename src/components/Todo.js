import React from 'react'

const Todo = ({key ,todoItem,deleteTodo}) => {
  return (
    <li style={{listStyle :'none'}} key={key}>{todoItem.todo}
    <button  onClick={()=>deleteTodo(todoItem.id)} style={{marginLeft :"20px"}}>delete</button></li>
  )
}

export default Todo