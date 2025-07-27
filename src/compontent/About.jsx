import React from 'react'
import Company from '../assets/company.jpg'
import image5 from '../assets/download (5).jpg'
import image6 from '../assets/Branding.jpg'
const About = () => {
  return (
    <>
    <div className='min-h-screen bg-white text-gray-800 py-6 px-15  md:mt-10'> 
      <div className='container mx-auto '>
        <div>
          <h1 className='text-2xl text-orange-400 font-bold text-center mb-10 '>About us</h1>
           <p className="md:text-lg mb-6 leading-6 md:text-center">Welcome to <span className='animate-pulse font-bold'>SkillBoost</span> — your trusted platform to learn, grow, and upskill with practical online courses!</p>
        </div>
        </div>

        <div className='container mx-auto mt-8'>
          <div className='text-center'>
            <h1 className='font-bold md:text-2xl text-orange-400'>🎯Our Mission is Improve the Low Students</h1>
          </div>

          <div className='md:h-45    bg-white-900 border shadow-2xl rounded-bl-4xl rounded-tr-4xl  md:w-2xl  mt-10 md:flex hover:shadow-orange-400'>
            <img className='h-35 mx-10 my-5 rounded-4xl shadow-2xl object-cover transform transition duration-200 hover:scale-110 '  src={Company}/>
            <p className='md:mt-12 md:font-mono mt-10 font-mono md:p-0 p-3'> We aim to make quality education accessible to everyone by providing affordable, expert-led courses in web development, design, marketing, and more.</p>
          </div>

        </div>


        <div className='container mx-auto md:h-72 bg-white mt-10 border-4 shadow-inner border-dotted'>
           <div className='text-center'>
            <h1 className='text-2xl text-orange-400 font-bold md:mt-3 mt-5'>🚀 Why Choose Us?</h1>
           </div>
           
           
            <div className='container mx-auto grid md:grid-cols-2  grid-cols-1 place-items-center items-center mt-5'>
           <ul className="list-disc list-inside  md:space-y-2 font-bold ms-5 text-lg  ">
           <li>Industry-relevant curriculum</li>
           <li>Experienced instructors</li>
           <li>Lifetime access to course materials</li>
           <li>Free certifications</li>
           <li>100K+ learners worldwide</li>
         </ul>
            <div className='md:mt-0 md:mb-0 md:p-0  m-5  mt-10 mb-10 overflow-hidden'>
              <img src={image5} className='h-50  rounded-2xl object-cover transfrom transition duration-300 hover:scale-90'/>
            </div>
         
            </div>

          
        </div>

        <div className='container mx-auto max-w-4xl'>
            
            <div className='md:h-70 bg-white-950  shadow-2xl  hover:shadow-orange-400 border  rounded-tl-4xl rounded-br-4xl  mt-30 text-center'>
              <h2 className='font-bold text-2xl text-orange-400 mt-5'>🧭 Our Path Forward</h2>
               <div className=' text-justify  ms-4 md:flex md:gap-3 justify-around items-center'>
             <p className='text-md font-serif md:w-1/2 p-6 md:p-0 '>As we look to the future, our focus remains on empowering learners through innovation, accessibility,
            and quality. We're expanding our course offerings, collaborating with industry experts, and building
            new features to make learning more engaging and career-focused.</p>

            <img src={image6} className='h-50 mb-5 object-center transform transition duration-200 hover:scale-90'/>
            </div>
            </div>
            
             

        </div>

        </div>   


       

      

    
    

 
   
  

      
    </>
  )
}

export default About




//  <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
//         <p className="text-lg mb-6">
//           Welcome to <span className="font-semibold">SkillBoost</span> — your trusted platform to learn, grow, and upskill with practical online courses!
//         </p>

//         <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
//         <p className="mb-6">
//           We aim to make quality education accessible to everyone by providing affordable, expert-led courses in web development, design, marketing, and more.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2">🚀 Why Choose Us?</h2>
//         <ul className="list-disc list-inside mb-6 space-y-2">
//           <li>Industry-relevant curriculum</li>
//           <li>Experienced instructors</li>
//           <li>Lifetime access to course materials</li>
//           <li>Free certifications</li>
//           <li>100K+ learners worldwide</li>
//         </ul>

//         <h2 className="text-2xl font-semibold mb-2">📍 Our Story</h2>
//         <p>
//           Founded in 2023, we started with a simple idea: bridge the skill gap by offering flexible, engaging, and hands-on learning experiences. Today, we continue to grow with the support of our learners and educators.
//         </p>
//       </div>
//     </div>