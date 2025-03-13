"use client";
import { useState, useEffect } from "react";

interface SlideData {
  src: string;
  alt: string;
}

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto overflow-hidden">
      <ul
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <li key={index} className="min-w-full">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={handlePreviousClick}
      >
        ❮
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={handleNextClick}
      >
        ❯
      </button>
    </div>
  );
}
