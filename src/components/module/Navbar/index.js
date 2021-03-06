import React, { Fragment, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import axios from "axios";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import logo from "../../../assets/icons/logo-blanja.png";
import profile from "../../../assets/img/profile-picture.png";
import Input from "../../base/Input";
import Button from "../../base/Button";
import "./navbar.css";

const Navbar = () => {
  let auth = localStorage.getItem("auth");
  const sellerId = JSON.parse(localStorage.getItem("sellerId"));
  const customerId = JSON.parse(localStorage.getItem("customerId"));
  const navigate = useNavigate();

  const toHomePage = () => navigate("/main");
  const toCart = () => navigate("/main/cart");
  const toProfilePage = () => {
    if (sellerId) {
      navigate("/main/profile-seller/store-profile");
    } else if (customerId) {
      navigate("/main/profile-customer/account");
    }
  };
  const logIn = () => navigate("/auth/login");
  const signUp = () => navigate("/auth/register");

  const { setSearchProduct } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}customer/product?name=${querySearch}`
      )
      .then((res) => {
        const result = res.data.data;
        setSearchProduct(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querySearch]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ search: e.target.value });
      // navigate("/main/search");
    }
  };

  return (
    <Fragment>
      <div className="navbar d-flex justify-content-around align-items-center">
        <div className="navbar-left d-flex justify-content-around align-items-center">
          <img
            onClick={toHomePage}
            className="navbar-logo me-5 mb-2"
            src={logo}
            alt="Blanja"
            width="125px"
          />
          <div className="search-product search-product-wrapper d-flex flex-row pe-2">
            <Input
              className="search-input ms-2 me-1 p-0"
              type="text"
              placeholder="Search"
              name="search"
              onKeyUp={handleSearch}
            />
            <BsIcons.BsSearch className="search-icon text-grey" />
          </div>
          <div className="filter-products ms-2 p-1">
            <FiIcons.FiFilter className="filter-icon icons-size text-grey " />
          </div>
        </div>

        {auth === "1" ? (
          <div className="navbar-right d-flex align-items-center">
            <FiIcons.FiShoppingCart
              className="navbar-icons cart me-3"
              onClick={toCart}
            />
            <FiIcons.FiBell className="navbar-icons notif ms-3 me-3" />
            <BiIcons.BiEnvelope className="navbar-icons chat ms-3 me-3" />
            <img
              onClick={toProfilePage}
              className="navbar-profile ms-3"
              src={profile}
              alt="Profile"
            />
          </div>
        ) : (
          <div className="navbar-right d-flex align-items-center">
            <FiIcons.FiShoppingCart className="navbar-icons  me-3" />
            <Button onClick={logIn} className="navbar-btn-login ms-3 me-3">
              Login
            </Button>
            <Button onClick={signUp} className="navbar-btn-signup">
              Signup
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
