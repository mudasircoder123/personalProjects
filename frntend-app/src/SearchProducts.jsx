import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
const SearchProducts = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/api/products/search/${searchTerm}`);
        setResults(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchTerm]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <Navbar/>
      <h1>Your Choice</h1>
      {results.map((result) => (
        <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img class="h-48 w-full object-cover object-center" src={result.image} alt="Product Image" />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{result.name}</h2>
          <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{result.description}</p>
          <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{result.oldprice}</p>
            <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">{result.newprice}</p>
            <p class="ml-auto text-base font-medium text-green-500">20% off</p>
          </div>
        </div>
      </div>
      ))}
      <Footer/>
    </>
  );
};

export default SearchProducts;
