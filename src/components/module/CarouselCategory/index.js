import React, { Fragment } from "react";
import Carousel from "react-elastic-carousel";
import "./carouselCategory.css";
import tshirt from "../../../assets/img/carouselCategory/tshirt.png";
import short from "../../../assets/img/carouselCategory/short.png";
import jacket from "../../../assets/img/carouselCategory/jacket.png";
import pants from "../../../assets/img/carouselCategory/pants.png";
import socks from "../../../assets/img/carouselCategory/socks.png";
import heels from "../../../assets/img/carouselCategory/high-heels.png";
import tie from "../../../assets/img/carouselCategory/tie.png";
import accesories from "../../../assets/img/carouselCategory/accesorries.png";
import { useNavigate } from "react-router-dom";

const CarouselCategory = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Carousel itemsToShow={3}>
        <img
          onClick={() => navigate("/main/category/T-shirt")}
          className="img-category"
          src={tshirt}
          alt="T-shirt"
        />
        <img
          onClick={() => navigate("/main/category/Short")}
          className="img-category"
          src={short}
          alt="Short"
        />
        <img
          onClick={() => navigate("/main/category/Jacket")}
          className="img-category"
          src={jacket}
          alt="Jacket"
        />
        <img
          onClick={() => navigate("/main/category/Pants")}
          className="img-category"
          src={pants}
          alt="Pants"
        />
        <img className="img-category" src={socks} alt="socks" />
        <img className="img-category" src={tie} alt="Tie" />
        <img className="img-category" src={heels} alt="Heels" />
        <img className="img-category" src={accesories} alt="Accesories" />
      </Carousel>
    </Fragment>
  );
};

export default CarouselCategory;
