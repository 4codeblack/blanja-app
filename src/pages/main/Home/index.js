/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Slider from "../../../components/module/CarouselPromo/Slider";
import CarouselCategory from "../../../components/module/CarouselCategory";
import Cards from "../../../components/module/Cards";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../../../context/CustomerContext";

const Home = () => {
  const { customer, setCustomer } = useContext(CustomerContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const customerId = JSON.parse(localStorage.getItem("customerId"));
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}customer/profile/${customerId}`)
      .then((res) => {
        setLoading(false);
        const result = res.data.data[0];
        setCustomer(result);
        console.log(result);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}customer/all-product`)
      .then((res) => {
        console.info(res.data);
        const result = res.data.data;
        setProducts(result);
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
                onClick={() => navigate(`/main/page-product/${product.id}`)}
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
                onClick={() => navigate(`/main/page-product/${products.id}`)}
              />
            ))}
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
