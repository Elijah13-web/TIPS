import React, { useEffect, useState } from 'react';

const LoginSuccessModal = ({ onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // fade in
    const timer = setTimeout(() => handleClose(), 2000); // auto-close after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // wait for fade-out before removing
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center z-10">
        <div className="flex justify-center mb-2">
          {/* ✅ Checkmark icon */}
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2 text-green-700">Login Successful!</h2>
        <p className="mb-4 text-gray-600">Welcome back 👋</p>
        <button
          onClick={handleClose}
          className="bg-[#ED1C22] text-white px-4 py-2 rounded-lg hover:bg-[#c8141c] transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessModal;
