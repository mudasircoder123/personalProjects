import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navv from "./Navbar";
import axios from "axios";

const SearchProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const { searchTerm } = useParams();
  console.log(searchTerm);

  useEffect(() => {
    // Encode the search term to handle special characters
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    axios.get(`http://localhost:4500/search/${encodedSearchTerm}`)
      .then((response) => {
        setData(response.data); // Set the actual data from the response
      })
      .catch((error) => {
        setError("Failed to retrieve products");
        console.error(error); // Log error details for debugging
      });
  }, [searchTerm]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Navv />
    {data.map(product => (
      <div className="w-full max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className=''
            src={product.image}
            alt="product image"
            style={{ height: '230px' }}
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* Star rating - consider if these SVGs should be dynamically generated */}
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              {/* Repeat the SVGs for rating */}
              {/* Optionally, you can use a loop to generate stars */}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.description}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: ${product.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy</button>
      </div>
     ))}
    </>
  );
}

export default SearchProducts;
