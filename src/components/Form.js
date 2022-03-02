import { useState } from "react"
import { v4 as uuid } from 'uuid';
export const Form = ({inputText ,setInput,addTodos}) => {
  
  const inputTextHandler =(e)=>{
      setInput(e.target.value)

  }
  const submitHandler =(e)=>{
    e.preventDefault()
    if(inputText==""){
        return 
    }
    const createTodo ={
        id :uuid(),
        todo:inputText
    }
    addTodos(createTodo)
    setInput("")
  }
    return (
    <form onSubmit={submitHandler}>
        <input type="text" onChange={inputTextHandler} value={inputText} /> 
    </form>
  )
}
