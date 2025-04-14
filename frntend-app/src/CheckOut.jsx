// Checkout.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';
const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;  // Get the product details from state

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !address || !phone) {
      setError('Please fill out all the fields.');
      return;
    }

    const order = {
      productId: product._id,
      productTitle: product.title,
      productPrice: product.price,
      user: { name, email, address, phone },
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/api/orders', order);
      console.log('Order placed successfully', response.data);
      setLoading(false);
      // Redirect or show success message
    } catch (err) {
      setError('Failed to place order.');
      setLoading(false);
    }
  };

  return (
  <>
  <Navbar/>
    <div  className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      {/* Show product details */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{product?.title}</h2>
        <img src={product?.image} alt={product?.title} className="w-full h-64 object-cover" />
        <p className="mt-2">{product?.description}</p>
        <p className="mt-2 font-bold">${product?.price}</p>
      </div>

      {/* Shipping info form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-2">
          <label className="block">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-2">
          <label className="block">Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <div className="mb-2">
          <label className="block">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
