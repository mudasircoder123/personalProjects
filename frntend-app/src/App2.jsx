import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Main from './Main';
import Products from './Products';
import ProductById from './ProductById';
import Cart from './Cart';
import SearchProducts from './SearchProducts';

// Initialize Stripe
const key = "pk_test_51PvxtOEouuRn1o70nzGkxIGTL2kJgmOkY97fqhsLlLlYiVkS7ZrZUlDmXgEDa7Uj8ZXnBtFPxPIOVfvBlUGKBPmF0041TGGBXD";
const stripePromise = loadStripe(key);

const App = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductById />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search/:searchTerm" element={<SearchProducts />} />
        </Routes>
      </Elements>
    </BrowserRouter>
  );
}

export default App;
