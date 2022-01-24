import React, { useState } from 'react';
import Button from '../../base/Button';
import Input from '../../base/Input';
import "./modal.css"

const Modal = ({ openModal }) => {
    const [form, setForm] = useState({
        picOne: '',
        picTwo: '',
        picThree: '',
        picFour: '',
        picFive: ''
    })
    const [formError, setFormError] = useState({})
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const validateForm = (values) => {
        const errors = {};
        if (values.picOne === "") {
            errors.picOne = "Please input URL product picture";
        }
        if (values.picTwo === "") {
            errors.picTwo = "Please input URL product picture";
        }
        if (values.picThree === "") {
            errors.picThree = "Please input URL product picture";
        }
        if (values.picFour === "") {
            errors.picFour = "Please input URL product picture";
        }
        if (values.picFive === "") {
            errors.picFive = "Please input URL product picture";
        }
        return errors;
    }
    const handleClickForm = (resultValidate) => {
        if (Object.keys(resultValidate).length === 0) {
            localStorage.removeItem("PictProducts")
            localStorage.setItem("PictProducts", JSON.stringify(form))
            openModal(false)
        }
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        const resultValidate = validateForm(form)
        setFormError(resultValidate)
        handleClickForm(resultValidate)
    }
    return (
        <div className="modal-wrapper">
            <div className="modal-inner">
                <div className="text-end text-danger user-pointer" onClick={() => openModal(false)}>close</div>
                <div className="d-flex justify-content-center modal-inner-content mt-3 mb-3">
                    <div className="w-25 mt-2">Input URL Pic 1</div>
                    <Input
                        type="text"
                        name="picOne"
                        onChange={handleChangeForm}
                        value={form.picOne}
                        placeholder="Input URL Pic here"
                    />
                </div>
                <div className="modal-formError text-danger">{formError.picOne}</div>
                <div className="d-flex justify-content-center modal-inner-content mb-3">
                    <div className="w-25 mt-2">Input URL Pic 2</div>
                    <Input
                        type="text"
                        name="picTwo"
                        onChange={handleChangeForm}
                        placeholder="Input URL Pic here"
                        value={form.picTwo} />
                </div>
                <div className="modal-formError text-danger">{formError.picTwo}</div>
                <div className="d-flex justify-content-center modal-inner-content mb-3">
                    <div className="w-25 mt-2">Input URL Pic 3</div>
                    <Input
                        type="text"
                        name="picThree"
                        onChange={handleChangeForm}
                        placeholder="Input URL Pic here"
                        value={form.picThree} />
                </div>
                <div className="modal-formError text-danger">{formError.picThree}</div>
                <div className="d-flex justify-content-center modal-inner-content mb-3">
                    <div className="w-25 mt-2">Input URL Pic 4</div>
                    <Input
                        type="text"
                        name="picFour"
                        onChange={handleChangeForm}
                        placeholder="Input URL Pic here"
                        value={form.picFour} />
                </div>
                <div className="modal-formError text-danger">{formError.picFour}</div>
                <div className="d-flex justify-content-center modal-inner-content mb-3">
                    <div className="w-25 mt-2">Input URL Pic 5</div>
                    <Input
                        type="text"
                        name="picFive"
                        onChange={handleChangeForm}
                        placeholder="Input URL Pic here"
                        value={form.picFive} />
                </div>
                <div className="modal-formError text-danger">{formError.picFive}</div>
                <div className="text-end">
                    <Button
                        className="mx-3 my-3 w-25 rounded-pill bg-danger text-white py-3"
                        onClick={handleSubmitForm}
                    >Save</Button>
                </div>
            </div>
        </div>
    )
};

export default Modal;
