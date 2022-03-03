import React ,{useEffect, useState} from 'react'
import { Form } from './Form'
import TodoList from './TodoList'

const TodoApp = () => {
    const  dummyTodo =JSON.parse(window.localStorage.getItem("todos") || "[]")    
    console.log(dummyTodo)
    const [todos ,setTodos] =useState(dummyTodo)
    const addTodos =(newtodo)=>{
        setTodos([...todos,newtodo])
    }
    const deleteTodo =(id)=>{
        setTodos((prevState)=>{
            return prevState.filter((todos)=>todos.id !=id)
        })
    }
  
    useEffect(()=>
    {
      window.localStorage.setItem("todos",JSON.stringify(todos))  
    },[todos])
    
    return (



    <div>
        <center><h1>todoApp</h1>
        <Form addTodos={addTodos}/>
        <TodoList  todos={todos} deleteTodo={deleteTodo}/>
        </center>
    </div>
  )
}

export default TodoApp