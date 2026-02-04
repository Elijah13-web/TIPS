import React from 'react'
import Wrapper from '../Reuseable/Wrapper'
import student from "../../assets/images/student.png"

const Developing = () => {
  return (
   <Wrapper>
     <div className='grid md:grid-cols-2 font-serif py-10 mx-auto px-3'>
        <div className=' py-5 font-semibold'> 
            <h1 className='text-[#003334] md:text-4xl text-2xl font-bold lg:w-[480px] pb-4'> Developing Career Leaders</h1>
            <h1 className='font-semibold'>Excellence is our watch word.</h1>
            <h1  className='lg:w-[470px] '>The innstitute is in the business of training, impactinng practical And professional knowledge needed for career building. 
              we ensure adequate profwessional training and development or techniques in applied science, management and humahities.</h1>
        </div>
        <div >
          <img src={student} alt='' className='rounded-2xl'/>
        </div>
    </div>
   </Wrapper>
  )
}  

export default Developing