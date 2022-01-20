import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import '../index.css'

const Register = () => {
    const [togledUser, setTogledUser] = useState(true)
    const [togledSeller, setTogledSeller] = useState(false)

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
        store: '',
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
                name: '',
                email: '',
                password: '',
                role: 'customer'
            })
            setTogledUser(false)
            setTogledSeller(true)
        } else {
            setFormSeller({
                name: '',
                email: '',
                phone: '',
                store: '',
                password: '',
                role: 'seller'
            })
            setTogledUser(true)
            setTogledSeller(false)
        }
    }
    const handleClickCustomer = () => {
        console.log(formCustomer)
    }
    const handleClickSeller = () => {
        console.log(formSeller)
    }
    return (
        <Fragment>
            <div className="text-center fw-bold my-5">Please sign up with your account</div>
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
                            name="name"
                            onChange={handleChangeCustomer}
                            value={formCustomer.name}
                            placeholder="Name" />
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
                        <Button
                            className="btn-danger bg-gradient rounded-pill w-50 py-3 mt-5"
                            onClick={handleClickCustomer}>Register</Button>
                    </>
                ) : (
                    <>
                        <Input
                            className="mt-3 w-50 py-2"
                            type="text"
                            name="name"
                            onChange={handleChangeSeller}
                            value={formSeller.name}
                            placeholder="Name" />
                        <Input
                            className="mt-3 w-50 py-2"
                            type="text"
                            name="email"
                            onChange={handleChangeSeller}
                            value={formSeller.email}
                            placeholder="Email" />
                        <Input
                            className="mt-3 w-50 py-2"
                            type="number"
                            name="phone"
                            onChange={handleChangeSeller}
                            value={formSeller.phone}
                            placeholder="Phone Number" />
                        <Input
                            className="mt-3 w-50 py-2"
                            type="text"
                            name="store"
                            onChange={handleChangeSeller}
                            value={formSeller.store}
                            placeholder="Store name" />
                        <Input
                            className="mt-3 w-50 py-2"
                            type="password"
                            name="password"
                            onChange={handleChangeSeller}
                            value={formSeller.password}
                            placeholder="Password" />
                        <Button
                            className="btn-danger bg-gradient rounded-pill w-50 py-3 mt-5"
                            onClick={handleClickSeller}>Register</Button>
                    </>
                )}

                <div className="mt-3">Already have a Tokopedia account? <Link to={"/auth/login"} className="text-danger" style={{ textDecoration: 'none' }}>Login</Link></div>
            </div>
        </Fragment>
    )
};

export default Register;
