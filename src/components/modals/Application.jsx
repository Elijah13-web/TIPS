import React, { useState } from 'react';
import Wrapper from '../Reuseable/Wrapper';
import SuccessModal from '../modals/SuccessModal';
import axios from 'axios';


const Application = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // ✅

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = {};

  if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
  if (!formData.email.trim()) newErrors.email = 'Email is required';
  if (!formData.file) newErrors.file = 'Please upload a file';

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      // optional: upload file to backend or cloud first
      // Here we'll just send phone & email
      const res = await axios.post('https://tips-backend.onrender.com/api/apply', {
        phone: formData.phone,
        email: formData.email
      });

      if (res.data && res.data.success) {
        setSuccess(true);
        setFormData({ phone: '', email: '', file: null });
      } else {
        alert(res.data?.message || 'Submission failed.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('An error occurred. Please try again.');
    }
  }
};

  return (
    <div className='bg-[#ededed] p-5 rounded-xl font-serif'>
      <Wrapper>
        <h2 className='text-2xl font-bold mb-14 text-center'>APPLICATION FORM</h2>
        <form className='space-y-10' onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Enter A Valid Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter A Valid Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="file"
              placeholder="Upload WAEC, NECO, GCE Results (If Applicable To Chosen Course)"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hiddenFileInput').click();
              }}
              readOnly
              className={`w-full p-2 text-sm border rounded-lg cursor-pointer ${errors.file ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.file ? formData.file.name : ''}
            ></textarea>
            <input
              id="hiddenFileInput"
              type="file"
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleChange}
              name="file"
              style={{ display: 'none' }}
            />
            {errors.file && <p className='text-red-500 text-sm mt-1'>{errors.file}</p>}
          </div>

          <h1 className='text-sm'>
            NB: WAEC, NECO, GCE Results are only applicable to professional course applications
          </h1>

          <div className='flex justify-center'>
            <button
              type="submit"
              className='bg-[#ED1C22] cursor-pointer text-white px-4 py-2 rounded-lg'
            >
              Send Application
            </button>
          </div>
        </form>
      </Wrapper>

      {success && (
        <SuccessModal
          onClose={() => setSuccess(false)}
          title="Application Sent!"
          message="Your application has been submitted successfully."
        />
      )}
    </div>
  );
};

export default Application;
