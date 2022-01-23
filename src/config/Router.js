import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page404 from "../pages/404";
import Main from "../pages/main";
import Home from "../pages/main/Home";
import Cart from "../pages/main/Cart";
import Checkout from '../pages/main/Checkout';
import PageProduct from "../pages/main/PageProduct";

const Router = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Navigate to={"/main"} />} />
                    <Route path={"/main"} element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="page-product" element={<PageProduct />} />
                    </Route>

                    <Route path={"/*"} element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default Router;
