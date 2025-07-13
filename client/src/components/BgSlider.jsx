import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value)); // Make sure it's a number
  };

  return (
    <div className="px-4 py-8">
      {/* Title */}
      <h1 className="text-center mb-12 sm:mb-20 text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background With High
        <br /> Quality and Accuracy
      </h1>

      {/* Image comparison slider */}
      <div className="relative w-full max-w-3xl mx-auto mt-8 rounded-xl overflow-hidden">
        {/* Background image (with background) */}
        <img
          src={assets.image_w_bg}
          alt="With Background"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Foreground image (without background) */}
        <img
          src={assets.image_wo_bg}
          alt="Without Background"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        {/* Transparent overlay to make sure slider is clickable */}
        <div className="relative z-20 w-full">
          <input
            type="range"
            min={0}
            max={100}
            value={sliderPosition}
            onChange={handleSliderChange}
            className="w-full h-0 mt-[300px] bg-gray-300 rounded-sm accent-blue-400 slider"
           
          />
        </div>
      </div>
    </div>
  );
};

export default BgSlider;
