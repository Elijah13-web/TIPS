import React from 'react';
import five from "../../assets/images/five.jpg";
import Wrapper from '../Reuseable/Wrapper';
import { Link } from 'react-router-dom';


const Application = () => {
  return (
    <div className='pt-5'>
      <div className='relative w-full'>

        <img src={five} alt='application' className='w-full lg:h-[574px] h-[400px] object-cover' />
        <div className='absolute inset-0 bg-[#003334B8] opacity-90'></div>

        <div className='absolute inset-0 flex items-center justify-center'>
          <Wrapper>
            <div className='text-white text-center font-serif px-4'>
              <div>
                <h1 className='text-[#ED1C22] text-2xl md:text-4xl font-bold mb-4'>
                We want to know what defines you
              </h1>
              <p className='text-lg md:text-xl max-w-4xl mx-auto'>
                Applications to TIPS are now open! Our application process is designed to help you explore
                and unlock your creativity and discover what makes you a leader.
              </p>
              </div>
            <Link to="/courses" className=' cursor-pointer '>
              <h1 className='text-white mt-10 bg-[#ED1C22] mx-auto hover:bg-white md:w-[359px] w-full py-2 rounded-lg text-2xl font-semibold hover:text-[#ED1C22]'>Start Your Application</h1>
            </Link>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Application;
