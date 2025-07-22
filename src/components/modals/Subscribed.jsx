import React from 'react';

const Subscribed = ({ onClose }) => (
  <div className="bg-white shadow-xl p-6 rounded-xl text-center">
    <h2 className="text-2xl font-semibold mb-2 text-green-700">Thank you!</h2>
    <p className="mb-4">You've successfully subscribed to our newsletter.</p>
    <button
      onClick={onClose}
      className="mt-2 px-4 py-2 rounded bg-[#ED1C22] text-white font-semibold hover:bg-[#c8141c]"
    >
      Close
    </button>
  </div>
);

export default Subscribed;
