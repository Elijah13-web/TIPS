import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './components/Reuseable/Wrapper';
import logo from "./assets/icons/logo.png";
import { Menu, X } from 'lucide-react';
import close from "../src/assets/icons/vector.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Wrapper>
      <div className="pb-3 mx-auto container">
        <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
          <div className="flex justify-between items-center px-5 md:px-10 py-4 w-full">
            
            {/* Logo and Title */}
            <div className="flex items-center space-x-4 flex-1">
              <img
                src={logo}
                alt="logo"
                onClick={() => (window.location.href = '/')}
                className="w-14 h-14 cursor-pointer"
              />
              <h1 className="text-[#000000] font-serif text-sm md:hidden">
                TRIUMPHANT INSTITUTE OF PROFESSIONAL STUDIES
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              <Link to="/" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Home</Link>
              <Link to="/apply" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Apply</Link>
              <Link to="/about" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">About</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 md:hidden">
              
              {/* Header: Logo and Title */}
              <div className="p-4 flex items-center space-x-3">
                <img
                  src={logo}
                  alt="logo"
                  onClick={() => (window.location.href = '/')}
                  className="w-12 h-12 cursor-pointer"
                />
                <h1 className="text-[#000000] font-serif text-sm">
                  TRIUMPHANT INSTITUTE OF PROFESSIONAL STUDIES
                </h1>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col mt-10 space-y-6 px-10">
                <Link to="/" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]" onClick={toggleMenu}>About</Link>
                <Link to="/apply" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]" onClick={toggleMenu}>Create Account</Link>
                <Link to="/about" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]" onClick={toggleMenu}>Get Admission</Link>
                <Link to="/about" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]" onClick={toggleMenu}>Student Portal</Link>
                <Link to="/about" className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]" onClick={toggleMenu}>Our Courses</Link>

                {/* Close Button at Bottom */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                  <button onClick={toggleMenu}>
                    <img src={close} alt="close" className="rounded-full p-2 w-8 border cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
