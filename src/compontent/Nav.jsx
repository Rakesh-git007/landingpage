import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo1 from  '../assets/logo orange.jpg'

const Nav = () => {

const [isOpen,setIsOpen]=useState(false)

 
  return (
    <>
      <div className='container mx-auto' >
        <nav className='flex justify-between items-center'>
          <div className='h-16 w-15'>
            <img className='rounded-2xl' src={logo1} />
          </div>
          <ul className='hidden md:flex space-x-16'>
            <li><Link to='/' className=' font-bold hover:text-orange-400'>Service</Link></li>
            <li><Link to='/Pricing' className='font-bold hover:text-orange-600'>Pricing</Link></li>
            <li><Link to='/About' className='font-bold  hover:text-orange-600'>About</Link></li>
            <li><Link to='/Contact' className='font-bold  hover:text-orange-600'>Contact</Link></li>
          </ul>

         <Link to='/Signup'>   <button className='hidden md:block bg-orange-400 text-white px-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer'
           >Sign up</button> </Link>
          <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            <svg className='h-10 w-10 mr-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>
      </div >
      {isOpen && (
       
      <div className='md:hidden'>
         <ul className=' flex flex-col items-center space-y-6'>
            <li><Link to='/' className=' font-bold'>Service</Link></li>
            <li><Link to='/Pricing' className='font-bold hover:text-orange-600'>Pricing</Link></li>
            <li><Link to='/About' className='font-bold  hover:text-orange-600'>About</Link></li>
            <li><Link to='/Contact' className='font-bold  hover:text-orange-600'>Contact</Link></li>
             <li>
        <Link to='/Signup'> 
         <button className=' bg-orange-400 text-white px-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer'>Sign up</button>
           </Link>   
              </li>            
          </ul>

      </div>

      )}
      


    </>
  )
}

export default Nav
