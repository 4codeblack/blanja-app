import React, { Fragment } from "react";
import * as AiIcons from "react-icons/ai";
import Slider from "../../../components/module/CarouselPromo/Slider";
import suit from "../../../assets/img/suit.png";
import "./home.css";
import Carousel from "react-elastic-carousel";
import socks from "../../../assets/img/carouselCategory/socks.png";
import heels from "../../../assets/img/carouselCategory/high-heels.png";
import tie from "../../../assets/img/carouselCategory/tie.png";

const Home = () => {
  return (
    <Fragment>
      <section className="slider d-flex flex-column">
        <Slider />

        <div className="carousel-products d-flex flex-row">
          <div className="category">
            <h1 className="category-title">Category</h1>
            <p className="category-text mt-3">
              What are you currently looking for?
            </p>
          </div>

          <div className="slider-category d-flex justify-content-center align-items-center">
            <Carousel itemsToShow={3}>
              <img src={socks} alt="socks" />
              <img src={tie} alt="socks" />
              <img src={heels} alt="socks" />
              <img src={socks} alt="socks" />
              <img src={socks} alt="socks" />
              <img src={socks} alt="socks" />
              <img src={socks} alt="socks" />
              <img src={socks} alt="socks" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="display-products d-flex flex-column ">
        <div className="new-products">
          <div className="new">
            <h1 className="new-title">New</h1>
            <p className="new-text mt-3">You've never seen it before!</p>
          </div>

          <section className="card-wrapper">
            {/* cards component */}
            <div class="card ">
              <img src={suit} class="card-img-top" alt="product" />
              <div class="card-body">
                <h5 class="card-title product-name">
                  Men's formal suit - Black & White
                </h5>
                <p class="card-text product-price">$ 40.0</p>
                <p class="card-text store-name">Zalora Cloth</p>
                <AiIcons.AiFillStar className="star-icons" />
              </div>
            </div>
            <div class="card ">
              <img src={suit} class="card-img-top" alt="product" />
              <div class="card-body">
                <h5 class="card-title product-name">
                  Men's formal suit - Black & White
                </h5>
                <p class="card-text product-price">$ 40.0</p>
                <p class="card-text store-name">Zalora Cloth</p>
                <AiIcons.AiFillStar className="star-icons" />
              </div>
            </div>
            <div class="card ">
              <img src={suit} class="card-img-top" alt="product" />
              <div class="card-body">
                <h5 class="card-title product-name">
                  Men's formal suit - Black & White
                </h5>
                <p class="card-text product-price">$ 40.0</p>
                <p class="card-text store-name">Zalora Cloth</p>
                <AiIcons.AiFillStar className="star-icons" />
              </div>
            </div>
            <div class="card ">
              <img src={suit} class="card-img-top" alt="product" />
              <div class="card-body">
                <h5 class="card-title product-name">
                  Men's formal suit - Black & White
                </h5>
                <p class="card-text product-price">$ 40.0</p>
                <p class="card-text store-name">Zalora Cloth</p>
                <AiIcons.AiFillStar className="star-icons" />
              </div>
            </div>
            <div class="card ">
              <img src={suit} class="card-img-top" alt="product" />
              <div class="card-body">
                <h5 class="card-title product-name">
                  Men's formal suit - Black & White
                </h5>
                <p class="card-text product-price">$ 40.0</p>
                <p class="card-text store-name">Zalora Cloth</p>
                <AiIcons.AiFillStar className="star-icons" />
              </div>
            </div>
          </section>
        </div>

        <div className="popular-products">
          <div className="popular">
            <h1 className="popular-title">Popular</h1>
            <p className="popular-text mt-3">
              Find clothes that are trending recently
            </p>
          </div>

          <section className="card-wrapper">
            {/* cards component */}
            <div class="card">
              <img src={suit} class="card-img-top" alt="product" />
              <div class="card-body">
                <h5 class="card-title product-name">
                  Men's formal suit - Black & White
                </h5>
                <p class="card-text product-price">$ 40.0</p>
                <p class="card-text store-name">Zalora Cloth</p>
                <AiIcons.AiFillStar className="star-icons" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
