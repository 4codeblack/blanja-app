import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page404 from "../pages/404";
import Main from "../pages/main";
import Home from "../pages/main/Home";
import ProfileCustomer from "../pages/main/ProfileCustomer";

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to={"/main"} />} />
          <Route path={"/main"} element={<Main />}>
            <Route index element={<Home />} />
            <Route path={"profile"} element={<ProfileCustomer />} />
          </Route>

          <Route path={"/*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
