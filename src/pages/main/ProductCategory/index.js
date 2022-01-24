import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cards from "../../../components/module/Cards";
import "./productCategory.css";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}customer/product/category/${id}`
      )
      .then((res) => {
        const result = res.data.data;
        setProducts(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <section className="product-category-content">
        <div className="product-category-container">
          <p className="category-navigate"> Home &gt; Category &gt; {id} </p>
          <h1 className="product-category-title">{id}</h1>
          <div className="category-wrapper">
            {/* cards component */}
            {products.map((product, index) => (
              <Cards
                productName={product.Name}
                productPrice={product.price}
                storeName={product.namestore}
                productPhoto={product.photo1}
                onClick={() => navigate(`/main/page-product/${product.id}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductCategory;
