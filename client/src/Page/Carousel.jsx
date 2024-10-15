import React, { useState, useEffect } from "react";

const images = [
  "/Carosuel2.avif",
  "/Carosuel3.avif",
  "/Carosuel4.avif",
  "/Carosuel5.avif",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out gap-1"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mt-1 px-1 py-5 rounded-lg"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Left and Right Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full"
        onClick={goToPrevSlide}>
        &lt;
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full"
        onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
}
