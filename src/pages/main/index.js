import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/module/Navbar";
import "./main.css";

const Main = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Main;
