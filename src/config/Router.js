import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/auth";
import ConfLogin from "../pages/auth/ConfLogin";
import ForgotPass from "../pages/auth/ForgotPass";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ResetPass from "../pages/auth/ResetPass";
import Page404 from "../pages/404";
import Main from "../pages/main";
import Home from "../pages/main/Home";
import ProductCategory from "../pages/main/ProductCategory";
import Cart from "../pages/main/Cart";
import Checkout from "../pages/main/Checkout";
import PageProduct from "../pages/main/PageProduct";

import ProfileCustomer from "../pages/main/ProfileCustomer";
import MyAccount from "../pages/main/ProfileCustomer/MyAccount";
import MyOrder from "../pages/main/ProfileCustomer/MyOrder";
import ShippingAddress from "../pages/main/ProfileCustomer/ShippingAddress";
import Search from "../pages/main/Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* otomatis masuk ke /main */}
        <Route index element={<Navigate to={"/main"} />} />

        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-pass" element={<ForgotPass />} />
          <Route path="reset-pass" element={<ResetPass />} />
          <Route path="conf-login" element={<ConfLogin />} />
          <Route index element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path={"/main"} element={<Main />}>
          <Route index element={<Home />} />
          <Route path="category/:id" element={<ProductCategory />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="page-product/:id" element={<PageProduct />} />
          <Route path={"profile-customer"} element={<ProfileCustomer />}>
            <Route path={"account"} element={<MyAccount />} />
            <Route path={"address"} element={<ShippingAddress />} />
            <Route path={"order"} element={<MyOrder />} />
            <Route
              index
              element={<Navigate to={"/main/profile-customer/account"} />}
            />
          </Route>
        </Route>

        <Route path={"/*"} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
