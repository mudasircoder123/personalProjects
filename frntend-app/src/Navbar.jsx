import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
    setIsSidebarOpen(false); // Close sidebar after search
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/logout', {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      localStorage.removeItem('token');
      navigate('/login');
      console.log(response.data);
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred during logout. Please try again.');
    }
    setIsSidebarOpen(false); // Close sidebar after logout
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="bg-gray-900 text-white w-full">
        <div className="px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a className="text-2xl md:text-3xl font-bold font-heading" href="#">
            <img className="h-8 md:h-9" src="logo.png" alt="logo" />
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-grow ml-8">
            <ul className="flex space-x-4 font-semibold font-heading">
              <li>
                <Link className="bg-sky-500 hover:bg-sky-700 py-2 px-3 rounded" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="bg-sky-500 hover:bg-sky-700 py-2 px-3 rounded" to="/orders">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="bg-sky-500 hover:bg-sky-700 py-2 px-3 rounded" to="/home">
                  products
                </Link>
              </li>
              <li>
                <Link className="bg-sky-500 hover:bg-sky-700 py-2 px-3 rounded" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Desktop Search Bar */}
            <form onSubmit={handleSubmit} className="flex mx-4 flex-grow max-w-md">
              <input
                className="w-full px-3 py-2 rounded-l border text-gray-700 focus:outline-none"
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-700 text-white px-4 rounded-r"
              >
                Search
              </button>
            </form>

            {/* Desktop Right Menu */}
            <div className="flex items-center space-x-4">
              <Link className="bg-sky-500 hover:bg-sky-700 py-2 px-3 rounded" to="/login">
                Login
              </Link>
              <button 
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
              >
                Logout
              </button>
              <Link to="/cart" className="relative">
                <span className="text-xl">🛒</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs px-2 py-0.5">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-50 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
        
        {/* Sidebar */}
        <div className="fixed top-0 right-0 h-full bg-gray-800 w-64 shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button 
              className="text-white" 
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          {/* Mobile Search */}
          <div className="p-4 border-b border-gray-700">
            <form onSubmit={handleSubmit} className="flex">
              <input
                className="w-full px-3 py-2 rounded-l border text-gray-700 focus:outline-none"
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-700 text-white px-2 rounded-r"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </form>
          </div>
          
          {/* Mobile Navigation */}
          <ul className="py-4">
            <li>
              <Link 
                className="block px-4 py-3 text-white hover:bg-gray-700" 
                to="/"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 text-white hover:bg-gray-700" 
                to="/orders"
                onClick={toggleSidebar}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 text-white hover:bg-gray-700" 
                to="/home"
                onClick={toggleSidebar}
              >
                products
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 text-white hover:bg-gray-700" 
                to="/contact"
                onClick={toggleSidebar}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 text-white hover:bg-gray-700" 
                to="/login"
                onClick={toggleSidebar}
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                className="block px-4 py-3 text-white hover:bg-gray-700" 
                to="/cart"
                onClick={toggleSidebar}
              >
                Cart ({cartCount})
              </Link>
            </li>
            <li>
              <button 
                className="block w-full text-left px-4 py-3 text-white hover:bg-gray-700" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
