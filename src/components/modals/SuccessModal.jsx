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
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="bg-white shadow-xl p-6 rounded-xl text-center w-80">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">{title}</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={handleClose}
          className="mt-2 px-4 py-2 rounded bg-[#ED1C22] text-white font-semibold hover:bg-[#c8141c] transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
