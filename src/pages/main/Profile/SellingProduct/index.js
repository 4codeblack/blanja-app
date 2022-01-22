import React, { useState } from 'react';
import Button from '../../../../components/base/Button';
import Input from '../../../../components/base/Input';

const SellingProduct = () => {
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState({})

  const [form, setForm] = useState({
    inventory: '',
    unitprice: '',
    unitbuah: '',
    unitstock: '',
    description: ''
  })

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value]
    })
  }

  const validateForm = (values) => {
    const errors = {};
    const textStore = values.description.toString()
    
    if (!values.inventory) {
      errors.inventory = "Please input product name";
    }
    if (!values.unitprice) {
      errors.unitprice = "Please input price of goods";
    }
    if (!values.unitbuah) {
      errors.unitbuah = "Please input quantity of goods";
    }
    if (!values.unitstock) {
      errors.unitstock = "Please select type of goods";
    }
    if (!values.description) {
      errors.description = "Description of goods is required";
    } else if (textStore.length < 120) {
      errors.description = "Description atleast must be more than 120 characters";
    }
    return errors;
  }

  const handleClickForm = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setLoading(true)
      console.log("dari form", form)
      alert("oke")
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const resultValidate = validateForm(form)
    setFormError(resultValidate)
    handleClickForm(resultValidate)
    console.log(resultValidate)
    console.log("isi juga dari", form)
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
            <div className='text-danger'>{formError.inventory}</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="text"
              name="inventory"
              onChange={handleChangeForm}
              value={form.inventory}
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
            <div className="text-muted">Unit Price</div>
            <div className='text-danger'>{formError.unitprice}</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="number"
              name="unitprice"
              onChange={handleChangeForm}
              value={form.unitprice}
              placeholder="input in rupiah" />
            <div className="text-muted">Stock</div>
            <div className='text-danger'>{formError.unitbuah}</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="number"
              name="unitbuah"
              onChange={handleChangeForm}
              value={form.unitbuah}
              placeholder="input in buah" />
              <div className="text-muted">Stock</div>
              <div className='text-danger'>{formError.unitstock}</div>
              <input type="radio" name="unitstock" onChange={handleChangeForm}  value={form.unitstock}   /> baru
              <input type="radio" name="unitstock" onChange={handleChangeForm}  value={form.unitstock} className="ms-5 mb-5" /> bekas
          </div>
        </div>
      </div>
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Photo of goods</div>
            <hr />
          </div>
          <div className="lower px-5 pt-3">
            <div className="border rounded-3 my-3">
              <div className="d-flex flex-column">
                <div className="d-flex p-3 align-items-center">
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={190} height={190} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                </div>
                <div className="ms-5 text-muted ">Foto utama</div>
                <div className="w-100 px-5"><hr /></div>
                <div className="text-center my-5"><Button className="w-25 bg-transparent text-muted border rounded-pill p-3">Upload Foto</Button></div>
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
      <div className="text-end me-5 mb-5"><Button onClick={handleSubmitForm} className="rounded-pill px-5 py-3 text-white bg-danger">Jual</Button></div>
    </div>
  )
};

export default SellingProduct;
