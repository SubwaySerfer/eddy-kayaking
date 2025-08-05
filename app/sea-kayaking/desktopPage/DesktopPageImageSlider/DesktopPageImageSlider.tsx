"use client";
import React, { useRef } from "react";
import "./DesktopPageImageSlider.scss";

interface ImageSliderProps {
  images: string[];
}

const DesktopPageImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth; // видимая ширина контейнера
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="desktoppageseaimageSlider">
      <button
        className="desktoppageseaimageSlider__arrow left"
        onClick={() => scroll("left")}
      >
        ❮
      </button>
      <button
        className="desktoppageseaimageSlider__arrow right"
        onClick={() => scroll("right")}
      >
        ❯
      </button>

      <div className="desktoppageseaimageSlider__container" ref={sliderRef}>
        {images.map((src, index) => (
          <div key={index} className="desktoppageseaimageSlider__imageWrapper">
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopPageImageSlider;
