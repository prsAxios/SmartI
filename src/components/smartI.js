import React from "react";
import { FaArrowDown } from "react-icons/fa";

const SmartIPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center text-center text-white relative">
      <h1 className="text-6xl font-bold mb-8 z-10 mr-50">
        Smart i
      </h1>
      <h1 className="text-3xl font-bold mt-8 z-10">
        Contact Us <FaArrowDown className='ml-14 mt-10' size={40}/>
      </h1>

   
      <div className="absolute inset-0 z-0">
        <video
          src="Tower.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

  
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default SmartIPage;
