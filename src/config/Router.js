import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page404 from "../pages/404";
import Main from "../pages/main";
import Home from "../pages/main/Home";
import ProfileCustomer from "../pages/main/ProfileCustomer";
import MyAccount from "../pages/main/ProfileCustomer/MyAccount";
import MyOrder from "../pages/main/ProfileCustomer/MyOrder";
import ShippingAddress from "../pages/main/ProfileCustomer/ShippingAddress";

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to={"/main"} />} />
          <Route path={"/main"} element={<Main />}>
            <Route index element={<Home />} />
            <Route path={"profile"} element={<ProfileCustomer />}>
              <Route path={"account"} element={<MyAccount />} />
              <Route path={"address"} element={<ShippingAddress />} />
              <Route path={"order"} element={<MyOrder />} />
              <Route
                index
                element={<Navigate to={"/main/profile/account"} />}
              />
            </Route>
          </Route>

          <Route path={"/*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
