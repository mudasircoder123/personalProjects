import React from "react";
import { useSelector } from 'react-redux'; // Import useSelector
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
const Cart = () => {
  // Select the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  return (
  <>
  <Navbar/>
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <div className="bg-white shadow-md rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:w-3/5 md:w-96">
        {cartItems.length === 0 ? (
          <h2 className="text-lg font-normal text-gray-600">Your cart is empty.</h2>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="mx-3 flex flex-col justify-around items-center overflow-hidden sm:h-52">
              <img
                className="h-32 w-full object-cover"
                src={item.image}
                alt={item.title}
              />

              <div className="flex-1 w-full flex flex-col items-baseline justify-around h-full pl-6">
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                    {item.title}
                  </h1>
                  <span className="text-xs text-indigo-300 mt-0">by supplier</span>
                </div>
                <p className="text-xs text-gray-500 w-4/5">{item.description}</p>
                <div className="w-full flex justify-between items-center">
                  <h1 className="font-bold text-gray-500">${item.price.toFixed(2)}</h1>
                  <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Cart;
