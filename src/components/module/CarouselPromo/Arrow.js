import React from "react";
import * as IoIcons from "react-icons/io";

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrows">
      <div className="prev" onClick={prevSlide}>
        <IoIcons.IoIosArrowBack />
      </div>
      <div className="next" onClick={nextSlide}>
        <IoIcons.IoIosArrowForward />
      </div>
    </div>
  );
};

export default Arrow;
