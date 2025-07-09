import React from 'react'
import Wrapper from './Wrapper'
import map from "../../assets/images/map.jpg"
import logo from "../../assets/icons/Logo.png"
import face from "../../assets/icons/face.png"
import ig from "../../assets/icons/ig.png"
import tittok from "../../assets/icons/tittok.png"
import line from "../../assets/icons/line.png"

const Footer = () => {
  return (
    <div className='bg-[#003334] relative overflow-hidden font-serif text-[#FFFFFF] py-10 lg:mx-auto lg:container'>
        <Wrapper>
            <div >
                <div className='absolute inset-0 z-0 opacity-10'>
                    <img src={map} alt='' className='w-full h-full object-cover'/>
                </div>
                <div className='pt-8 grid md:grid-cols-3 gap-10 items-center'>
                    <div className='mx-auto'>
                        <img src={logo} alt=''/>
                    </div>
                    <h1 className='text-center'>Triumphant Institute Of Professional Studies</h1>
                    <div className='flex gap-10 mx-auto'>
                        <img src={face} alt='' className='w-7 h-7 cursor-pointer'/>
                        <img src={ig} alt=''  className='w-7 h-7 cursor-pointer'/>
                        <img src={tittok} alt=''  className='w-7 h-7 hover:cursor-pointer'/>
                    </div>
                </div>
                  <div className='pt-6'>
                        <img src={line} alt='' className='mx-auto'/>
                    </div>

                    <div className='grid md:grid-cols-2 gap-10 items-center pt-8'>
                        <div className='space-y-4 text-center md:text-start mx-auto'>
                            <h1 className='w-[270px] font-bold text-3xl'>Email Address</h1>
                            <h1 className='w-[270px]'>Info@tips.edu.ng President@tips.Edu.Ng admissions@tips.edu.ng</h1>
                        </div>
                        <div className='space-y-4 text-center md:text-start mx-auto'>
                            <h1 className='w-[270px] font-bold text-3xl'>Contact Number</h1>
                            <h1>+234 808 033 3008</h1>
                            <h1>+234 810 848 4515</h1>
                        </div>
                    </div>
                    
            </div>
        </Wrapper>
    </div>
  )
}

export default Footer