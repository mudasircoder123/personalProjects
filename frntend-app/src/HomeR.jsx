import React, { useEffect, useState }from "react";
import Slider from "react-slick";
const HomeR = () => {
const [images, setImages] = useState([]);
// Settings for react-slick slider
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
// Fetch images from an API when the component mounts
// Fetch images from an API when the component mounts
useEffect(() => {
    // Example API URL, replace with your actual API
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.example.com/images'); // Replace with actual API
        const data = await response.json();
        setImages(data); // Assuming the API returns an array of image URLs or objects with image URLs
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []); // Empty dependency array to run once when the component mounts
return (
<>
<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-6">
    <span class="block">
        Use the 
        <span class="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
            power of social proof
        </span>
        to drive more sales
    </span>
</h1>
<div class="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
 class="fill-gray-600 mr-3 rotate-90">
<path
 d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
</path>
 </svg>
 <input type="email" placeholder="Search Something..." class="w-full outline-none bg-transparent text-gray-600 text-sm" />
 </div>
 <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={`Slide ${index + 1}`} /> {/* Modify based on your API response */}
        </div>
      ))}
    </Slider>
</>
)
}
export default HomeR;