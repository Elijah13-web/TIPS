import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../api/auth';
import signup from "../../assets/images/signup.jpg";
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setLoading(true);
    try {
      const res = await register(
        `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        formData.email.trim(),
        formData.password.trim()
      );

      console.log("Register response:", res);

      if (res.success) {
        navigate('/login');
      } else {
        setErrors({ api: res.msg || 'Registration failed' });
      }
    } catch (err) {
      console.error('Register error:', err);
      setErrors({ api: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full min-h-screen font-serif bg-[#003334c8] relative mx-auto container'>
      <img src={signup} alt='Background' className='absolute inset-0 w-full h-full object-cover opacity-50 z-0' />
      <div className='relative z-10 flex items-center justify-center min-h-screen top-12'>
        <div className='w-full md:w-[90%] lg:w-[860px] grid grid-cols-1 md:grid-cols-[260px_1fr] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl'>
          <div className='bg-[#003334c8] text-white p-6 flex flex-col justify-center'>
            <h1 className='text-4xl font-bold mb-2'>Hello,</h1>
            <p className='text-3xl font-bold text-red-600'>Welcome</p>
          </div>
          <div className='bg-white flex flex-col justify-center md:p-8 px-2 py-4'>
            <h2 className='text-2xl font-bold mb-6 text-[#003334]'>Create Account</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
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
              </div>
              {errors.api && <p className='text-red-500 text-sm'>{errors.api}</p>}
              <button
                type="submit"
                disabled={loading}
                className='bg-[#ED1C22] cursor-pointer hover:bg-white border border-[#ED1C22] text-white hover:text-[#ED1C22] py-3 mt-6 px-6 rounded-lg font-semibold w-full md:w-[200px] mx-auto'
              >
                {loading ? 'Registering...' : 'Create Account'}
              </button>
            </form>
            <div className='flex justify-between items-center my-6 text-sm'>
              <p>Already have an account? <Link to="/login" className='text-red-600 underline'>Log In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
