import React from 'react';

const LoginSuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center">
        <h2 className="text-xl font-bold mb-4 text-green-600">Login Successful!</h2>
        <p className="mb-4 text-gray-700">Welcome back 👋</p>
        <button
          onClick={onClose}
          className="bg-[#ED1C22] text-white px-4 py-2 rounded-lg hover:bg-[#c8141c] cursor-pointer transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessModal;
