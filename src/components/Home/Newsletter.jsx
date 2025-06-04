import React, { useState } from 'react';
import Wrapper from '../Reuseable/Wrapper';
import jumb from "../../assets/icons/jumb.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(''); // Clear error on input change
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!email) {
      setError('Email address is required.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Submit email logic here
      alert("Subscribed successfully!");
      setEmail('');
    }
  };

  return (
    <Wrapper>
      <div className='bg-[#003334B0] relative overflow-hidden font-serif rounded-2xl mb-5 mx-3 lg:w-[1100px] lg:mx-auto text-[#FFFFFF]'>
        
        {/* Background image */}
        <div className='absolute inset-0 z-0 opacity-30'>
          <img src={jumb} alt='jumbotron' className='w-full h-full object-cover' />
        </div>

        {/* Foreground content */}
        <div className='relative z-10 grid md:grid-cols-2 py-5 md:px-10 px-3 text-[#FFFFFF]'>
          <div className='pb-4 md:pb-0'>
            <h1 className='text-xl font-semibold'>Subscribe To Our Newsletters</h1>
            <h1>Get updates on news and events</h1>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-3'>
              {/* Email Input */}
              <input
                type='email'
                value={email}
                onChange={handleChange}
                placeholder='Enter your email address'
                className={`border rounded-lg px-2 text-sm md:text-lg py-2 w-full md:w-72 focus:outline-none ${error ? 'border-red-500' : ''}`}
              />

              {/* Subscribe Button */}
              <button
                className='rounded-lg py-2 w-44 bg-[#ED1C22] text-white font-semibold hover:bg-[#c8141c] transition duration-200 cursor-pointer'
                onClick={handleSubmit}
              >
                Subscribe
              </button>
            </div>

            {/* Error Message */}
            {error && <span className='text-red-300 text-sm'>{error}</span>}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Newsletter;
