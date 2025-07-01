import React, { useState } from 'react';
import africa from "../../assets/images/africa.jpg";
import Wrapper from '../Reuseable/Wrapper';
import Voc from '../course/Voc';
import Pro from '../course/pro';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState('pro');

  return (
    <div className='font-serif'>
      {/* Header Section with Background Image */}
      <div className='bg-[#003334c8] h-[150px] relative overflow-hidden font-serif my-20'>
        <div className='absolute inset-0 z-0 opacity-35'>
          <img src={africa} alt='certificate' className='w-full h-full object-cover' />
        </div>

        <Wrapper>
          <div className='relative z-10 text-[#FFFFFF] py-14'>
            <h1 className='md:text-5xl text-2xl font-bold text-center'>
              Our <span className='text-[#ED1C22]'>Courses</span>
            </h1>
          </div>
        </Wrapper>
      </div>

      {/* Toggle Buttons */}
      <Wrapper>
        <div className='flex md:gap-5 gap-2 my-10 mx-3 justify-center md:justify-start'>
          <button
            onClick={() => setSelectedCourse('Pro')}
            className={`md:px-6 px-2 py-2 rounded-full font-semibold border text-sm md:text-lg cursor-pointer ${
              selectedCourse === 'pro'
                ? 'bg-[#ED1C22] text-white'
                : 'text-[#003334] hover:bg-[#ED1C22] hover:text-white'
            }`}
          >
            Professional Courses
          </button>

          <button
            onClick={() => setSelectedCourse('voc')}
            className={`md:px-6 px-2 py-2 rounded-full font-semibold border text-sm md:text-lg cursor-pointer ${
              selectedCourse === 'voc'
                ? 'bg-[#ED1C22] text-white'
                : 'text-[#003334] hover:bg-[#ED1C22] hover:text-white'
            }`}
          >
            Vocational Courses
          </button>
        </div>
      </Wrapper>

      <Wrapper>
        {selectedCourse === 'Pro' ? <Pro /> : <Voc />}
      </Wrapper>
    </div>
  );
};

export default Courses;
