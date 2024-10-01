import React from "react";
import { useSelector } from 'react-redux'; // Import useSelector


const Cart = () => {
// Select the cart items from the Redux store
const cartItems = useSelector((state) => state.cart.items);

return (
<>

<div class="flex justify-center items-center h-screen bg-gray-100 w-full">
      <div
        class="
          bg-white
          shadow-md
          h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-96
        "
      >
        <img
          class="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
          src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
          alt="image"
        />

        <div
          class="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
        >
          <div class="flex flex-col justify-start items-baseline">
            <h1 class="text-lg font-normal mb-0 text-gray-600 font-sans">
             {cartItems.name}
            </h1>
            <span class="text-xs text-indigo-300 mt-0">by supplier</span>
          </div>
          <p class="text-xs text-gray-500 w-4/5">
            {cartItems.description}
          </p>
          <div class="w-full flex justify-between items-center">
            <h1 class="font-bold text-gray-500">{cartItems.price}</h1>
            <button
              class="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
</>
);
}
export default Cart;