import React, { useState, useEffect } from "react";
import './products.css';
import Navv from "./Navbar";
import axios from "axios";
import Footer from "./Footer";
 



function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4500/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError("Failed to retrieve products. Please try again later.");
      });
  }, []);

  
      

      

  return (
    <>
      <Navv />
      <h1 className="text-3xl font-bold underline text-center py-4">
        Products
      </h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product._id} className="group relative bg-gray-300 p-4 rounded-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.title}
                    src={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={`/products/${product._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Rating: {product.rating?.rate || "No rating"} ({product.rating?.count || "No reviews"})
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button 
                    type="button" 
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                    
                  >
                    Buy
                  </button>

                  <button 
                    type="button" 
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
      <Footer />
    </>
  );
}

export default Products;
