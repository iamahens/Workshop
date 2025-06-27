import React from "react";

const imageUrls = [
  "https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/2.png",
  "https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/Untitled-design-24.jpg",
  "https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/3.png",
  "https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/1-1.jpg",
  "https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/2-1.jpg",
  "https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/2-2.jpg",
  
];

export default function GallerySection() {
  return (
    <div className="relative min-h-screen px-4 sm:px-6 py-12 sm:py-16 overflow-hidden ">
      {/* Hue bubbles in background */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#00ffff,_#ff00cc,_#3333ff)] blur-[120px] opacity-20 z-0"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#ff00cc,_#3333ff,_#00ffff)] blur-[120px] opacity-20 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-white text-5xl font-bold mb-8 text-center">Our Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 ${
                index % 5 === 0 ? "col-span-2" : ""
              }`}
            >
              <img
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              {/* Hue overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-25 transition-opacity duration-500 z-10 mix-blend-screen pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
