import React from 'react'
import About from './About'
import Pricing from './Pricing'
import './Style.css'
import service from '../assets/service.png'
import image1 from '../assets/javascript.svg'
import image2 from '../assets/react.svg'
import image3 from '../assets/web.svg'
import image4 from '../assets/tailwind.svg'

const Service = () => {
  return (
     <>
     <div className=' mx-auto mt-5 md:flex md:gap-2  md:me-0 me-5'  >
      <div className='md:w-1/2 text-center mt-25 ms-10' >
        <h1 className='mt-6 text-4xl font-bold'> We Create <span className='text-orange-400 animate-pulse'>Solution</span>  for your Studys</h1>
        <p className='mt-8  font-serif font-extrabold leading-normal '>Our team create the solution for students and it easy understand medium level students is learn they programmers esay way it use full slow learners</p>
        <button className='mt-10 bg-orange-400 text-white px-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer'>Get Start</button>
      </div>
      <div className='md:w-1/2 '>
        <img className='h-[450px] md:w-[400px] w-full mx-auto md:mt-5 mt-10  transfrom transition duration-300 hover:scale-110' src={service}/>
      </div>
     </div>
     
     {/* main section */}

     <div className='mt-12 '>
        <h1 className=' text-center text-3xl font-bold '>We Provide The Best <span className='text-orange-400'>Service</span> </h1>
      </div>

     <div className='container mx-auto mt-12 md:flex md:gap-1.5    space-y-10' >
       
      <div className='md:w-1/4  text-center flex flex-col items-center bg-white   overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer'>
        <h1 className='text-2xl font-semibold'>Javascript Development</h1>
        <img className='h-40 w-40 ' src={image1}/>
        <p className='text-sm leading-6 md:w-[300px] md:p-0 p-2 line-clamp-5 text-justify' >
          JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic web applications. It is an essential part of web development,
           working seamlessly with HTML (for structure) and CSS (for styling). Here a quick overview:
           </p>
      </div>

      <div className='md:w-1/4 text-center flex flex-col items-center  bg-white  overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer'>
        <h1 className='text-2xl font-semibold'>Reactjs Development</h1>
        <img className='h-40 w-40' src={image2}/>
        <p className='text-sm leading-6 md:w-[300px] md:p-0 p-2 line-clamp-5 text-justify'>React is a JavaScript library primarily used for building dynamic and interactive user interfaces (UIs). 
          While it is not specifically designed for data science, it can play a significant role in creating data-driven web applications and dashboards.
          </p>
      </div>

         <div className='md:w-1/4 text-center flex flex-col items-center  bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer'>
        <h1 className='text-2xl font-semibold'>Tailwindcss Development</h1>
        <img className='h-40 w-40' src={image4}/>
        <p className='text-sm leading-6 md:w-[300px] md:p-0 p-2 line-clamp-5 text-justify'> Tailwind CSS is a utility-first CSS framework designed to simplify web development by providing pre-defined utility classes. 
          These classes allow developers to style elements directly in HTML without writing custom CSS, making the process faster and more efficient.
          </p>
      </div>

      <div className='md:w-1/4 text-center h-[320px] flex flex-col items-center  bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer'>
        <h1 className='text-2xl font-semibold'>Front-end Full Courses</h1>
        <img className='h-40 w-40' src={image3}/>
        <p className='text-sm leading-6 md:w-[300px] md:p-0 p-2 line-clamp-5 text-justify'>
          Front-end development focuses on creating the user interface (UI) and user experience (UX) of websites and web applications. It involves designing and implementing the visual aspects that users interact with directly, 
          such as layouts, buttons, menus, text, images, and videos
          </p>
      </div>
      </div>

       

       

     
     <Pricing/>
     <About/>
     </>
  )
}

export default Service
