import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/module/Navbar";
import "./main.css";

const Main = () => {
  let auth = localStorage.getItem("auth");
  if (!auth) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Main;
