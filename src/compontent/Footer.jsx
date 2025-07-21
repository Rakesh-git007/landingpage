import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {

  const [email, setEmail] = useState("")

  function click() {
    console.log(email)
    alert(`Email:${email}`)
  }


  return (
    <>


      <div className='flex justify-center relative mt-30'>
        <input className='md:block hidden border-1 border-black h-12 outline-none   w-[300px]  md:w-lg rounded-2xl ps-5  bg-white-950 text-black hover:shadow-2xl  absolute  transform -translate-y-7 translate-x-3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email@gmail' required />
        <button className='mt-10 bg-orange-400 font-bold text-white px-4 py-1 rounded-full absolute transform -translate-y-10 translate-x-10  hover:bg-orange-500 cursor-pointer' onClick={click}>Submit</button>

      </div>

      <div className='mx-auto  grid grid-cols-2  md:grid-cols-5 lg:grid lg:grid-col-5  ms-5 items-center place-items-center' >

        <div className=' items-center mt-20 '>
          <img src={logo} className='h-15 w-25' />
          <h1 className='text-2xl text-orange-400 font-bold hover:tracking-wider flex-'>Service</h1>
          <ul className='flex gap-1'>
            <li><svg fill="currentcolor" className='h-16 w-5 text-red-500' viewBox="0 -4 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
              <path d="M30.722,20.579 C30.137,21.894 28.628,23.085 27.211,23.348 C27.066,23.375 23.603,24.000 16.010,24.000 L15.990,24.000 C8.398,24.000 4.932,23.375 4.788,23.349 C3.371,23.085 1.861,21.894 1.275,20.578 C1.223,20.461 0.001,17.647 0.001,12.000 C0.001,6.353 1.223,3.538 1.275,3.421 C1.861,2.105 3.371,0.915 4.788,0.652 C4.932,0.625 8.398,-0.000 15.990,-0.000 C23.603,-0.000 27.066,0.625 27.210,0.651 C28.628,0.915 30.137,2.105 30.723,3.420 C30.775,3.538 32.000,6.353 32.000,12.000 C32.000,17.647 30.775,20.461 30.722,20.579 ZM28.893,4.230 C28.581,3.529 27.603,2.759 26.845,2.618 C26.813,2.612 23.386,2.000 16.010,2.000 C8.615,2.000 5.185,2.612 5.152,2.618 C4.394,2.759 3.417,3.529 3.104,4.234 C3.094,4.255 2.002,6.829 2.002,12.000 C2.002,17.170 3.094,19.744 3.106,19.770 C3.417,20.471 4.394,21.241 5.153,21.382 C5.185,21.388 8.615,22.000 15.990,22.000 L16.010,22.000 C23.386,22.000 26.813,21.388 26.846,21.382 C27.604,21.241 28.581,20.471 28.894,19.766 C28.904,19.744 29.998,17.170 29.998,12.000 C29.998,6.830 28.904,4.255 28.893,4.230 ZM13.541,17.846 C13.379,17.949 13.193,18.000 13.008,18.000 C12.842,18.000 12.676,17.959 12.525,17.875 C12.206,17.699 12.008,17.364 12.008,17.000 L12.008,7.000 C12.008,6.637 12.204,6.303 12.521,6.127 C12.838,5.950 13.227,5.958 13.534,6.149 L21.553,11.105 C21.846,11.286 22.026,11.606 22.027,11.951 C22.028,12.296 21.852,12.618 21.560,12.801 L13.541,17.846 ZM14.009,8.794 L14.009,15.189 L19.137,11.963 L14.009,8.794 Z" />
            </svg></li>
            <li><svg className='h-16 w-5 text-blue-500' viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F" />
            </svg></li>
            <li>
              <svg  className='h-16 w-5 text-blue-500' viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 5.9246C21.2645 6.25051 20.4744 6.47071 19.6438 6.57025C20.4911 6.06289 21.1412 5.25782 21.4477 4.29948C20.655 4.76984 19.7768 5.1116 18.8422 5.29481C18.0935 4.49855 17.0277 4 15.8474 4C13.582 4 11.7446 5.8374 11.7446 8.10464C11.7446 8.42526 11.7816 8.73707 11.8503 9.03832C8.43883 8.86656 5.41672 7.23263 3.39258 4.75046C3.04025 5.35823 2.83766 6.06289 2.83766 6.81335C2.83766 8.23677 3.56258 9.4937 4.66273 10.2292C3.98978 10.2072 3.35735 10.0231 2.80419 9.71567V9.76852C2.80419 11.7565 4.21792 13.4151 6.09583 13.7921C5.75055 13.8855 5.38853 13.9348 5.01506 13.9348C4.75081 13.9348 4.49273 13.9102 4.24258 13.8626C4.76491 15.4921 6.27993 16.6795 8.07593 16.7112C6.67101 17.8122 4.90144 18.4684 2.97948 18.4684C2.64829 18.4684 2.3215 18.449 2 18.4112C3.81626 19.5765 5.97252 20.2547 8.28909 20.2547C15.8378 20.2547 19.9644 14.0026 19.9644 8.58029C19.9644 8.40412 19.96 8.2262 19.9521 8.05003C20.7536 7.47045 21.4495 6.74905 21.9982 5.92724L22 5.9246Z" fill="#000000" />
              </svg>
            </li>
          </ul>
        </div>

        <div className='mt-20'>
          <h1 className='text-2xl font-bold leading-10'>Company</h1>
          <ul className='items-center'>
            <li><Link to='/About' className='font-serif leading-4'>About</Link></li>
            <li><Link to='/Service'className='font-serif leading-4'>Careers</Link></li>
            <li><Link to='/About'className='font-serif leading-4'>BLog</Link></li>
            <li><Link to='/Contact'className='font-serif leading-4'>Contact us</Link></li>
             
          </ul>
        </div>

         <div className='mt-20'>
          <h1 className='text-2xl font-bold leading-10'>Courses</h1>
          <ul className='items-center'>
            <li><Link to='/Abouts' className='font-serif leading-4'>Browse All Courses</Link></li>
            <li><Link to='/Service'className='font-serif leading-4'> Popular Courses</Link></li>
            <li><Link to='/Abouts'className='font-serif leading-4'>Certification Courses</Link></li>
            <li><Link to='/Contact'className='font-serif leading-4'>Free Courses</Link></li>
             
          </ul>
        </div>

          <div className='mt-20'>
          <h1 className='text-2xl font-bold leading-10'>Support</h1>
          <ul className='items-center'>
            <li><Link to='/Abouts' className='font-serif leading-4'>Student Guidelines</Link></li>
            <li><Link to='/Service'className='font-serif leading-4'> FAQs</Link></li>
            <li><Link to='/Abouts'className='font-serif leading-4'>Report a Problem</Link></li>
            <li><Link to='/Contact'className='font-serif leading-4'>Contact Support</Link></li>
             
          </ul>
        </div>


         <div className='mt-20'>
          <h1 className='text-2xl font-bold leading-10'>Legal</h1>
          <ul className='items-center'>
            <li><Link to='/Abouts' className='font-serif leading-4'>Terms & Conditions</Link></li>
            <li><Link to='/Service'className='font-serif leading-4'> Privacy Policy</Link></li>
            <li><Link to='/Abouts'className='font-serif leading-4'>Report a Problem</Link></li>
            <li><Link to='/Contact'className='font-serif leading-4'>Disclaimer</Link></li>
             
          </ul>
        </div>


      </div>



    </>
  )
}

export default Footer
