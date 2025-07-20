import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Wrapper from './components/Reuseable/Wrapper';
import logo from '../src/assets/icons/Logo.png';
import close from '../src/assets/icons/Vector.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logout from './components/Modals/Logout';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);



  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const user = { fullName: "John Ajiboye " }; 

  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setIsAuthenticated(false);
    setDropdownOpen(false);
    setLogoutModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="lg:mx-auto lg:container">
        <div className="fixed top-0 left-0 w-full bg-white z-50">
          <div className="flex justify-between items-center px-5 md:px-10 py-4 w-full lg:mx-auto lg:container shadow-2xl">
            {/* Logo */}
            <div className="flex items-center space-x-4 flex-1">
              <img
                src={logo}
                alt="logo"
                onClick={() =>
                  location.pathname === '/'
                    ? window.scrollTo({ top: 0, behavior: 'smooth' })
                    : (window.location.href = '/')
                }
                className="w-14 h-14 cursor-pointer"
              />
              <h1 className="text-[#000000] font-serif text-sm md:hidden">
                TRIUMPHANT INSTITUTE OF PROFESSIONAL STUDIES
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-20 items-center">
              <Link to="/" onClick={() => handleNavClick('/')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Home</Link>

              {/* Apply Dropdown */}
              <div className="group relative space-x-6">
                <button className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Apply</button>
                <div className="absolute right-0 top-full mt-2 bg-[#EDEDED] border rounded-md shadow-md w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 z-50">
                  <Link to="/admission" className="block px-4 py-2 hover:bg-gray-500 text-[#003334] font-serif hover:text-[#ED1C22]">Admission</Link>
                  <Link to="/student-portal" className="block px-4 py-2 hover:bg-gray-500 text-[#003334] font-serif hover:text-[#ED1C22]">Student Portal</Link>
                  <Link to="/courses" className="block px-4 py-2 hover:bg-gray-500 text-[#003334] font-serif hover:text-[#ED1C22]">Our Courses</Link>
                </div>
              </div>

              <Link to="/about" onClick={() => handleNavClick('/about')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">About</Link>

              {/* Profile Dropdown */}
              <div className="relative border px-4 py-1 rounded-lg">
                {isAuthenticated ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center text-xl text-[#003334] cursor-pointer font-serif hover:text-[#ED1C22]"
                  >
                    {user.fullName}
                    <ChevronDown size={20} className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center cursor-pointer text-xl text-[#003334] font-serif hover:text-[#ED1C22]"
                  >
                    Account
                    <ChevronDown size={20} className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                )}

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-[#EDEDED] border rounded-md shadow-md w-40 z-50">
                    {isAuthenticated ? (
                      <button
                        onClick={() => setLogoutModalOpen(true)}
                        className="block w-full text-left cursor-pointer px-4 py-2 hover:bg-green-800 font-serif hover:text-white"
                      >
                        Logout
                      </button>
                    ) : (
                      <>
                        <Link to="/login" className="block px-4 py-2 hover:bg-gray-500 text-[#003334] font-serif hover:text-[#ED1C22]">Login</Link>
                        <Link to="/register" className="block px-4 py-2 hover:bg-gray-500 text-[#003334] font-serif hover:text-[#ED1C22]">Register</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
  <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 md:hidden">
    <div className="p-4 flex items-center space-x-3">
      <img
        src={logo}
        alt="logo"
        onClick={() =>
          location.pathname === '/'
            ? window.scrollTo({ top: 0, behavior: 'smooth' })
            : (window.location.href = '/')
        }
        className="w-12 h-12 cursor-pointer"
      />
      <h1 className="text-[#000000] font-serif text-sm">TRIUMPHANT INSTITUTE OF PROFESSIONAL STUDIES</h1>
    </div>

    <div className="flex flex-col mt-10 space-y-6 px-10">
      <Link to="/" onClick={() => handleNavClick('/')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Home</Link>
      <Link to="/about" onClick={() => handleNavClick('/about')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">About</Link>
      <Link to="/create-account" onClick={() => handleNavClick('/create-account')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Create Account</Link>
      <Link to="/admission" onClick={() => handleNavClick('/admission')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Admission</Link>
      <Link to="/student-portal" onClick={() => handleNavClick('/student-portal')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Student Portal</Link>
      <Link to="/courses" onClick={() => handleNavClick('/courses')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Our Courses</Link>

      {isAuthenticated ? (
        <div className="relative">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center cursor-pointer w-full text-xl text-[#003334] font-serif hover:text-[#ED1C22]"
          >
            {user.fullName}
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`}
              fill="currentColor" viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {mobileDropdownOpen && (
            <div className="mt-2 bg-[#EDEDED] border rounded-md shadow-md">
              <button
                onClick={() => { setLogoutModalOpen(true); toggleMenu(); }}
                className=" w-full text-left px-4 py-2 cursor-pointer text-lg hover:bg-green-800 font-serif hover:text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link to="/login" onClick={() => handleNavClick('/login')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Login</Link>
          <Link to="/register" onClick={() => handleNavClick('/register')} className="text-xl text-[#003334] font-serif hover:text-[#ED1C22]">Register</Link>
        </>
      )}

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

      {/* Logout Modal */}
      {logoutModalOpen && <Logout onClose={() => setLogoutModalOpen(false)} onLogout={handleLogout} />}
    </Wrapper>
  );
};

export default Navbar;
