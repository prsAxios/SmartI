import React from "react";
import { FaUsers, FaFileAlt, FaSitemap, FaHeadset } from "react-icons/fa";

const LastDiv = () => {
  const actions = [
    {
      icon: <FaUsers size={40} />,
      title: "Schedule A Demo",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Request A Quote",
    },
    {
      icon: <FaSitemap size={40} />,
      title: "Be Our Distributor",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "Raise A Ticket",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 to-red-500 flex justify-center items-center flex-col">
     
      <div className="flex flex-wrap justify-center gap-6 p-8 sm:p-12 md:p-32">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-transparent border shadow-2xl border-white rounded-sm p-4 text-white w-full sm:w-80 hover:bg-white hover:text-red-600 transition duration-300 ease-in-out"
          >
            <div className="mb-3">{action.icon}</div>
            <p className="text-lg font-medium text-center">{action.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-white relative w-full h-[50vh] flex justify-center items-center sm:justify-end mt-8 sm:mt-20">
        <div className="sm:mr-[150px]">
        
          <img
            src="sisLogo.png"
            alt="Logo"
            className="max-w-[150px] sm:max-w-[200px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LastDiv;
