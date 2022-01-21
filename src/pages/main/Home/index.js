import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Slider from "../../../components/module/CarouselPromo/Slider";
import CarouselCategory from "../../../components/module/CarouselCategory";
import Cards from "../../../components/module/Cards";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://blanja-backend.herokuapp.com/customer/all-product")
      .then((res) => {
        console.info(res.data);
        const result = res.data.data;
        setProducts(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
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
            <CarouselCategory />
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
            {products.map((product, index) => (
              <Cards
                productName={product.Name}
                productPrice={product.price}
                storeName={product.namestore}
              />
            ))}
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
            {products.map((product, index) => (
              <Cards
                productName={product.Name}
                productPrice={product.price}
                storeName={product.namestore}
              />
            ))}
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
