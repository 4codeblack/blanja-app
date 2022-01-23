import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import "../index.css";

const LoginCustomer = () => {
  const [togledUser, setTogledUser] = useState(true);
  const [togledSeller, setTogledSeller] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrorCustomer, setFormErrorCustomer] = useState({});
  const [formErrorSeller, setFormErrorSeller] = useState({});
  const [messageResponse, setMessageResponse] = useState("");
  const navigate = useNavigate();

  const [formCustomer, setFormCustomer] = useState({
    email: "",
    password: "",
    role: "customer"
  });
  const [formSeller, setFormSeller] = useState({
    email: "",
    password: "",
    role: "seller"
  });

  const onClick = () => {
    if (togledUser) {
      setFormCustomer({
        email: "",
        password: "",
        role: "customer"
      });
      setFormErrorCustomer({});
      setMessageResponse("");
      setTogledUser(false);
      setTogledSeller(true);
    } else {
      setFormSeller({
        email: "",
        password: "",
        role: "seller"
      });
      setFormErrorSeller({});
      setMessageResponse("");
      setTogledUser(true);
      setTogledSeller(false);
    }
  };

  const handleChangeCustomer = (e) => {
    setFormCustomer({
      ...formCustomer,
      [e.target.name]: e.target.value
    });
  };
  const handleChangeSeller = (e) => {
    setFormSeller({
      ...formSeller,
      [e.target.name]: e.target.value
    });
  };

  const validateCustomer = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
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
  };
  const validateSeller = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
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
  };

  const handleSubmitCustomer = (e) => {
    e.preventDefault();
    const resultValidate = validateCustomer(formCustomer);
    setFormErrorCustomer(resultValidate);
    handleClickCustomer(resultValidate);
    console.log(formCustomer);
  };
  const handleSubmitSeller = (e) => {
    e.preventDefault();
    const resultValidate = validateSeller(formSeller);
    setFormErrorSeller(resultValidate);
    handleClickSeller(resultValidate);
    console.log("isi dari", formSeller);
  };

  const handleClickCustomer = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_URL_BACKEND}auth/login/customer`, {
          email: formCustomer.email,
          password: formCustomer.password
        })
        .then((res) => {
          const result = res.data.data[0];
          const customerId = result.id;
          localStorage.setItem("auth", "1");
          localStorage.setItem("userId", JSON.stringify(customerId));
          console.log(res.data.message);
          setLoading(false);
          setMessageResponse("");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
          setMessageResponse(err.response.data.message);
        });
    }
  };
  const handleClickSeller = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_URL_BACKEND}auth/login/seller`, {
          email: formSeller.email,
          password: formSeller.password
        })
        .then((res) => {
          const result = res.data.data[0];
          const sellerId = result.id;
          localStorage.setItem("auth", "1");
          localStorage.setItem("userId", JSON.stringify(sellerId));
          console.log(res.data.message);
          setLoading(false);
          setMessageResponse("");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
          setMessageResponse(true);
          setMessageResponse(err.response.data.message);
        });
    }
  };

  return (
    <Fragment>
      <div className="text-center fw-bold my-5">
        Please login with your account
      </div>
      <div className="d-flex justify-content-center my-5">
        <div
          onClick={onClick}
          className={
            togledUser
              ? "user-pointer bg-danger text-white px-3 py-3 border"
              : "user-pointer bg-transparent px-3 py-3 border"
          }
        >
          Customer
        </div>
        <div
          onClick={onClick}
          className={
            togledSeller
              ? "user-pointer bg-danger text-white px-4 py-3 border"
              : "user-pointer bg-transparent px-4 py-3 border"
          }
        >
          Seller
        </div>
      </div>
      {togledUser ? (
        <div className="text-center d-flex flex-column justify-content-center align-items-center">
          {messageResponse ? (
            <div className="text-danger">{messageResponse}</div>
          ) : (
            ""
          )}
          <Input
            className="mt-3 w-50 py-2"
            type="text"
            name="email"
            onChange={handleChangeCustomer}
            value={formCustomer.email}
            placeholder="Email"
          />
          <div className="text-danger mb-0">{formErrorCustomer.email}</div>
          <Input
            className="mt-3 w-50 py-2"
            type="password"
            name="password"
            onChange={handleChangeCustomer}
            value={formCustomer.password}
            placeholder="Password"
          />
          <div className="text-danger mb-0">{formErrorCustomer.password}</div>
          <div className="forgot-password align-self-end">
            <Link
              to={"/auth/forgot-pass"}
              style={{ textDecoration: "none" }}
              className="text-danger"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            isLoading={loading}
            className="btn-danger bg-gradient rounded-pill w-50 py-3"
            onClick={handleSubmitCustomer}
          >
            Login
          </Button>
        </div>
      ) : (
        <div className="text-center d-flex flex-column justify-content-center align-items-center">
          {messageResponse ? (
            <div className="text-danger">{messageResponse}</div>
          ) : (
            ""
          )}
          <Input
            className="mt-3 w-50 py-2"
            type="text"
            name="email"
            onChange={handleChangeSeller}
            value={formSeller.email}
            placeholder="Email"
          />
          <div className="text-danger mb-0">{formErrorSeller.email}</div>
          <Input
            className="mt-3 w-50 py-2"
            type="password"
            name="password"
            onChange={handleChangeSeller}
            value={formSeller.password}
            placeholder="Password"
          />
          <div className="text-danger mb-0">{formErrorSeller.password}</div>
          <div className="forgot-password align-self-end">
            <Link
              to={"/auth/forgot-pass"}
              style={{ textDecoration: "none" }}
              className="text-danger"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            isLoading={loading}
            className="btn-danger bg-gradient rounded-pill w-50 py-3"
            onClick={handleSubmitSeller}
          >
            Login
          </Button>
        </div>
      )}
      <div className="text-center mt-3">
        Don't have a Blanja account?{" "}
        <Link
          to={"/auth/register"}
          className="text-danger"
          style={{ textDecoration: "none" }}
        >
          Register
        </Link>
      </div>
    </Fragment>
  );
};

export default LoginCustomer;
