import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CreateAccount from './components/Apply/CreateAccount';
import Admission from './components/Apply/Addmission'; 
import StudentPortal from './components/Apply/StudentPortal';
import Courses from './components/Apply/Courses';
import Footer from './components/Reuseable/Footer';
import ScrollToTop from './components/Reuseable/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
