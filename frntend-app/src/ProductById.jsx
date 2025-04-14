import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

const ProductById = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          <p className="mt-4 text-xl font-medium text-white">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="rounded-lg bg-red-900 p-8 text-center shadow-lg">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-red-700 text-2xl font-bold text-white flex items-center justify-center">!</div>
          <h2 className="text-2xl font-bold text-white">Error Loading Product</h2>
          <p className="mt-2 text-red-200">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      
      <main className="container mx-auto py-16 px-4">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-gray-800 shadow-xl">
          {/* Product Card */}
          <div className="md:flex">
            {/* Product Image Section */}
            <div className="md:w-1/2">
              <div className="relative h-80 w-full overflow-hidden md:h-96">
                <div className="absolute top-4 left-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                  39% OFF
                </div>
                <img 
                  className="h-full w-full object-cover transition-all duration-500 hover:scale-110" 
                  src={product.image} 
                  alt={product.title}
                />
              </div>
            </div>
            
            {/* Product Details Section */}
            <div className="p-6 md:w-1/2 md:p-8">
              <h1 className="text-2xl font-bold text-white md:text-3xl">{product.title}</h1>
              
              <div className="mt-4 flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-blue-500">{product.price}</span>
                <span className="text-lg text-gray-400 line-through">$699</span>
              </div>
              
              <div className="mt-6">
                <div className="mb-2 flex items-center">
                  <div className="flex space-x-1">
                    <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                    <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                    <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                    <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                    <div className="h-4 w-4 rounded-full bg-gray-600"></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-300">4.0 (24 reviews)</span>
                </div>
                
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-300">In Stock</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Add to Cart
                </button>
                
                <button className="w-full rounded-lg border border-gray-600 bg-transparent px-6 py-3 font-medium text-gray-300 transition-colors hover:border-blue-400 hover:text-blue-400">
                  order
                </button>
              </div>
              
              <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="mb-2 text-lg font-medium text-white">Quick Overview</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2 block h-1 w-1 rounded-full bg-blue-500"></span>
                    Premium quality product
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 block h-1 w-1 rounded-full bg-blue-500"></span>
                    1 year warranty
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 block h-1 w-1 rounded-full bg-blue-500"></span>
                    Fast shipping available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductById;

