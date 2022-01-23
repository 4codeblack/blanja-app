import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import '../index.css'

const ForgotPass = () => {
    const navigate = useNavigate()
    const [formEmail, setFormEmail] = useState({
        email: '',
    })
    const handleChangeEmail = (e) => {
        setFormEmail({
            ...formEmail,
            [e.target.name]: e.target.value,
        })
    }
    const handleClickEmail = () => {
        navigate("/auth/reset-pass")
        console.log(formEmail)
    }

    return (
        <Fragment>
            <div className="text-center fw-bold my-5">Reset Password</div>
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <Input
                    className="mt-3 w-50 py-2"
                    type="text"
                    name="email"
                    onChange={handleChangeEmail}
                    value={formEmail.email}
                    placeholder="Email" />
                <Button
                    className="btn-danger bg-gradient rounded-pill w-50 py-3 mt-5"
                    onClick={handleClickEmail}>Confirm</Button>

                <div className="mt-3">Don't have a Tokopedia account? <Link to={"/auth/register"} className="text-danger" style={{ textDecoration: 'none' }}>Register</Link></div>
            </div>
        </Fragment>
    )
};

export default ForgotPass;
