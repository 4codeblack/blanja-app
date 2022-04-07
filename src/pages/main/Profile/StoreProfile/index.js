import React, { useState } from 'react';
import '../profile.css'
import Button from '../../../../components/base/Button';
import Input from '../../../../components/base/Input';

const StoreProfile = () => {
  localStorage.removeItem("PictProducts")
  const [formError, setFormError] = useState({})

  const [form, setForm] = useState({
    storename: '',
    email: '',
    phone: '',
    storedesc: ''
  })

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value]
    })
  }

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const textStore = values.storedesc.toString()
    
    if (!values.storename) {
      errors.storename = "Store name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.storedesc) {
      errors.storedesc = "Store description is required";
    } else if (textStore.length < 120) {
      errors.storedesc = "Store description atleast must be more than 120 characters";
    }
    return errors;
  }
  const handleClickForm = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      alert("oke")
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const resultValidate = validateForm(form)
    setFormError(resultValidate)
    handleClickForm(resultValidate)
  }
  return (
    <div className="outer bg-light w-75">
      <div className="inner m-5 bg-white rounded">
        <div className="d-flex flex-column">
          <div className="profile-upper px-5 pt-5">
            <div className="fw-bold">My Profile Store</div>
            <div className="text-muted mt-1">Manage your profile information</div>
            <hr />
          </div>
          <div className="profile-lower d-flex justify-content-between px-5 pt-3">
            <div className="w-75">
              <div className="row mb-3 ms-5">
                <div className="col-3 text-muted">Store Name</div>
                <Input
                  className="col"
                  type="text"
                  name="storename"
                  onChange={handleChangeForm}
                  value={form.name}
                  placeholder="Johannes Michael"
                />
                <div className="row validate-error text-danger">{formError.storename}</div>
              </div>
              <div className="row mb-3 ms-5">
                <div className="col-3 text-muted">Email</div>
                <Input
                  className="col"
                  type="email"
                  name="email"
                  onChange={handleChangeForm}
                  value={form.email}
                  placeholder="johanes@gmail.com"
                />
                <div className="row validate-error text-danger">{formError.email}</div>
              </div>
              <div className="row mb-3 ms-5">
                <div className="col-3 text-muted">Phone number</div>
                <Input
                  className="col"
                  type="number"
                  name="phone"
                  onChange={handleChangeForm}
                  value={form.phone}
                  placeholder="08901289012"
                />
                <div className="row validate-error text-danger">{formError.phone}</div>
              </div>
              <div className="row mb-5 ms-5">
                <div className="col-3 mb-3 text-muted">Store description</div>
                <textarea
                  className="col desc-box"
                  type="text"
                  name="storedesc"
                  onChange={handleChangeForm}
                  value={form.storedesc}
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum, quis architecto mollitia, aliquam debitis quos iure modi fugiat dicta nostrum deserunt minus possimus praesentium exercitationem doloribus nisi, vero accusamus!"
                />
                <div className="row validate-error text-danger">{formError.storedesc}</div>
              </div>
              <Button onClick={handleSubmitForm} className="bg-danger text-white rounded-pill px-5 py-2 mb-5">Save</Button>
            </div>
            <span className="flex-shrink-1 vertical-line" />
            <div className="flex-shrink-1">
              <div className="my-3 mx-1"><img src={require("../../../../assets/img/johannes-michael-big-pp.png")} alt="" /></div>
              <Button className="bg-transparent border rounded-pill border-2 px-3 py-1 text-muted">Select Image</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StoreProfile;
