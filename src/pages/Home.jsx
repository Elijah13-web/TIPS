import React from 'react'
import Tips from '../components/Home/Tips'
import Developing from '../components/Home/Developing'

const Home = () => {
  return (
    <div className='mx-auto container'>
        <Tips/>
        <Developing/>
    </div>
  )
}

export default Home