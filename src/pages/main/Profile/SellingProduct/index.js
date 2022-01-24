import React, { useState } from 'react';
import Button from '../../../../components/base/Button';
import Input from '../../../../components/base/Input';
import Modal from '../../../../components/module/Modal';
import axios from 'axios';
import ModalSuccess from '../../../../components/module/ModalSuccess';

const SellingProduct = () => {
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState({})
  const [category, setCategory] = useState("")
  const [conditions, setConditions] = useState("")
  const [modalPic, setModalPic] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false)
  const ls = JSON.parse(localStorage.getItem("PictProducts"))

  const [form, setForm] = useState({
    namestore: "ipinstore",
    name: '',
    price: '',
    qty: '',
    photo1: ls.picOne,
    photo2: ls.picTwo,
    photo3: ls.picThree,
    photo4: ls.picFour,
    photo5: ls.picFive,
    description: '',
    id: 409466
  })

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      category: category,
      condition: conditions,
    })
  }
  


  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please input product name";
    }
    if (values.category === undefined) {
      errors.category = "Please select product category";
    }
    if (!values.price) {
      errors.price = "Please input price of goods";
    }
    if (!values.qty) {
      errors.qty = "Please input quantity of goods";
    }
    if (!values.condition) {
      errors.condition = "Please select type of goods";
    }
    if (values.photo1 === "") {
      errors.photo1 = "Please complete pictures of goods";
    }
    if (!values.description) {
      errors.description = "Description of goods is required";
    } 
    return errors;
  }

  const handleClickForm = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setLoading(true)
      console.log(form)
      setModalSuccess(true)
      axios
        .post(`https://blanja-backend.herokuapp.com/seller/ipinstore/add-product`, {
          namestore: form.namestore,
          Name: form.name,
          price: form.price,
          qty: form.qty,
          category: form.category,
          photo1: form.photo1,
          photo2: form.photo2,
          photo3: form.photo3,
          photo4: form.photo4,
          conditions: form.condition,
          description: form.description,
          id: form.id
        })
        .then((res) => {
          const result = res.data.message;
          console.log(result);
          setLoading(false);
          setModalSuccess(true)
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
        });
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const resultValidate = validateForm(form)
    setFormError(resultValidate)
    handleClickForm(resultValidate)
  }

  const openModal = (params) => {
    setModalPic(params)
    setModalSuccess(params)
  }
  return (
    <div className="outer bg-light w-75">
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Inventory</div>
            <hr />
          </div>
          <div className="lower px-5 pt-3">
            <div className="text-muted">Name of goods</div>
            <div className='text-danger'>{formError.name}</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="text"
              name="name"
              onChange={handleChangeForm}
              value={form.name}
              placeholder="input name of goods" />
          </div>
        </div>
      </div>
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Item Details</div>
            <hr />
          </div>
          <div className="lower px-5 pt-3">
            <div className="text-muted">Unit Category</div>
            <div className='text-danger'>{formError.category}</div>
            <select className="form-select mb-5" value={category} onChange={e=>setCategory(e.target.value)} name="category" aria-label="Default select example">
              <option>Please Select</option>
              <option>T-shirt</option>
              <option>Jacket</option>
              <option>Tie</option>
              <option>Short</option>
              <option>Pants</option>
              <option>High Heels</option>
            </select>
            <div className="text-muted">Unit Price</div>
            <div className='text-danger'>{formError.price}</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="number"
              name="price"
              onChange={handleChangeForm}
              value={form.price}
              placeholder="input in rupiah" />
            <div className="text-muted">Stock</div>
            <div className='text-danger'>{formError.qty}</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="number"
              name="qty"
              onChange={handleChangeForm}
              value={form.qty}
              placeholder="input in buah" />
            <div className="text-muted">Conditions</div>
            <div className='text-danger'>{formError.condition}</div>
            <label htmlFor="baru">
              <input
                type="radio"
                name="condition"
                onChange={e=>setConditions(e.target.value)}
                value="baru"
                checked={conditions === "baru"} /> new</label>
            <label htmlFor="bekas">
              <input
                type="radio"
                name="condition"
                onChange={e=>setConditions(e.target.value)}
                value="bekas"
                checked={conditions === "bekas"}
                className="ms-5 mb-5" /> old</label>
          </div>
        </div>
      </div>
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Photo of goods</div>
            <hr />
            <div className='text-danger'>{formError.photo1}</div>
          </div>
          <div className="lower px-5 pt-3">
            <div className="border rounded-3 my-3">
              <div className="d-flex flex-column">
                <div className="d-flex p-3 align-items-center">
                  <img className="mx-3" src={ls.picOne} width={190} height={190} alt="" />
                  <img className="mx-3" src={ls.picTwo} width={120} height={120} alt="" />
                  <img className="mx-3" src={ls.picThree} width={120} height={120} alt="" />
                  <img className="mx-3" src={ls.picFour} width={120} height={120} alt="" />
                  <img className="mx-3" src={ls.picFive} width={120} height={120} alt="" />
                </div>
                <div className="ms-5 text-muted ">Foto utama</div>
                <div className="w-100 px-5"><hr /></div>
                <div className="text-center my-5"><Button className="w-25 bg-transparent text-muted border rounded-pill p-3" onClick={()=>openModal(true)}>Upload Foto</Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Description</div>
            <hr />
            <div className='text-danger'>{formError.description}</div>
          </div>
          <div className="lower px-5 pt-3">
            <textarea
              type="text"
              name="description"
              onChange={handleChangeForm}
              value={form.description}
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum, quis architecto mollitia, aliquam debitis quos iure modi fugiat dicta nostrum deserunt minus possimus praesentium exercitationem doloribus nisi, vero accusamus!"
              className="desc-box mb-5"
            />
          </div>
        </div>
      </div>
      <div className="text-end me-5 mb-5"><Button isLoading={loading} onClick={handleSubmitForm} className="rounded-pill px-5 py-3 text-white bg-danger">Jual</Button></div>
      {
        modalPic === true ? <Modal openModal={openModal} /> : ""
      }
      {
        modalSuccess === true ? <ModalSuccess openModal={openModal} /> : ""
      }
    </div>
  )
};

export default SellingProduct;
