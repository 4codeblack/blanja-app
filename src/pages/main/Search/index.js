import axios from "axios";
import React, { Fragment, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cards from "../../../components/module/Cards";
import { SearchContext } from "../../../context/SearchContext";
import "./search.css";

const Search = () => {
  const { searchProduct, setSearchProduct } = useContext(SearchContext);
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search");

  // const handleSearch = (e) => {
  //   if (e.key === "Enter") {
  //     setSearchParams({ search: e.target.value });
  //     // navigate("/main/search");
  //   }
  // };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}customer/product?name=${querySearch}`
      )
      .then((res) => {
        const result = res.data.data;
        setSearchProduct(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(searchProduct);
  return (
    <Fragment>
      <h1>Search</h1>
      <section className="search-content">
        <div className="search-wrapper">
          {searchProduct.map((product, index) => (
            <Cards
              productName={product.Name}
              productPrice={product.price}
              storeName={product.namestore}
              productPhoto={product.photo1}
              onClick={() => navigate(`/main/page-product/${product.id}`)}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Search;
