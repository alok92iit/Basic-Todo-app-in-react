import React from 'react'
import Todo from './Todo'

    

const TodoList = ({todos ,deleteTodo}) => {
    const alltodos =todos.map((items)=>{
        return <Todo key={items.id} todoItem={items} deleteTodo={deleteTodo} />
    })
  return (
  <div>
   <ul>
       {alltodos}
   </ul> 
   </div>  
  )
}

export default TodoList