import React, { Fragment, useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import logo from "../../../assets/icons/logo-blanja.png";
import profile from "../../../assets/img/profile-picture.png";
import Input from "../../base/Input";
import Button from "../../base/Button";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate()

  const handleCart = () => {
    navigate('/main/cart')
  }

  return (
    <Fragment>
      <div className="navbar d-flex justify-content-around align-items-center">
        <div className="navbar-left d-flex justify-content-around align-items-center">
          <img
            onClick={handleClick}
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
            />
            <BsIcons.BsSearch className="search-icon text-grey" />
          </div>
          <div className="filter-products ms-2 p-1">
            <FiIcons.FiFilter className="filter-icon icons-size text-grey " />
          </div>
        </div>

        {click ? (
          <div className="navbar-right d-flex align-items-center">
            <FiIcons.FiShoppingCart className="navbar-icons  me-3" onClick={handleCart}/>
            <FiIcons.FiBell className="navbar-icons ms-3 me-3" />
            <BiIcons.BiEnvelope className="navbar-icons ms-3 me-3" />
            <img className="ms-3" src={profile} alt="Profile" />
          </div>
        ) : (
          <div className="navbar-right d-flex align-items-center">
            <FiIcons.FiShoppingCart className="navbar-icons  me-3" />
            <Button className="navbar-btn-login ms-3 me-3">Login</Button>
            <Button className="navbar-btn-signup">Signup</Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
