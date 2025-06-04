import React from 'react';
import Wrapper from '../Reuseable/Wrapper';
import kunle from "../../assets/images/kunle.jpg";
import vic from "../../assets/images/vic.jpg";
import khalid from "../../assets/images/khalid.jpg";

const Pics = () => {
  return (
    <Wrapper>
      <div className='font-serif grid grid-cols-1 sm:grid-cols-2 gap-6 px-3'>

        {/* Integrity */}
        <div className='relative md:w-[366px] md:h-[620px] h-[300px] mx-auto rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-[#003334B8] opacity-80'></div>
          <img src={kunle} alt='kunle' className='object-cover h-full w-full' />
          <div className='absolute bottom-0 left-0 right-0 text-white p-2'>
            <h1 className='font-bold text-2xl mb-1'>INTEGRITY</h1>
            <p className='text-sm'>
              A person with integrity is trustworthy, keeps their promises, and stands by their values,
              even in difficult situations. It is a key trait in building strong relationships and a good reputation.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className='space-y-6'>

          {/* Excellence */}
          <div className='relative md:w-[366px] md:h-[300px] h-[300px] mx-auto rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-[#003334B8] opacity-80'></div>
            <img src={vic} alt='vic' className='object-cover h-full w-full' />
            <div className='absolute bottom-0 left-0 right-0 text-white p-2'>
              <h1 className='font-bold text-2xl mb-1'>EXCELLENCE</h1>
              <p className='text-sm'>
                Excellence is the commitment to consistently delivering high-quality results through dedication, discipline, and continuous improvement. It is not about perfection but about striving to be the best version of oneself in every endeavor.
              </p>
            </div>
          </div>

          {/* Innovation */}
          <div className='relative md:w-[366px] md:h-[300px] h-[300px] mx-auto rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-[#003334B8] opacity-80'></div>
            <img src={khalid} alt='khalid' className='object-cover h-full w-full' />
            <div className='absolute bottom-0 left-0 right-0 text-white p-2'>
              <h1 className='font-bold text-2xl mb-1'>INNOVATION</h1>
              <p className='text-sm'>
                Innovation is the process of creating new ideas, products, or methods to improve existing solutions or introduce entirely new ones. It drives progress in technology, business, and society by enhancing efficiency, solving problems, and meeting evolving needs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};

export default Pics;
