import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SidebarCustomer from "../../../components/module/SidebarCustomer";
import "./profile-customer.css";

const ProfileCustomer = () => {
  return (
    <Fragment>
      <main className="profile-customer">
        <section className="sidebar-customer-content">
          <SidebarCustomer />
        </section>

        <section className="profile-customer-content">
          <Outlet />
        </section>
      </main>
    </Fragment>
  );
};

export default ProfileCustomer;
