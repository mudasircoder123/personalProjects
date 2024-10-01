import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom'; 
import './index.css';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // Fetch products from the API
    useEffect(() => {
        axios.get('http://localhost:4000/api/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />

                <div className="flex-grow">
                    <div className="h-full w-full flex flex-wrap justify-center bg-gray-200 dark:bg-gray-800 gap-8 p-4">
                        {products.map((product) => (
                            <Link to={`/product/${product._id}`} key={product._id}>
                                <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
                                    <div>
                                        <img
                                            className="object-cover h-64 w-full"
                                            src={product.image}
                                            alt={product.title}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1 mt-4 px-4">
                                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                                            {product.title}
                                        </h2>
                                        <span className="font-normal text-gray-600 dark:text-gray-300">
                                            {product.description}
                                        </span>
                                        <span className="font-semibold text-gray-800 dark:text-gray-50">
                                            ${product.price}
                                        </span>
                                        {product.oldPrice && (
                                            <span className="text-gray-500 line-through dark:text-gray-400">
                                                ${product.oldPrice}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex gap-4 mt-4 px-4">
                                        {/* Color buttons can be styled accordingly */}
                                        <button
                                            aria-label="Yellow"
                                            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
                                        ></button>
                                        <button
                                            aria-label="Red"
                                            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
                                        ></button>
                                        <button
                                            aria-label="Blue"
                                            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
                                        ></button>
                                        <button
                                            aria-label="Black"
                                            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
                                        ></button>
                                    </div>

                                    <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                                        <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                                            <span className="text-base">Add to Cart</span>
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Main;





