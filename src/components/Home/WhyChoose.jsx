import React from 'react'
import Wrapper from '../Reuseable/Wrapper'
import cert from "../../assets/images/cert.jpg"

const WhyChoose = () => {
  return (
    <div className='bg-[#003334B8] relative overflow-hidden font-serif'>
      
      <div className='absolute inset-0 z-0 opacity-20'>
        <img src={cert} alt='certificate' className='w-full h-full object-cover'/>
      </div>

      <Wrapper>
        <div className='relative z-10 text-[#FFFFFF] py-10 p-5'>
          <h1 className='md:text-5xl text-2xl font-bold lg:w-[900px]'>Why Choose <span className='text-[#ED1C22]'>Triumphant Institute
Of Professional Studies</span></h1>
          <p className='mt-10 lg:w-[1152px] text-xl'>
At Triumphant Institute of Professional Studies, we are committed to providing high-quality education that helps our students achieve their goals. Our experienced faculty, modern facilities, and industry partnerships ensure that our students receive the best possible education and are well-prepared for their careers. Click here to learn more.          </p>
        </div>
      </Wrapper>
    </div>
  )
}

export default WhyChoose
