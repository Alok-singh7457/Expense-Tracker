import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='alok flex gap-5 text-gray-800relative inset-0 -z-10 h-16 items-end [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <Link to='/' ><p className=' text-2xl font-semibold pl-4'><span className='text-6xl font-serif font-bold '>E</span>xpense - Tracker</p> </Link>

     


      <Link to='/Todo'><p className='text-2xl font-semibold relative left-[50vw]'>Todo-List</p> </Link>
     
     <span className='changer'></span>
      </div>
     
    </div>
  )
}

export default Navbar
