import {createSlice} from '@reduxjs/toolkit';

const initialState = {
cartItems : [],
  cartQuantity : 0,
  cartAmount : 0
}

const cartSlice = createSlice({
name:"name",
initialState,
reducers:{
addToCart(state,action){
state.cartItems.push(action.payload)
},
}
});

export const{addToCart} = cartSlice.actions;
