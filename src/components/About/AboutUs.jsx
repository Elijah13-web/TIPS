import React from 'react'
import Wrapper from '../Reuseable/Wrapper'
import cert from "../../assets/images/cert.jpg"


const AboutUs = () => {
  return (
    <div className=''>
       <div className='bg-[#003334c8] h-[150px] relative overflow-hidden font-serif'>
      
      <div className='absolute inset-0 z-0 opacity-20'>
        <img src={cert} alt='certificate' className='w-full h-full object-cover'/>
      </div>

      <Wrapper>
        <div className='relative z-10 text-[#FFFFFF] pt-14'>
          <h1 className='md:text-5xl text-2xl font-bold text-center'>About <span className='text-[#ED1C22]'>Tips</span></h1>
        </div>
      </Wrapper>
    </div>
    </div>
  )
}

export default AboutUs