/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Input from "../../../../components/base/Input";
import Button from "../../../../components/base/Button";
import { EditProfileContext } from "../../../../context/EditProfileContext";
import profilePic from "../../../../assets/img/profilePicute.png";
import { CustomerContext } from "../../../../context/CustomerContext";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  localStorage.removeItem("PictProducts")
  const { customer, setCustomer } = useContext(CustomerContext);
  const { editProfile, setEditProfile } = useContext(EditProfileContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [gender, setGender] = useState("");
  const customerId = JSON.parse(localStorage.getItem("customerId"));
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setGender(e.target.value);
  };
  const handleClick = () => {
    axios
      .put(
        `${process.env.REACT_APP_URL_BACKEND}customer/profile/update/${customerId}`,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          gender: gender
        }
      )
      .then((res) => {
        const result = res.data.data;
        setCustomer(result);
        setEditProfile(!editProfile);
        navigate("/main/profile-customer");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    const customerId = JSON.parse(localStorage.getItem("customerId"));
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}customer/profile/${customerId}`)
      .then((res) => {
        const result = res.data.data[0];
        setCustomer(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <section className="customer-main-content">
        <div className="my-profile">
          <h5 className="my-profile-title">My Profile</h5>
          <p className="my-profile-text">Manage your profile information</p>
        </div>

        <div className="my-profile-wrapper">
          <section className="my-profile-form">
            {editProfile ? (
              <div className="my-profile-forms d-flex flex-column">
                <div className="my-profile-input d-flex flex-row">
                  <label className="input-name " htmlFor="Name">
                    Name
                  </label>
                  <Input
                    className="input-form"
                    type="text"
                    id="Name"
                    placeholder={customer.Name}
                    disabled
                  />
                </div>
                <div className="my-profile-input d-flex flex-row">
                  <label className="input-name " htmlFor="Name">
                    Email
                  </label>
                  <Input
                    className="input-form"
                    type="email"
                    id="Email"
                    placeholder={customer.email}
                    disabled
                  />
                </div>
                <div className="my-profile-input d-flex flex-row">
                  <label className="input-name " htmlFor="Name">
                    Phone number
                  </label>
                  <Input
                    className="input-form"
                    type="tel"
                    id="Email"
                    placeholder={customer.phone}
                    disabled
                  />
                </div>
                <div className="my-profile-input mt-4 d-flex flex-row ">
                  <label className="input-name genders">Gender</label>
                  <label htmlFor="laki" className="gender">
                    <input
                      type="radio"
                      name="laki"
                      id="laki"
                      className="gender__input"
                      disabled
                    />
                    <div className="gender__radio"></div>
                    Laki-Laki
                  </label>
                  <label htmlFor="perempuan" className="gender">
                    <input
                      type="radio"
                      name="perempuan"
                      id="perempuan"
                      className="gender__input"
                      disabled
                    />
                    <div className="gender__radio"></div>
                    Perempuan
                  </label>
                </div>

                <Button disabled className="btn-save-disable">
                  Save
                </Button>
              </div>
            ) : (
              <div className="my-profile-forms">
                <div className="my-profile-input d-flex flex-row ">
                  <label className="input-name" htmlFor="Name">
                    Name
                  </label>
                  <Input
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    className="input-form"
                    type="text"
                    id="Name"
                    placeholder={customer.Name}
                  />
                </div>
                <div className="my-profile-input d-flex flex-row ">
                  <label className="input-name" htmlFor="Name">
                    Email
                  </label>
                  <Input
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                    className="input-form"
                    type="email"
                    id="Email"
                    placeholder={customer.email}
                  />
                </div>
                <div className="my-profile-input d-flex flex-row ">
                  <label className="input-name" htmlFor="Phone">
                    Phone number
                  </label>
                  <Input
                    value={form.phone}
                    onChange={handleChange}
                    name="phone"
                    className="input-form"
                    type="tel"
                    id="Phone"
                    placeholder={customer.phone}
                  />
                </div>
                <div className="my-profile-input mt-4 d-flex flex-row ">
                  <label className="input-name genders">Gender</label>
                  <label htmlFor="laki" className="gender">
                    <input
                      value="Laki-Laki"
                      onChange={handleChange}
                      checked={gender === "Laki-Laki"}
                      type="radio"
                      name="gender"
                      id="laki"
                      className="gender__input"
                    />
                    <div className="gender__radio"></div>
                    Laki-Laki
                  </label>
                  <label htmlFor="perempuan" className="gender">
                    <input
                      value="Perempuan"
                      onChange={handleChange}
                      checked={gender === "Perempuan"}
                      type="radio"
                      name="gender"
                      id="perempuan"
                      className="gender__input"
                    />
                    <div className="gender__radio"></div>
                    Perempuan
                  </label>
                </div>

                <Button onClick={handleClick} className="save-btn">
                  Save
                </Button>
              </div>
            )}
          </section>

          <section className="my-profile-picture">
            <div className="my-profile-img">
              <div>
                <img src={profilePic} alt="ProfilePicture" />
              </div>
              <Button className="btn-select-img">Select image</Button>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default MyAccount;
