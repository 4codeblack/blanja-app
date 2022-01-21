import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import '../index.css'

const LoginCustomer = () => {
    const [togledUser, setTogledUser] = useState(true)
    const [togledSeller, setTogledSeller] = useState(false)
    const [loading, setLoading] = useState(false)

    const [formCustomer, setFormCustomer] = useState({
        email: '',
        password: '',
        role: 'customer'
    })
    const [formSeller, setFormSeller] = useState({
        email: '',
        password: '',
        role: 'seller'
    })
    const handleChangeCustomer = (e) => {
        setFormCustomer({
            ...formCustomer,
            [e.target.name]: e.target.value,
        })
    }
    const handleChangeSeller = (e) => {
        setFormSeller({
            ...formSeller,
            [e.target.name]: e.target.value,
        })
    }
    const onClick = () => {
        if (togledUser) {
            setFormCustomer({
                email: '',
                password: '',
                role: 'customer'
            })
            setTogledUser(false)
            setTogledSeller(true)
        } else {
            setFormSeller({
                email: '',
                password: '',
                role: 'seller'
            })
            setTogledUser(true)
            setTogledSeller(false)
        }
    }
    const handleClickCustomer = () => {
        setLoading(true)
        console.log(formCustomer)
        axios.post(`${process.env.REACT_APP_URL_BACKEND}auth/login/customer`,
        {
            email: formCustomer.email,
            password: formCustomer.password
        })
        .then((res) => {
            setLoading(false)
            alert(res.data.message)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleClickSeller = () => {
        setLoading(true)
        console.log(formCustomer)
        axios.post(`${process.env.REACT_APP_URL_BACKEND}auth/login/seller`,
        {
            email: formSeller.email,
            password: formSeller.password
        })
        .then((res) => {
            setLoading(false)
            alert(res.data.message)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <Fragment>
            <div className="text-center fw-bold my-5">Please login with your account</div>
            <div className="d-flex justify-content-center my-5">
                <div onClick={onClick} className={togledUser ? "user-pointer bg-danger text-white px-3 py-3 border" : "user-pointer bg-transparent px-3 py-3 border"}>Customer</div>
                <div onClick={onClick} className={togledSeller ? "user-pointer bg-danger text-white px-4 py-3 border" : "user-pointer bg-transparent px-4 py-3 border"}>Seller</div>
            </div>
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                {togledUser ? (
                    <>
                        <Input
                            className="mt-3 w-50 py-2"
                            type="text"
                            name="email"
                            onChange={handleChangeCustomer}
                            value={formCustomer.email}
                            placeholder="Email" />
                        <Input
                            className="mt-3 w-50 py-2"
                            type="password"
                            name="password"
                            onChange={handleChangeCustomer}
                            value={formCustomer.password}
                            placeholder="Password" />
                        <div className="forgot-password align-self-end"><Link to={"/auth/forgot-pass"} style={{ textDecoration: 'none' }} className="text-danger">Forgot Password?</Link></div>
                        <Button
                            className="btn-danger bg-gradient rounded-pill w-50 py-3"
                            onClick={handleClickCustomer}>Login</Button>
                    </>
                ) : (
                    <>
                        <Input
                            className="mt-3 w-50 py-2"
                            type="text"
                            name="email"
                            onChange={handleChangeSeller}
                            value={formSeller.email}
                            placeholder="Email" />
                        <Input
                            className="mt-3 w-50 py-2"
                            type="password"
                            name="password"
                            onChange={handleChangeSeller}
                            value={formSeller.password}
                            placeholder="Password" />
                        <div className="forgot-password align-self-end"><Link to={"/auth/forgot-pass"} style={{ textDecoration: 'none' }} className="text-danger">Forgot Password?</Link></div>
                        <Button
                            className="btn-danger bg-gradient rounded-pill w-50 py-3"
                            onClick={handleClickSeller}>Login</Button>
                    </>
                )}

                <div className="mt-3">Don't have a Tokopedia account? <Link to={"/auth/register"} className="text-danger" style={{ textDecoration: 'none' }}>Register</Link></div>
            </div>
        </Fragment>
    )
};

export default LoginCustomer;
