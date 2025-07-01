import React from 'react';
import Addmission from '../components/Apply/Addmission';
import Courses from '../components/Apply/Courses';

const Apply = () => {
  return (
    <div className='lg:mx-auto lg:container py-20'>
      <Addmission />
      <Courses/>
    </div>
  );
};

export default Apply;
