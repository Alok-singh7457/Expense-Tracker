import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='alok flex gap-5 bg-yellow-300 text-gray-800 h-16 items-end relative'>
      <Link to='/' ><p className=' text-2xl font-semibold pl-4'><span className='text-6xl font-serif font-bold '>E</span>xpense - Tracker</p> </Link>

     


      <Link to='/Todo'><p className='text-2xl font-semibold relative left-[50vw]'>Todo-List</p> </Link>
     
     <span className='changer'></span>
      </div>
     
    </div>
  )
}

export default Navbar
