import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signup from "../../assets/images/signup.jpg";
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Show modal
      setShowModal(true);
      // Redirect after delay
      setTimeout(() => {
        setShowModal(false);
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className='w-full min-h-screen font-serif bg-[#003334c8] relative'>
      <img src={signup} alt='Background' className='absolute inset-0 w-full h-full object-cover opacity-50 z-0' />

      <div className='relative z-10 flex items-center justify-center min-h-screen top-12'>

        <div className='w-full md:w-[90%] lg:w-[860px] grid grid-cols-1 md:grid-cols-[260px_1fr] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl'>

          <div className='bg-[#003334c8] text-white p-6 flex flex-col justify-center'>
            <h1 className='text-4xl font-bold mb-2'>Hello,</h1>
            <p className='text-3xl font-bold text-red-600'>Triumphant</p>
          </div>

          <div className='bg-white flex flex-col justify-center md:p-6 p-4'>
            <h2 className='text-2xl font-bold mb-6 text-[#003334]'>Log In</h2>

            <form onSubmit={handleSubmit} className='space-y-4 pb-6'>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg pr-12 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                <div
                  onClick={togglePassword}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
                {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
              </div>

            </form>
                   <button
  onClick={handleSubmit}
  type="button"
  className='bg-[#ED1C22] cursor-pointer hover:bg-white border border-[#ED1C22] text-white hover:text-[#ED1C22] py-3 mt-6 px-6 rounded-lg font-semibold w-full md:w-[200px] mx-auto'
>
  Log In
</button>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white  bg-opacity-10 z-10 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[300px]">
            <h3 className="text-lg font-bold text-[#ED1C22]">Login Successful</h3>
              <p className="text-gray-700 mt-2">Redirecting to homepage...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
