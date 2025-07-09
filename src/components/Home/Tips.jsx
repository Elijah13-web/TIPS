import React from 'react'
import title from "../../assets/images/title.jpg"
import Wrapper from '../Reuseable/Wrapper'


const Tips = () => {
  return (
    <div className=''>
        <div className='lg:h-[460px] h-[310px] bg-[#003334c8] relative overflow-hidden font-serif'>
       <div className='absolute inset-0 z-0 opacity-40'>
         <img src={title} alt='' className='lg:h-[460px] h-[310px] w-full'/>
       </div>
       <Wrapper>
        <div className='relative text-[#FFFFFF] mt-32 font-semi-bold mx-10'>
        <h1 className='lg:text-7xl md:text-4xl text-3xl w-[320px] md:w-[380px] lg:w-[740px]'>Welcome To <span className='text-[#ED1C22] '>Triumphant Institute Of Professional Studies</span></h1>
        <h1 className='pt-3'>Professionalism Per Excellence</h1>
       </div>
       </Wrapper>
       
        </div>
    </div>
  )
}

export default Tips