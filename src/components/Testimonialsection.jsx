import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonialsection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your first image URL here
      alt: "Client testimonial 1"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your second image URL here
      alt: "Client testimonial 2"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your third image URL here
      alt: "Client testimonial 3"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your fourth image URL here
      alt: "Client testimonial 4"
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your fifth image URL here
      alt: "Client testimonial 5"
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your sixth image URL here
      alt: "Client testimonial 6"
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your seventh image URL here
      alt: "Client testimonial 7"
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dtgprnnga/image/upload/v1736087614/Client/jyp7pzl0grshk8u2podw.jpg", // Add your eighth image URL here
      alt: "Client testimonial 8"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-3">
              <div className="bg-gray-100 rounded-lg p-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonialsection;