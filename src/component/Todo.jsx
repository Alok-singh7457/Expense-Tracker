import React, { useState } from 'react'


const Todo = () => {

  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {

    if (inputTodo.trim() !== '') {

      setTodos([...todos, inputTodo])
      setInputTodo('')

    }
  }

  return (
    <>
      <div className="baap relative">
        <div className='main flex flex-col items-center pt-5 gap-6 relative'>
          <div className="header  w-96 text-center h-10 text-lg font-bold flex items-center justify-center inset-0 -z-10  items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div> Website Todo-List</div>
          </div>
          <div className="list bg-slate-100 w-96 h-[400px] ">

            <div className="todo bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] h-[400PX] ">
              <div className="todoInput flex items-center justify-center pt-2">
                <input type="text "
                  onChange={(e) => setInputTodo(e.target.value)}
                  value={inputTodo}
                  className='bg-slate-300 h-10 w-80 text-black pl-2 border-black border-2 outline-none' />

              </div>
              {todos.map((todo, index) => (

                <div className="todoPara text-white ">
                  <ul key={index} className='pl-2 pt-4'>

                    <li>{todo}</li>
                  </ul>

                </div>

              ))}

            </div>

            <div className='addSomethind   absolute bottom-[-15px] left-[43vw] h-12 w-28 text-center rounded-3xl flex items-center justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>
              <button
                className=''
                onClick={handleAdd}>Add</button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Todo
