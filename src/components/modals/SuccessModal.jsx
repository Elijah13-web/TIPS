import React from 'react';

const SuccessModal = ({ onClose, title = "Success!", message = "Your action was successful." }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white shadow-xl p-6 rounded-xl text-center w-80">
      <h2 className="text-2xl font-semibold mb-2 text-green-700">{title}</h2>
      <p className="mb-4">{message}</p>
      <button
        onClick={onClose}
        className="mt-2 px-4 py-2 rounded bg-[#ED1C22] text-white font-semibold hover:bg-[#c8141c]"
      >
        Close
      </button>
    </div>
  </div>
);

export default SuccessModal;
