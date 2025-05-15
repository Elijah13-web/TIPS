import React from 'react'
import Tips from '../components/Home/Tips'
import Developing from '../components/Home/Developing'
import OurCourse from '../components/Home/OurCourse'
import Our from "../components/Home/Our"

const Home = () => {
  return (
    <div className='lg:mx-auto lg:container'>
        <Tips/>
        <Developing/>
        <OurCourse/>
        <Our/>
    </div>
  )
}

export default Home