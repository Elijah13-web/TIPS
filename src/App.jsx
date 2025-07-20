import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './components/Apply/Addmission';
import StudentPortal from './components/Apply/StudentPortal';
import Courses from './components/Apply/Courses';
import Footer from './components/Reuseable/Footer';
import ScrollToTop from './components/Reuseable/ScrollToTop';
import Login from './components/Auth/Login';
import { AuthProvider } from './components/Auth/AuthContext';
import { ApplicationModalProvider, ApplicationModalContext } from './components/Auth/ApplicationModalContext';
import Application from './components/modals/Application';
import Register from './components/Auth/Register';


function AppContent() {
  const { showModal, setShowModal } = useContext(ApplicationModalContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/application" element={<Application />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* Global Application Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className=" rounded-xl lg:w-[800px] max-h-screen  relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-black text-lg  font-bold cursor-pointer rounded-full border w-8"
            >
              &times;
            </button>
            <Application />
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ApplicationModalProvider>
        <AppContent />
      </ApplicationModalProvider>
    </AuthProvider>
  );
}
