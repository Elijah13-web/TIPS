import React from 'react'
import Wrapper from '../Reuseable/Wrapper'
import john from "../../assets/images/john.png"

const President = () => {
  return (
    <Wrapper>
        <div className='pt-14 mx-3'>
            <div className='text-[#000000] font-serif md:grid grid-cols-2 space-y-3'>
               <div className='space-y-3'>
                 <h1 className='md:text-3xl text-2xl font-bold'>
                  Presidents Address  
                </h1>
                <p className='lg:w-[570px] md:text-xl text-sm'>
                  It is my pleasure to welcome you to Triumphant Institute of Professional Studies (TIPS) where Professionalism Par Excellence is our watch word.
The Institute is in the business of training, imparting practical and professional knowledge needed for career building.
We ensure adequate professional training and development of techniques in applied sciences, management and humanities.
The Institute in partnership with our affiliate’s universities has produced majorly middle-level manpower that are making valuable contributions to the social and economic development of the country in these fields.
Furthermore, our conducive and secure learning environment coupled with conducive accommodation and recreational facilities offer the best treatment for you.
                </p>
               </div>
               <div>
                <img src={john} alt='' className='w-[582px] md:h-[503px]'/>
               </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default President