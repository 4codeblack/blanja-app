import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../pages/auth';
import ConfLogin from '../pages/auth/ConfLogin';
import ForgotPass from '../pages/auth/ForgotPass';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ResetPass from '../pages/auth/ResetPass';

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
            </Routes>
        </BrowserRouter>
    )
};

export default Router;
