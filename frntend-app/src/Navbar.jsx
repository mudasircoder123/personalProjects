import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
 

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected the case
    navigate(`/search/${input}`); // Ensure that the input is correctly passed for navigation
  };

  return (
    <div className="flex flex-wrap place-items-center h-10">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            {/* Logo */}
            <a className="text-3xl font-bold font-heading" href="#">
              <img className="h-9" src="logo.png" alt="logo" />
            </a>

            {/* Navigation Menu */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <a className="bg-sky-500 hover:bg-sky-700 py-3 px-3" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="bg-sky-500 hover:bg-sky-700 py-3 px-3" href="#">
                  Category
                </a>
              </li>
              <li>
                <a className="bg-sky-500 hover:bg-sky-700 py-3 px-3" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="bg-sky-500 hover:bg-sky-700 py-3 px-3" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="hidden xl:flex items-center w-full max-w-xs">
              <form className="w-full" onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="px-4 py-2 w-full text-gray-900 rounded-lg bg-white dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:shadow-outline mx-0.5"
                  placeholder="Search..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </form>
            </div>

            {/* Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              <a className="hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
              
              {/* Cart Icon with Item Count */}
              <a className="flex items-center hover:text-gray-200 relative" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              
              </a>

              <a className="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Icons */}
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </section>

      {/* Floating Twitter Button */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on Twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            {/* Add Twitter icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 m-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22.46 6.003c-.83.369-1.725.615-2.662.727a4.508 4.508 0 001.98-2.485 8.99 8.99 0 01-2.853 1.093A4.498 4.498 0 0016.07 4c-2.482 0-4.5 2.017-4.5 4.5 0 .353.038.698.113 1.03a12.778 12.778 0 01-9.29-4.71 4.5 4.5 0 001.391 6.007 4.465 4.465 0 01-2.04-.563v.057c0 2.25 1.601 4.126 3.72 4.55a4.51 4.51 0 01-2.037.077c.574 1.793 2.24 3.1 4.211 3.137a9.025 9.025 0 01-5.596 1.93c-.364 0-.722-.021-1.078-.063a12.751 12.751 0 006.897 2.022c8.276 0 12.8-6.857 12.8-12.8 0-.194-.005-.389-.013-.583a9.176 9.176 0 002.258-2.341z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 




