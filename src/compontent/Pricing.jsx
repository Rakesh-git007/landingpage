import React from 'react'
 

const Pricing = () => {
  return (
    <>

      <div className='container mx-auto lg:mt-15 md:mt-15 mt-15'>
        <div className='flex flex-col lg:items-center md:items-center items-center gap-4'>
          <h1 className='text-3xl text-orange-400 font-bold   hover:tracking-widest'>Price Details</h1>
          <p className='md:font-semibold lg:font-semibold font-bold text-2xl animate-bounce duration-1000 mx-10 md:mt-0 lg:mt-0 mt-10'>Offers Multiple Pakages Buys Once For Life Time</p>
          <p className='font-semibold hover:tracking-widest '>Always Discount for Students🔥</p>
        </div>
      </div>

      <div className='container mx-auto flex flex-col gap-10  items-center     md:flex  md:flex-row    md:gap-20   md:justify-center md:mt-20 mt-10'>

        <div className='bg-white-900 h-80 w-80 border-4 border-dashed border-back rounded-2xl   text-center relative  shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer'>
          <h1 className='mt-5 text-2xl text-blue-600 font-extrabold'>$10</h1>
          <h1 className='font-bold text-2xl tracking-wide'>Basic</h1>
          <p className='font-bold text-orange-400 tracking-wide'>This package includes </p>
          <ul className=''>
            <li className='flex text-center ms-3 mt-5 leading-8'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Html
              </div>
            </li>
             
             <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Css
              </div>
            </li>
            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Java script-Basic
              </div>
            </li>

            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                React.js-Basic
              </div>
            </li>


            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Tailwind-Basic
              </div>
            </li>
          </ul>
        <button className='mt-10 bg-orange-400 font-bold text-white px-4 py-1 rounded-full absolute bottom-0 transform translate-y-4 -translate-x-10 hover:bg-orange-500 cursor-pointer '>Buy Now</button>

        </div>

        {/* second div */}

        <div className='bg-white-900 h-80 w-80 border-4 border-dashed border-red-600 rounded-2xl  text-center relative  shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer'>

            <h1 className='mt-5 text-2xl text-blue-600 font-extrabold'>$99</h1>
          <h1 className='font-bold text-2xl tracking-wide'>Advance-Level</h1>
          <p className='font-bold text-orange-400 tracking-wide'>This package includes </p>
          <ul>
            <li className='flex items-center ms-3 mt-5 leading-8'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                React.js-Advance level
              </div>
            </li>
             
             <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Tailwindcss-Advance level
              </div>
            </li>
            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Javascript & Api
              </div>
            </li>

            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Front-end Responive
              </div>
            </li>


            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Tailwind-Basic
              </div>
            </li>
          </ul>
        <button className='mt-10 bg-orange-400 font-bold text-white px-4 py-1 rounded-full absolute bottom-0 transform translate-y-4 -translate-x-10 hover:bg-orange-500 cursor-pointer '>Buy Now</button>

        </div>

        {/* third-div */}

        <div className='bg-white-900 h-80 w-80 border-4 border-dashed border-black-600 rounded-2xl  text-center relative   shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer'>

            <h1 className='mt-5 text-2xl text-blue-600 font-extrabold'>$50</h1>
          <h1 className='font-bold text-2xl tracking-wide'>Intermidate</h1>
          <p className='font-bold text-orange-400 tracking-wide'>This package includes </p>
          <ul>
            <li className='flex items-center ms-3 mt-5 leading-8'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                React.js-cover
              </div>
            </li>
             
             <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Javascript-cover
              </div>
            </li>
            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Tailwindcss-cover
              </div>
            </li>

            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Front-end
              </div>
            </li>


            <li className='flex items-center ms-3 leading-7'>
               
              <div><svg  className='h-6 w-4 text-blue-500'  viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.34" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
              <div className='font-bold ms-1.5'>
                Tailwind-Basic
              </div>
            </li>
          </ul>
        <button className='mt-10 bg-orange-400 font-bold text-white px-4 py-1 rounded-full absolute bottom-0 transform translate-y-4 -translate-x-10 hover:bg-orange-500 cursor-pointer '>Buy Now</button>

        </div>

      </div>



    </>
  )
}

export default Pricing
