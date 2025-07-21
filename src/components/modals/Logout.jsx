import React from 'react';
import Success from "../../assets/icons/logout.png";

const Logout = ({ onClose, onLogout }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50  bg-opacity-30">
      <div className="flex flex-col items-center rounded-lg w-[90%] max-w-md bg-white p-6 shadow-xl">
        
        <img
          src={Success}
          className="w-20 h-20 mb-4"
          alt="Logo"
        />
        <h1 className="text-2xl font-semibold mb-2 text-center">Log Out</h1>
        <p className="mb-6 text-center text-gray-600">
          Are you sure you want to logout your account?
        </p>

        {/* Buttons */}
        <div className="flex gap-4 w-full">
          <button
            onClick={onClose}
            className="text-black font-semibold cursor-pointer py-3 rounded-lg border w-full hover:bg-[#065757] hover:text-white"
          >
            No
          </button>
          <button
            onClick={onLogout}
            className=" text-black font-semibold cursor-pointer py-3 rounded-lg border w-full hover:bg-[#065757] hover:text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
