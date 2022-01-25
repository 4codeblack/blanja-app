import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar-customer.css";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as IoIoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import profilePic from "../../../assets/img/profile-pic.png";
import { Link } from "react-router-dom";
import { EditProfileContext } from "../../../context/EditProfileContext";
import { CustomerContext } from "../../../context/CustomerContext";

const SidebarCustomer = () => {
  // eslint-disable-next-line no-unused-vars
  const { customer, setCustomer } = useContext(CustomerContext);
  const { editProfile, setEditProfile } = useContext(EditProfileContext);
  const handleEditProfile = () => setEditProfile(!editProfile);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("customerId");
    localStorage.removeItem("sellerId");
    navigate("/auth/login");
  };

  return (
    <Fragment>
      <div className="sidebar-profile d-flex">
        <div className="picture-wrapper me-3">
          <img
            className="profile-picture"
            src={profilePic}
            alt="ProfilePicture"
          />
        </div>

        <div className="profile-manager d-flex flex-column">
          <p className="profile-name m-0">{customer.Name}</p>
          {/* untuk edit profile */}
          <div
            onClick={handleEditProfile}
            className="profile-editor d-flex align-items-center mt-1"
          >
            <FaIcons.FaPen className="editor-icon" />
            <p className="editor-text ms-2 mt-1 mb-0">Edit Profile</p>
          </div>
        </div>
      </div>

      <Link to={"/main/profile/account"} style={{ textDecoration: "none" }}>
        <div className="menu-items d-flex flex-row align-items-center mb-3">
          <div className="icons-wrapper bg-item-blue">
            <BiIcons.BiUser className="menu-icons" />
          </div>
          <p className="menu-title m-0">My Account</p>
        </div>
      </Link>

      <Link to={"/main/profile/address"} style={{ textDecoration: "none" }}>
        <div className="menu-items d-flex flex-row align-items-center mb-3">
          <div className="icons-wrapper bg-item-orange">
            <IoIcons.IoLocationOutline className="menu-icons" />
          </div>
          <p className="menu-title m-0">Shipping Address</p>
        </div>
      </Link>

      <Link to={"/main/profile/order"} style={{ textDecoration: "none" }}>
        <div className="menu-items d-flex flex-row align-items-center mb-3">
          <div className="icons-wrapper bg-item-pink">
            <IoIcons.IoClipboardOutline className="menu-icons" />
          </div>
          <p className="menu-title m-0">My Order</p>
        </div>
      </Link>

      <div
        onClick={logOut}
        className="menu-items d-flex flex-row align-items-center mb-3"
      >
        <div className="icons-wrapper bg-item-purple">
          <IoIoIcons.IoIosLogOut className="menu-icons" />
        </div>
        <p className="menu-title m-0">Log Out</p>
      </div>
    </Fragment>
  );
};

export default SidebarCustomer;
