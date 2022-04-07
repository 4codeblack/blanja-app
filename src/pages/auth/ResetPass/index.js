import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import '../index.css'

const ResetPass = () => {
    const navigate = useNavigate()
    const [formPassword, setFormPassword] = useState({
        passwordNew: '',
        passwordNewConf: ''
    })
    const handleChangePassword = (e) => {
        setFormPassword({
            ...formPassword,
            [e.target.name]: e.target.value,
        })
    }
    const handleClickPassword = () => {
        if (formPassword.passwordNew !== formPassword.passwordNewConf) {
            return alert("password tidak sama")
        } else {
            navigate("/auth/conf-login")
        }
    }

    return (
        <Fragment>
            <div className="text-center fw-bold mt-5">Reset Password</div>
            <div className="text-center text-danger mt-3 mb-5">You need to change your password to activate your account</div>
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <Input
                    className="mt-3 w-50 py-2"
                    type="password"
                    name="passwordNew"
                    onChange={handleChangePassword}
                    value={formPassword.passwordNew}
                    placeholder="Password" />
                <Input
                    className="mt-3 w-50 py-2"
                    type="password"
                    name="passwordNewConf"
                    onChange={handleChangePassword}
                    value={formPassword.passwordNewConf}
                    placeholder="Confirm New Password" />
                <Button
                    className="btn-danger bg-gradient rounded-pill w-50 py-3 mt-5"
                    onClick={handleClickPassword}>Confirm</Button>

                <div className="mt-3">Don't have a Tokopedia account? <Link to={"/auth/register"} className="text-danger" style={{ textDecoration: 'none' }}>Register</Link></div>
            </div>
        </Fragment>
    )
};

export default ResetPass;
