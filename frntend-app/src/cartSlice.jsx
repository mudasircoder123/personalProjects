
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(item => item._id === product._id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if the product is already in the cart
      } else {
        state.items.push({ ...product, quantity: 1 }); // Add new product with quantity
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

