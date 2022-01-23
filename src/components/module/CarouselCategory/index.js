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

const CarouselCategory = () => {
  return (
    <Fragment>
      <Carousel itemsToShow={3}>
        <img src={tshirt} alt="socks" />
        <img src={short} alt="socks" />
        <img src={jacket} alt="socks" />
        <img src={pants} alt="socks" />
        <img src={socks} alt="socks" />
        <img src={tie} alt="socks" />
        <img src={heels} alt="socks" />
        <img src={accesories} alt="socks" />
      </Carousel>
    </Fragment>
  );
};

export default CarouselCategory;
