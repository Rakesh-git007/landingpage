import React, { useState } from 'react'

const Contact = () => {
  const [data,setData]=useState('')

  function handlesubmit(e){
     
    e.preventDefault();

  }

  function handlechange(e){
    const name = e.target.name
    const value = e.target.value
    setData((prevData)=>{ 
       return { ...prevData,[name]:value,}
    })

  }

  function handleclick(){
    alert("Your Message was Saved")
    
    console.log(data)
  }
 
  return (
    <>
      <div className='container mx-auto mt-20 flex-row md:flex '>
        <div className='flex-col justify-center '>
          <h1 className="text-4xl font-bold mb-4 text-orange-600 text-center">Contact </h1>
          <p className="text-md md:text-2xl mb-6 max-w-md md:max-w-2xl text-gray-500 animate-pulse mt-10  md:ms-0 ms-2">
            We’d love to hear from you! Whether you have questions about our courses, need help choosing the right learning path, or just want to say hello — our team is here to help.
          </p>

          <div className="space-y-3 text-base text-gray-700 mt-10 text-center">
            <p><strong>📧 Email:</strong> support@skillboost.com</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210 (Mon–Fri, 10AM–6PM)</p>
            <p><strong>📍 Office:</strong> 2nd Floor, TechHub Tower, Coimbatore, Tamil Nadu - 641001</p>
          </div>

          <p className="text-md font-bold text-gray-600 mt-10 md:max-w-2xl max-w-md  ms-10 md:ms-0">
            Need help fast? Browse our FAQ or send us a message using the form below.  
            <span className='ms-2'>We typically respond within 24 hours.</span> 
          </p>
          <h2 className="text-2xl text-orange-400 mt-10 text-center font-bold animate-bounce">Send us a message</h2>

        </div>

        <div className='bg-white-900 md:min-h-50 min-h-40 md:w-[600px] mt-10 md:mt-0 md:ms-20 m-5 border-2 border-dashed flex-col  shadow-2xl hover:shadow-amber-400 '>
          <div className='justify-center  mt-5'>
            <h1 className='text-2xl text-orange-400 font-bold text-center'>Send Querys</h1>

            <form className='mt-10 ms-10' onSubmit={handlesubmit}>

              <div>
                <label>
                <strong> Name</strong><span className='text-red-600'>*</span><br />
                  <input type='text' placeholder='Enter your name'  onChange={handlechange}  name='name' value={data.name}
                    className='border h-12 md:w-md  w-[250px]  rounded-2xl outline-orange-400 mt-3' />
                </label>
              </div>

              <div className='mt-6'>
                <label>
                 <strong>Email</strong><span className='text-red-600'>*</span><br />
                  <input type='text' placeholder='Enter your name'  onChange={handlechange} name='email' value={data.email}
                    className='border h-12 md:w-md  w-[250px]  rounded-2xl outline-orange-400 mt-3' />
                </label>
              </div>

              <div className='mt-6'>

                <h1 className='font-bold'>Text Message<span className='text-red-600'>*</span> </h1>
                <textarea className='border md:w-md  w-[250px]  mt-3 outline-orange-400 '  onChange={handlechange}  name='textarea' value={data.textarea}>

                </textarea>

              </div>


              <div className='flex justify-center items-center me-20  md:mt-3  mt-5 mb-3'>
                <button 
                className=' bg-orange-400 font-bold text-white px-4 py-1 rounded-full 
                 hover:bg-orange-500 cursor-pointer' onClick={handleclick}>
                  Submit
                  </button>

              </div>
            </form>


          </div>


        </div>

      </div>



    </>
  )
}

export default Contact



{/* <div className="bg-white mt-20 px-6 py-7 text-gray-800  mx-auto   grid-cols-2">
  <h1 className="text-4xl font-bold mb-4 text-orange-600">Contact Us</h1>
  <p className="text-lg mb-6 w-5/12">
    We’d love to hear from you! Whether you have questions about our courses, need help choosing the right learning path, or just want to say hello — our team is here to help.
  </p>

  <div className="space-y-3 text-base text-gray-700 mb-6">
    <p><strong>📧 Email:</strong> support@skillboost.com</p>
    <p><strong>📞 Phone:</strong> +91 98765 43210 (Mon–Fri, 10AM–6PM)</p>
    <p><strong>📍 Office:</strong> 2nd Floor, TechHub Tower, Coimbatore, Tamil Nadu - 641001</p>
  </div>

  <p className="text-base text-black mb-8 w-2xl">
    Need help fast? Browse our FAQ or send us a message using the form below. We typically respond within 24 hours.
  </p>

  <h2 className="text-2xl text-orange-400 mb-4 font-bold animate-bounce">Send us a message</h2>
</div> */}
