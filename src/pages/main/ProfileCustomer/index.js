import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import "./profile-customer.css";
import profilePic from "../../../assets/img/profile-pic.png";

const ProfileCustomer = () => {
  return (
    <Fragment>
      <main className="profile-customer">
        <section className="sidebar-customer-content">
          <div className="sidebar-profile d-flex">
            <div className="picture-wrapper me-3">
              <img
                className="profile-picture"
                src={profilePic}
                alt="ProfilePicture"
              />
            </div>

            <div className="profile-manager d-flex flex-column">
              <p className="profile-name m-0">Johanes Mikael</p>
              {/* untuk edit profile */}
              <div className="profile-editor d-flex align-items-center mt-1">
                <FaIcons.FaPen className="editor-icon" />
                <p className="editor-text ms-2 mt-1 mb-0">Edit Profile</p>
              </div>
            </div>
          </div>

          <div className="menu-items d-flex flex-row align-items-center mb-3">
            <div className="icons-wrapper bg-item-blue">
              <BiIcons.BiUser className="menu-icons" />
            </div>
            <p className="menu-title m-0">My Account</p>
          </div>
          <div className="menu-items d-flex flex-row align-items-center mb-3">
            <div className="icons-wrapper bg-item-orange">
              <IoIcons.IoLocationOutline className="menu-icons" />
            </div>
            <p className="menu-title m-0">Shipping Address</p>
          </div>
          <div className="menu-items d-flex flex-row align-items-center mb-3">
            <div className="icons-wrapper bg-item-pink">
              <IoIcons.IoClipboardOutline className="menu-icons" />
            </div>
            <p className="menu-title m-0">My Order</p>
          </div>
        </section>

        <section className="profile-customer-content">
          <Outlet />
        </section>
      </main>
    </Fragment>
  );
};

export default ProfileCustomer;
