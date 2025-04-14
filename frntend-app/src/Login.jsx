import React, { useState } from 'react';
import Navv from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/login', { email, password });
      
      // If response has a token, store it in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        navigate('/home');  // Navigate to the home page after successful login
      } else {
        alert('No token received');
      }

    } catch (err) {
      console.error('Error:', err);
      alert('Error during login');
    }
  };

  return (
    <>
      <Navv />
      <body className="bg-gray-100 mt-5">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Login Form</h1>
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
              onClick={submit}
            >
              Login
            </button>
          </form>
        </div>
      </body>
      <Footer />
    </>
  );
};

export default LoginForm;
