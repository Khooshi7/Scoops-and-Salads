import React from "react"
import "./Body.css"
import { useState, useEffect } from 'react';

function Body()
{
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
   "./slide1.jpeg",
   "./slide2.jpeg",
   "./slide3.jpeg"

    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };



    return(
      <div className="container">
        <div className="about-section">
        {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}

        </div>
        <div className="content">
          <h4>
           Discover culinary delights: where taste meets creativity <br></br>
           <i class="fas fa-utensils"></i>
          </h4>
        </div>
      
    </div>
  );
}
export default Body 