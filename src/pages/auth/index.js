import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Auth = () => {
    return (
        <>
        <div className="container max-vh-100 w-50">
            <div className="text-center my-5">
                <Link to={"/auth/login"}><img src={require("../../assets/img/icons/logo-login-page.svg").default} alt="" /></Link>
            </div>
            <Outlet />
        </div>
        </>
    );
};

export default Auth;
