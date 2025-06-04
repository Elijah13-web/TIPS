import React from 'react'
import Wrapper from '../Reuseable/Wrapper'

const Our = () => {
  return (
    <div>
      <Wrapper>
        <div className=' text-white font-serif py-10 grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 lg:px-20 mx-auto gap-5 lg:gap-40'>
          <div className='bg-[#003334] rounded-2xl p-5 lg:w-[480px] lg:h-[250px]'>
            <h1 className='text-2xl font-semibold pb-4'>Our Mission</h1>
            <p className=''>The Institute has a vision for students, training and development techniques in all spheres of learning with a view of meeting the present and future needs in commerce, industry, and public services at large and to also provide affordable and practical professional training to all knowledge seekers.</p>
          </div>

          <div className='bg-[#003334] rounded-2xl p-5 lg:w-[480px] lg:h-[250px]'>
            <h1 className='text-2xl font-semibold pb-4'>Our Vision</h1>
            <p className=''>To improve accessibility to quality education, training and employment by providing variety of high quality academic, professional and vocational training courses to enable individuals secure employment personal and career growth through our internationally recognized certificates.</p>
          </div>
          
        </div>
      </Wrapper>
    </div>
  )
}

export default Our