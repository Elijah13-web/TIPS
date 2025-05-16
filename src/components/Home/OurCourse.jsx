import React from 'react'
import Wrapper from '../Reuseable/Wrapper'
import digital from "../../assets/icons/digital.png"
import hair from "../../assets/icons/icon1.png"
import fashion from "../../assets/icons/icon2.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const courses = [
  {
    title: "Digital Analysis",
    description: "Get ready to embark on an exciting journey in the world of data analysis! Apply now and unleash your potential to become a skilled professional in this dynamic field. This is your chance to turn your passion for data into a thrilling career—don’t let it pass you by!",
    icon: digital
  },
  {
    title: " Hairdressing",
    description: "Embark on a fulfilling career by becoming a professional in hairdressing and hairstyling. Learn the techniques and skills needed to create stunning hairstyles and enhance your clients' natural beauty. Join a creative industry where your passion for hair can flourish and start your journey today!",
    icon: hair
  },
  {
    title: "Fashion Design",
    description: "Step into the world of creativity and innovation by becoming a in fashion design. Develop your skills in crafting unique and stylish garments that reflect your artistic vision. Join an exciting industry where fashion meets imagination and start your journey toward a successful career today!",
    icon: fashion
  },
]

const OurCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className='bg-[#EDEDED] py-5'>
      <Wrapper>
        <div className='text-[#003334] font-serif px-3'>
          <div className='pb-5'>
            <h1 className='text-2xl md:text-4xl text-center font-bold'>Our Courses</h1>
          </div>

          {/* Mobile Carousel */}
          <div className='block md:hidden'>
            <Slider {...settings}>
              {courses.map((course, index) => (
                <div key={index} className='p-1'>
                 <div className='rounded-2xl bg-white relative'>
  <div className='p-5'>
    <div className='absolute top-1 right-5 transform -translate-y-1/2'>
      <img src={course.icon} alt='icon' className='w-12' />
    </div>

    <div className='pt-2'>
      <h1 className='text-xl pb-3 font-semibold'>{course.title}</h1>
      <p className='text-sm pt-2'>{course.description}</p>
    </div>
  </div>
</div>

                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className='hidden md:grid grid-cols-3 lg:gap-14 w-full'>
            {courses.map((course, index) => (
              <div key={index} className='rounded-2xl bg-white relative lg:w-[370px] md:w-[260px]'>
                <div className='lg:p-5 p-3'>
                  <div className='absolute lg:bottom-52 md:bottom-60 right-5'>
                    <img src={course.icon} alt='icon' className='w-12'/>
                  </div>
                  <div className='pt-5'>
                    <h1 className='text-xl pb-3 font-semibold'>{course.title}</h1>
                    <p className='text-sm pt-2'>{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className='rounded-xl bg-[#ED1C22] hover:bg-[#c8141c] w-56 mx-auto py-3 mt-10 cursor-pointer font-serif'>
            <h1 className='text-center  text-[#FFFFFF] font-semibold'>Our Course</h1>
          </div>
      </Wrapper>
    </div>
  )
}

export default OurCourse
