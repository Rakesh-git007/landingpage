import React, { useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import logo1 from '../assets/logo orange.jpg'
import { Link } from 'react-router-dom'



const Footer = () => {

  const [email, setEmail] = useState("")

  function click() {
    console.log(email)
    alert(`Email:${email}`)
  }


  return (
    <>


      <div className='flex justify-center  mt-30'>
        <input className=' border-1 border-black h-12 outline-none   w-[300px]  md:w-lg rounded-2xl ps-5  bg-white-950 text-black hover:shadow-2xl  absolute  transform -translate-y-7 translate-x-3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email@gmail' required />
        <button className='mt-10 bg-orange-400 font-bold text-white px-4 py-1 rounded-full  hover:bg-orange-500 cursor-pointer' onClick={click}>Submit</button>

      </div>

      <div className='mx-auto  grid grid-cols-2  md:grid-cols-5 lg:grid lg:grid-col-5  ms-5 items-center place-items-center mb-10' >

        <div className=' items-center mt-20 '>
          <img src={logo1} className='h-16 w-20' />
          <h1 className='text-2xl text-orange-400 font-bold  flex-'>Service</h1>
          <ul className='flex gap-1 mt-3'>
            <li> <FaFacebook className='text-blue-600 hover:text-blue-800 hover:scale-110'/> </li>
             <li> <FaYoutube className=" text-red-600 hover:text-red-800 hover:scale-110"/> </li>
            <li>  <FaInstagram className='text-pink-500 hover:text-pink-800 hover:scale-110'/> </li>
            <li> <FaTwitterSquare className='text-sky-500 hover:text-sky-600 hover:scale-110'/> </li>


          </ul>
        </div>

        <div className='mt-20 '>
          <h1 className='text-2xl font-bold leading-10'>Company</h1>
          <ul className='items-center'>
            <li><Link to='/About' className='font-serif leading-4'>About</Link></li>
            <li><Link to='/' className='font-serif leading-4'>Careers</Link></li>
            <li><Link to='/About' className='font-serif leading-4'>BLog</Link></li>
            <li><Link to='/Contact' className='font-serif leading-4'>Contact us</Link></li>

          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-2xl font-bold leading-10'>Courses</h1>
          <ul className='items-center'>
            <li><Link to='/Abouts' className='font-serif leading-4'>Browse All Courses</Link></li>
            <li><Link to='/' className='font-serif leading-4'> Popular Courses</Link></li>
            <li><Link to='/Abouts' className='font-serif leading-4'>Certification Courses</Link></li>
            <li><Link to='/Contact' className='font-serif leading-4'>Free Courses</Link></li>

          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-2xl font-bold leading-10'>Support</h1>
          <ul className='items-center'>
            <li><Link to='/Abouts' className='font-serif leading-4'>Student Guidelines</Link></li>
            <li><Link to='/Faqs' className='font-serif leading-4'> FAQs</Link></li>
            <li><Link to='/Abouts' className='font-serif leading-4'>Report a Problem</Link></li>
            <li><Link to='/Contact' className='font-serif leading-4'>Contact Support</Link></li>

          </ul>
        </div>


        <div className='mt-20'>
          <h1 className='text-2xl font-bold leading-10'>Legal</h1>
          <ul className='items-center'>
            <li><Link to='/Abouts' className='font-serif leading-4'>Terms & Conditions</Link></li>
            <li><Link to='/' className='font-serif leading-4'> Privacy Policy</Link></li>
            <li><Link to='/Abouts' className='font-serif leading-4'>Report a Problem</Link></li>
            <li><Link to='/Contact' className='font-serif leading-4'>Disclaimer</Link></li>

          </ul>
        </div>


      </div>



    </>
  )
}

export default Footer
