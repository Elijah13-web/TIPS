import React from 'react'
import AboutUs from '../components/About/AboutUs'
import President from '../components/About/President'
import Values from '../components/About/Values'
import Pics from '../components/About/Pics'
import Application from '../components/About/Application'

const About = () => {
  return (
    <div className='lg:mx-auto lg:container py-20'>
      <AboutUs/>
      <President/>
      <Values/>
      <Pics/>
      <Application/>
    </div>
  )
}

export default About