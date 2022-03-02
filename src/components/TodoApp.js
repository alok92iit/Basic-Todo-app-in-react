import React ,{useState} from 'react'
import { Form } from './Form'
import TodoList from './TodoList'

const TodoApp = () => {
const [inputText ,setInput] =useState('')
    const [todos ,setTodos] =useState([])
    const addTodos =(newtodo)=>{
        setTodos([...todos,newtodo])
    }
    const deleteTodo =(id)=>{
        setTodos((prevState)=>{
            return prevState.filter((todos)=>todos.id !=id)
        })
    }
  return (



    <div>
        <center><h1>todoApp</h1>
        <Form setInput={setInput} inputText={inputText} addTodos={addTodos}/>
        <TodoList  todos={todos} deleteTodo={deleteTodo}/>
        </center>
    </div>
  )
}

export default TodoApp