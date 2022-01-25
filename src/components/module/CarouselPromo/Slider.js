import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import imageSlider from "./imageSlider";
import Arrow from "./Arrow";
import Dots from "./Dots";
import "./slider.css";

const len = imageSlider.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
