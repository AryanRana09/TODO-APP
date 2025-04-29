import React, { useEffect, useRef, useState } from 'react'
import todo_logo from "../assets/todo_logo.png";
import TODO_item from './TODO_item';



  
function ToDo() {


const [todolist, settodolist] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);


const inputref = useRef();



const add = () =>{

  const inputtext= inputref.current.value.trim();
  // console.log(inputref);
  
  if (inputtext === "") {
    return null;

    
  }


  const newtodo = {
    id: Date.now(),
    text: inputtext,
    IsComplete: false

  }
  settodolist((prev)=>[...prev, newtodo ])
  inputref.current.value = "";

}

const deltodo = (id)=>{
  settodolist((prvtodo)=>{
    return prvtodo.filter((todo)=> todo.id !== id)
  })
}


const toggle = (id)=>{
  settodolist((prevtodos)=>{
    return prevtodos.map((todo)=>{
      if(todo.id === id){
        return {...todo, IsComplete: !todo.IsComplete}
      }
      return todo;

    })

  })
}

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todolist));
  
},[todolist])

  return (
    <div className='bg-purple-200 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[650px] rounded-xl'>


    {/* title */}
    <div className='flex items-center mt-7 gap-2'>
        <img className='w-11' src={todo_logo} alt="" />
        <h1 className='text-3xl font-semibold text-purple-900'>
            TO-DO List
        </h1>
    </div>


    {/* input-box */}
    <div className='flex items-center my-7 bg-purple-100 rounded-full'>
        <input ref={inputref} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-purple-650' type="text" placeholder='Add your task' />
        <button onClick={add} className='border-none rounded-full bg-purple-600 w-32 h-14 text-purple-200 text-lg font-medium cursor-pointer '>ADD +</button>
    </div>


    {/* to-do list */}
    <div>
      {todolist.map((items, index)=>{
        return <TODO_item key={index} Text={items.text} id={items.id} IsComplete={items.IsComplete} deltodo={deltodo} toggle={toggle} />


      })} 
    </div>




    </div>
  )
}

export default ToDo