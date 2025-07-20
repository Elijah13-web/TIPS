import React, { useContext } from 'react';
import Wrapper from '../Reuseable/Wrapper';
import { prodb } from '../Db';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import { ApplicationModalContext } from '../Auth/ApplicationModalContext';

const Pro = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { setShowModal } = useContext(ApplicationModalContext);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      navigate('/login');
    }
  };

  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-3 pb-10">
        {prodb && prodb.map((item) => (
          <div key={item._id} className='relative rounded-3xl overflow-hidden'>
            <img src={item.image} alt="icon" className='w-full h-[600px] rounded-3xl object-cover' />
            <div className='absolute inset-0 opacity-90 flex flex-col justify-end'>
              <div className='bg-[#FFFFFF] rounded-3xl px-4 pt-4 pb-4 font-serif text-[#003334]'>
                <h3 className='lg:text-lg font-bold mb-3'>{item.heading}</h3>
                <p className='text-sm lg:text-lg mb-4 lg:w-[560px] lg:h-[160px]'>{item.description}</p>
                <p
                  onClick={handleApplyClick}
                  className='bg-[#ED1C22] px-4 py-2 text-sm font-semibold w-max underline text-white hover:text-[#ED1C22] border border-transparent hover:border-[#ED1C22] hover:bg-white cursor-pointer'
                >
                  Apply Now
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Pro;
