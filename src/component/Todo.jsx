import React, { useState } from 'react'



const Todo = () => {

  const [inputTodo , setInputTodo] = useState('')
  const [todos , setTodos] = useState([])

const handleAdd = () => {

  if(inputTodo.trim() !== ''){

    setTodos([...todos , inputTodo])
    setInputTodo('')

  }

}



  return (
    <>
      <div className="baap relative">
        <div className='main flex flex-col items-center pt-5 gap-6 relative'>
          <div className="header bg-purple-700 w-96 text-center h-10 text-lg font-bold flex items-center justify-center">
            <div> Website Todo-List</div>
          </div>
          <div className="list bg-slate-100 w-96 h-[400px] ">

            <div className="todo">
              <div className="todoInput flex items-center justify-center pt-2">
                <input type="text "
                onChange={(e) => setInputTodo(e.target.value)}
                value={inputTodo}
                  className='bg-slate-300 h-10 w-80 text-black pl-2 border-black border-2 outline-none' />

              </div>
        {todos.map((todo , index) => (


  <div  className="todoPara text-black ">
  <ul key={index} className='pl-2 pt-4'>
   
   <li>{todo}</li>
  </ul>


</div>



        ))}
                


            </div>




            <div className='addSomethind  bg-purple-700 absolute bottom-[-15px] left-[43vw] h-12 w-28 text-center rounded-3xl flex items-center justify-center'>
              <button onClick={handleAdd}>Add</button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Todo
