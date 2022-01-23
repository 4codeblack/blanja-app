import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import '../index.css'

const ConfLogin = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleClickForm = () => {
        console.log(form)
    }

    return (
        <Fragment>
            <div className="text-center fw-bold mt-5">Please login with your account</div>
            <div className="text-center text-muted text-danger mt-3 mb-5">We have sent an email containing a password reset instruction to your email.<br />Please check your email.</div>
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <Input
                    className="mt-3 w-50 py-2"
                    type="email"
                    name="email"
                    onChange={handleChangeForm}
                    value={form.email}
                    placeholder="Email" />
                <Input
                    className="mt-3 w-50 py-2"
                    type="password"
                    name="password"
                    onChange={handleChangeForm}
                    value={form.password}
                    placeholder="Password" />
                <div className="forgot-password align-self-end"><Link to={"/auth/forgot-pass"} style={{ textDecoration: 'none' }} className="text-danger">Forgot Password?</Link></div>
                <Button
                    className="btn-danger bg-gradient rounded-pill w-50 py-3"
                    onClick={handleClickForm}>Login</Button>
            </div>
        </Fragment>
    )
};

export default ConfLogin;
