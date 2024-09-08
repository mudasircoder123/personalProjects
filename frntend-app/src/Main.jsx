import React from "react";
import Navv from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Ensure arrows are enabled
      };
    
    useEffect(() => {
      axios.get("http://localhost:4500/products")  // Adjust the URL to match your backend
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to retrieve products");
          setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;
  
return(
<>
<Navv/>
<div>
<div className='bg-image hover-zoom'>
<img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
 </div>
</div>
</>
);
}

export default Main;