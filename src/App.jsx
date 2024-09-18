import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './component/Navbar'
import Expense from './component/Expense'
import Todo from './component/Todo'
import Notes from './component/Notes'

function App() {

    const router = createBrowserRouter([

      {
        path:'/',
        element:<><Navbar/><Expense/> </>
      },
      {
        path:'/Todo',
        element:<><Navbar/><Todo/> </>
      },
      {
        path:'/Notes',
        element:<><Navbar/><Notes/> </>
      },
    ])

  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App
