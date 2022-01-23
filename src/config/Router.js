import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from '../pages/auth';
import ConfLogin from '../pages/auth/ConfLogin';
import ForgotPass from '../pages/auth/ForgotPass';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ResetPass from '../pages/auth/ResetPass';
import Page404 from "../pages/404";
import Main from "../pages/main";
import Home from "../pages/main/Home";
import Cart from "../pages/main/Cart";
import Checkout from '../pages/main/Checkout';
import PageProduct from "../pages/main/PageProduct";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth />} >
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-pass" element={<ForgotPass />} />
                    <Route path="reset-pass" element={<ResetPass />} />
                    <Route path="conf-login" element={<ConfLogin />} />
                </Route>
              <Route index element={<Navigate to={"/main"} />} />
                  <Route path={"/main"} element={<Main />}>
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="page-product" element={<PageProduct />} />
                  <Route index element={<Home />} />
          </Route>
          <Route path={"/*"} element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
