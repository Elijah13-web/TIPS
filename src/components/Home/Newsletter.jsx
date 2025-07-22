import React, { useState } from 'react';
import Wrapper from '../Reuseable/Wrapper';
import jumb from "../../assets/icons/jumb.jpg";
import SuccessModal from '../modals/SuccessModal';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email) {
      setError('Email address is required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const response = await axios.post("https://tips-backend.onrender.com/subscribe", { email });

      if (response.data && response.data.success) {
        setSuccess(true);
        setEmail('');
      } else {
        setError(response.data?.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className='bg-[#003334B0] relative overflow-hidden font-serif rounded-2xl mb-5 mx-3 lg:w-[1100px] lg:mx-auto text-[#FFFFFF]'>
        <div className='absolute inset-0 z-0 opacity-30'>
          <img src={jumb} alt='jumbotron' className='w-full h-full object-cover' />
        </div>

        <form
          className='relative z-10 grid md:grid-cols-2 py-5 md:px-10 px-3 text-[#FFFFFF]'
          onSubmit={handleSubmit}
        >
          <div className='pb-4 md:pb-0'>
            <h1 className='text-xl font-semibold'>Subscribe To Our Newsletters</h1>
            <h1>Get updates on news and events</h1>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-3'>
              <input
                type='email'
                value={email}
                onChange={handleChange}
                placeholder='Enter your email address'
                className={`border rounded-lg px-2 text-sm md:text-lg py-2 w-full md:w-72 focus:outline-none ${error ? 'border-red-500' : ''}`}
                disabled={loading}
                autoComplete="email"
              />

              <button
                type="submit"
                className={`rounded-lg py-2 w-44 bg-[#ED1C22] text-white font-semibold hover:bg-[#c8141c] transition duration-200 cursor-pointer ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
            </div>
            {error && <span className='text-red-300 text-sm'>{error}</span>}
          </div>
        </form>

        {success && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <SuccessModal onClose={() => setSuccess(false)} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Newsletter;
