"use client";

import React, { useEffect, useState } from "react";

const HeroSection4 = () => {
  const textArray = [
    "DJs",
    "Creators",
    "influencers",
    "small businesses",
    "athletes",
    "models",
    "brands",
    "streamers",
    "vloggers",
    "fitness coaches",
    "retailers",
  ];

  const images = [
    "/ana1.jpg",
    "/alex1.jpg",
    "/ana2.jpg",
    "/ana3.jpg",
    "/ell1.jpg",
    "/syd1.jpg",
    "/syd2.jpg",
    "/lily1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexImg, setCurrentIndexImg] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  //   For text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [textArray.length]);

  //   For image
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndexImg((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  return (
    <div>
      <h1 className="text-black font-bold text-center text-6xl tracking-tighter pt-20">
        The only link in bio trusted by 70M+
      </h1>
      <span className="text-blue-600 font-bold flex justify-center pt-5 text-5xl transition-all duration-500 ease-in-out">
        {textArray[currentIndexImg]}
      </span>
      {/* Infinte scroll */}
      <div className="mt-16 w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 p-4">
              <img
                src={image}
                alt={`Tech ${index + 1}`}
                className="w-88 h-96 object-cover rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
          {/* Duplicate set of images */}
          {images.map((image, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 p-4">
              <img
                src={image}
                alt={`Tech ${index + 1}`}
                className="w-88 h-96 object-cover rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            width: max-content;
            display: flex;
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroSection4;
