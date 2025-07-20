import React from 'react';
import Success from "../../assets/icons/Logo.png";

const Applied = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center rounded-md w-full max-w-xl bg-white p-8 shadow-lg">
        <img src={Success} className="w-30 h-30" alt="Success Icon" />
        <h1 className="text-2xl font-semibold mb-4 text-center">APPLICATION SUCCESSFULL</h1>
        <p className="mb-6 text-center">Congratulations You Just Applied.</p>
        <button
          className="bg-[#147C84] w-full text-white font-semibold py-3 rounded hover:bg-[#10656C] transition-colors"
          onClick={onClose} 
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Applied;
