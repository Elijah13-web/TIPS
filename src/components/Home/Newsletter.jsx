import React, { useState } from 'react'
import Wrapper from '../Reuseable/Wrapper'
import jumb from "../../assets/icons/jumb.jpg"

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Wrapper>
      <div className='bg-[#003334B0] relative overflow-hidden font-serif rounded-2xl mb-5 mx-2 lg:w-[1100px] lg:mx-auto text-[#FFFFFF]'>
        
        {/* Background image */}
        <div className='absolute inset-0 z-0 opacity-30'>
          <img src={jumb} alt='jumbotron' className='w-full h-full object-cover'/>
        </div>

        {/* Foreground content */}
        <div className='relative z-10 grid md:grid-cols-2 py-5 md:px-10 px-3 text-[#FFFFFF]'>
          <div className='pb-4 md:pb-0'>
            <h1 className='text-xl font-semibold'>Subscribe To Our Newsletters</h1>
            <h1>Get updates on news and events</h1>
          </div>
         
            <div className='flex gap-3 '>
              {/* Email Input */}
              <input
                type='email'
                value={email}
                onChange={handleChange}
                placeholder='Enter your email address'
                className='border rounded-lg px-4 py-2 w-full md:w-72 focus:outline-none'
              />

              {/* Subscribe Button */}
              <button className='rounded-lg py-2 w-44  bg-[#ED1C22] text-white font-semibold hover:bg-[#c8141c] transition duration-200 cursor-pointer'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Newsletter
