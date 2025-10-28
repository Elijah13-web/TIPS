import React, { useEffect, useState } from 'react';

const SuccessModal = ({ onClose, title = "Success!", message = "Your action was successful." }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // trigger fade in

    // Auto-close after 3 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ''; // restore scroll
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    // Wait for fade-out before actually closing
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="bg-white shadow-xl p-6 rounded-xl text-center w-80 transform transition-transform duration-300"
        style={{ transform: show ? 'scale(1)' : 'scale(0.95)' }}
      >
        {/* ✅ Success checkmark icon */}
        <div className="flex justify-center mb-3">
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
        <h2 className="text-2xl font-semibold mb-2 text-green-700">{title}</h2>
        <p className="mb-4">{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
