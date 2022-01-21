import React, { Fragment } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/main';
import Home from '../pages/main/Home';
import Profile from '../pages/main/Profile'
import MyOrder from '../pages/main/Profile/MyOrder'
import MyProduct from '../pages/main/Profile/MyProduct'
import SellingProduct from '../pages/main/Profile/SellingProduct'
import StoreProfile from '../pages/main/Profile/StoreProfile'

const Router = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Navigate to={"/main"} />} />
                    <Route path={"/main"} element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path={"profile"} element={<Profile />}>
                            <Route path={"my-order"} element={<MyOrder />} />
                            <Route path={"my-product"} element={<MyProduct />} />
                            <Route path={"selling-product"} element={<SellingProduct />} />
                            <Route path={"store-profile"} element={<StoreProfile />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
};

export default Router;
