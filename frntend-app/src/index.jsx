import React from "react";
import myImg from './assets/fd.jpg';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const Click = (e) => {
    e.preventDefault();
    navigate('/Home'); // Replace "/your-route" with your desired path
  };

  return (
    <>
      <div>
        <img 
          src={myImg} 
          className="w-104 h-auto mx-auto my-auto rounded-lg transition-all duration-300" 
          alt="Description of image"
        />
        <h2 className="text-4xl font-extrabold dark:text-white">
          Payments tool for companies
        </h2>
        <p className="my-4 text-lg text-gray-500">
          Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.
        </p>
        <button onClick={Click}className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-25 mx-auto">
          Start Cooking
        </button>
      </div>
    </>
  );
};

export default Index;
