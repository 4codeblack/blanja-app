import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import '../index.css'

const Register = () => {
    const [togledUser, setTogledUser] = useState(true)
    const [togledSeller, setTogledSeller] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formErrorCustomer, setFormErrorCustomer] = useState({})
    const [formErrorSeller, setFormErrorSeller] = useState({})

    const [formCustomer, setFormCustomer] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer'
    })
    const [formSeller, setFormSeller] = useState({
        name: '',
        email: '',
        phone: '',
        storename: '',
        password: '',
        role: 'seller'
    })

    const onClick = () => {
        if (togledUser) {
            setFormCustomer({
                name: '',
                email: '',
                password: '',
                role: 'customer'
            })
            setFormErrorCustomer({})
            setTogledUser(false)
            setTogledSeller(true)
        } else {
            setFormSeller({
                name: '',
                email: '',
                phone: '',
                storename: '',
                password: '',
                role: 'seller'
            })
            setFormErrorSeller({})
            setTogledUser(true)
            setTogledSeller(false)
        }
    }

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

    const validateCustomer = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!values.name) {
            errors.name = "First Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Email address is invalid";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        }
        return errors;
    }
    const validateSeller = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!values.name) {
            errors.name = "First Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Email address is invalid";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        }
        if (!values.storename) {
            errors.storename = "Store Name is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        }
        return errors;
    }

    const handleClickCustomer = (resultValidate) => {
        if (Object.keys(resultValidate).length === 0) {
            setLoading(true)
            console.log("dari formcustomer", formCustomer)
            axios.post(`${process.env.REACT_APP_URL_BACKEND}auth/register/customer`,
                {
                    name: formCustomer.name,
                    password: formCustomer.password,
                    email: formCustomer.email
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
    }
    const handleClickSeller = (resultValidate) => {
        if (Object.keys(resultValidate).length === 0) {
            setLoading(true)
            console.log("isi form seller", formSeller)
            axios.post(`${process.env.REACT_APP_URL_BACKEND}auth/register/seller`,
                {
                    name: formSeller.name,
                    email: formSeller.email,
                    phone: formSeller.phone,
                    storename: formSeller.storename,
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
    }
    const handleSubmitCustomer = (e) => {
        e.preventDefault();
        const resultValidate = validateCustomer(formCustomer)
        setFormErrorCustomer(resultValidate);
        handleClickCustomer(resultValidate);
        console.log(formCustomer)
    }
    const handleSubmitSeller = (e) => {
        e.preventDefault();
        const resultValidate = validateSeller(formSeller)
        setFormErrorSeller(resultValidate);
        handleClickSeller(resultValidate);
        console.log("isi dari", formSeller)
    }
    return (
        <Fragment>
            <div className="text-center fw-bold my-5">Please sign up with your account</div>
            <div className="d-flex justify-content-center my-5">
                <div onClick={onClick} className={togledUser ? "user-pointer bg-danger text-white px-3 py-3 border" : "user-pointer bg-transparent px-3 py-3 border"}>Customer</div>
                <div onClick={onClick} className={togledSeller ? "user-pointer bg-danger text-white px-4 py-3 border" : "user-pointer bg-transparent px-4 py-3 border"}>Seller</div>
            </div>
            {togledUser ? (
                <div className="text-center d-flex flex-column justify-content-center align-items-center">
                    <Input
                        className="mt-3 w-50 py-2"
                        type="text"
                        name="name"
                        onChange={handleChangeCustomer}
                        value={formCustomer.name}
                        placeholder="Name" />
                    <div className="text-danger mb-0">{formErrorCustomer.name}</div>
                    <Input
                        className="mt-3 w-50 py-2"
                        type="text"
                        name="email"
                        onChange={handleChangeCustomer}
                        value={formCustomer.email}
                        placeholder="Email" />
                    <div className="text-danger mb-0">{formErrorCustomer.email}</div>
                    <Input
                        className="mt-3 w-50 py-2"
                        type="password"
                        name="password"
                        onChange={handleChangeCustomer}
                        value={formCustomer.password}
                        placeholder="Password" />
                    <div className="text-danger mb-0">{formErrorCustomer.password}</div>
                    <Button isLoading={loading} onClick={handleSubmitCustomer} className="btn-danger bg-gradient rounded-pill w-50 py-3 mt-5">Register</Button>
                </div>
            ) : (
                <div className="text-center d-flex flex-column justify-content-center align-items-center">
                    <Input
                        className="mt-3 w-50 py-2"
                        type="text"
                        name="name"
                        onChange={handleChangeSeller}
                        value={formSeller.name}
                        placeholder="Name" />
                        <div className="text-danger mb-0">{formErrorSeller.name}</div>
                    <Input
                        className="mt-3 w-50 py-2"
                        type="text"
                        name="email"
                        onChange={handleChangeSeller}
                        value={formSeller.email}
                        placeholder="Email" />
                        <div className="text-danger mb-0">{formErrorSeller.email}</div>
                    <Input
                        className="mt-3 w-50 py-2"
                        type="number"
                        name="phone"
                        onChange={handleChangeSeller}
                        value={formSeller.phone}
                        placeholder="Phone Number" />
                        <div className="text-danger mb-0">{formErrorSeller.phone}</div>
                    <Input
                        className="mt-3 w-50 py-2"
                        type="text"
                        name="storename"
                        onChange={handleChangeSeller}
                        value={formSeller.storename}
                        placeholder="Store name" />
                        <div className="text-danger mb-0">{formErrorSeller.storename}</div>
                    <Input
                        className="mt-3 w-50 py-2"
                        type="password"
                        name="password"
                        onChange={handleChangeSeller}
                        value={formSeller.password}
                        placeholder="Password" />
                        <div className="text-danger mb-0">{formErrorSeller.password}</div>
                    <Button isLoading={loading} onClick={handleSubmitSeller} className="btn-danger bg-gradient rounded-pill w-50 py-3 mt-5">Register</Button>
                </div>
            )}
            <div className="text-center mt-3">Already have a Tokopedia account? <Link to={"/auth/login"} className="text-danger" style={{ textDecoration: 'none' }}>Login</Link></div>
        </Fragment>
    )
};

export default Register;
