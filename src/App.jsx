import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Apply from './pages/Apply'
import Navbar from './Navbar'
import Footer from './components/Reuseable/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
