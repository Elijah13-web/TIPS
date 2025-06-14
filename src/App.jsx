import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CreateAccount from './components/Apply/CreateAccount';
import Admission from './components/Apply/Addmission'; 
import StudentPortal from './components/Apply/StudentPortal';
import Courses from './components/Apply/Courses';
import Footer from "./components/Reuseable/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
