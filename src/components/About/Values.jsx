import React from 'react'
import Wrapper from '../Reuseable/Wrapper'
import vector2 from "../../assets/icons/Vector 2.png"

const Values = () => {
  return (
   <div className='bg-[#EDEDED] my-14'>
     <Wrapper>
      <div className='grid grid-cols-2 px-3'>
        <div className='text-[#003334] md:w-[189px] h-[104px] py-5 lg:mx-14'>
          <h1 className='md:text-4xl text-2xl font-bold font-serif '>Our Core Values</h1>
        </div>
        <div className=''>
          <img src={vector2} alt='' className='py-14'/>
        </div>
      </div>
    </Wrapper>
   </div>
  )
}

export default Values