import React from 'react';
import add from "../../assets/images/add.jpg"
import Wrapper from '../Reuseable/Wrapper';


const Admission = () => {
  return (
     <div className=' lg:mx-auto lg:container py-20'>
       <div className='bg-[#003334c8] h-[150px] relative overflow-hidden font-serif'>
      
      <div className='absolute inset-0 z-10 opacity-24'>
        <img src={add} alt='certificate' className='w-full h-full object-cover'/>
      </div>
        <div className='relative  text-[#FFFFFF] pt-14'>
          <h1 className='md:text-5xl text-2xl font-bold text-center'>Admission</h1>
        </div>
         </div>

      <Wrapper>
        <div className='bg-[#003334] rounded-2xl py-10 mt-14 lg:w-[700px] md:mx-auto text-white font-serif mx-3 px-5 md:px-10 text-sm space-y-4'>
          <h1 className=''>
            Thank you for your interest in our programmes. We look forward to having you join us! Embark On Your Degree Path With US Today. This step-by-step guide helps you navigate the process of applying, enrolling and beginning your programme at TIPS. 
            This step-by-step guide helps you navigate the process of applying, enrolling and beginning your programme at TIPS. </h1>
            <h2>
              <h1 className='font-bold'>
                01. Pick Your Programme
              </h1>
              The navigation menu at the top of each page gives you detailed information about each programe we offer, plus information about how studying with us can help you ace your career and life goals. Finding it hard to make a decision? Chat with a career advisor to get help and make the right decision.
            
            </h2>
            <h3>
              <h1 className='font-bold'>
                02. Start Your Application 
              </h1>
              Click the Apply Now button to begin your application. Please upload the following documents to complete your application: 
              <li>
                - Valid email address 
              </li>
              <li>
                - Phone number
              </li>
               <li className='pb-1'>
                - WAEC, NECO, GCE or NABTEB results (with a minimum of 5 credits in both English and Mathematics)
                </li> 
               Once you have submitted your application, you will receive an acceptance letter via mail in less than 24 hours if you are eligible for admission. Need help or have a question about the requirements? Chat with a career advisor for assistance.
            </h3>
            <h4>
               <h1 className='font-bold'>
                03. Gain Admission  
              </h1>
              Upon receiving your acceptance letter, proceed to enroll in the courses for your programe of study and make payment. Need help with this process?
              <li>
                 Contact us on WhatsApp via +234 123456789
              </li>
            </h4>
            <h5 className='pb-3'>
              <h1 className='font-bold'>
                 04. Start Learning
              </h1>
              Your journey to a successful career begins. After receiving your acceptance letter and making payment, please upload a photo of yourself to your student portal. You'll be notified about upcoming school events and when classes commence.
            </h5>
            <p>
              Please note that submission of Joint Admissions and Matriculation Board (JAMB) results is NOT required. However, upon admission to our university, the WAEC, NECO, GCE results you provided will be verified for authenticity.
            </p>
          
        </div>
      </Wrapper>
   
    </div>
  );
};

export default Admission;
