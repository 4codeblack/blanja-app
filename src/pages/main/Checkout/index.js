/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import "../../../App.css";
import "./checkout.css"
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import Modal from 'react-modal';
import axios from 'axios';
import gopay from "../../../assets/img/Logo-GoPay-Vector-CDR-dan-PNG 1.svg";
import pos from "../../../assets/img/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7 1.svg"

const Checkout = () => {
  const [modal, setModal] = useState(false);
  const [modalAddress, setModalAddress] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleModal = () => setModal(true);

  const handleCloseModalAddress = () => setModalAddress(false);
  const handleModalAddress = () => setModalAddress(true);

  const cartItem = JSON.parse(localStorage.getItem("item"));
  const cartTotal = JSON.parse(localStorage.getItem("total-item"));

  const delivery = 10000
  const cartTotalSummary = cartTotal + delivery

  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}customer/address/180649`)
      .then((res) => {
        console.info(res.data);
        const result = res.data.data;
        setAddress(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const changeAddress = () => {
  }

  return (
    <div className='d-flex flex-column wrapper'>
      <div className='container d-flex h-100 mt-4'>
        <div className='flex-column d-flex p-2 mx-3 left-side'>
          <h3 className='fw-bold'>Checkout</h3>
          <p className='mt-2'>Shipping Address</p>
          <div className='box shadow-sm p-3 rounded'>
            <div className='d-flex flex-column justify-content-between'>
              <p className='fw-bold'>Jane</p>
              <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
              <Button className='btn-address p-1 bg-white border fw-light' onClick={handleModalAddress}>Choose another address</Button>
            </div>
          </div>
          {cartItem.map((product, index) => {
            return (
              <div className='box shadow-sm p-3 mt-2 rounded'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='d-flex flex-row'>
                    <img className='mx-2 rounded' src={product.photo1} alt="" height="60px"></img>
                    <div className='ms-2 mt-1'>
                      <p className='m-0 fw-500'>{product.Name}</p>
                      <span className='fw-light'>{product.namestore}</span>
                    </div>
                  </div>
                  <p className='mt-4 fw-500'>Rp{product.price}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='right-side p-2'>
          <div className='box shadow-sm p-3 mt-5 rounded'>
            <p className='fw-500'>Shopping Summary</p>
            <div className='price d-flex flex-row justify-content-between'>
              <span className='fw-light'>Order</span>
              <span className='fw-500'>Rp{cartTotal}</span>
            </div>
            <div className='price d-flex flex-row justify-content-between mt-1'>
              <span className='fw-light'>Delivery</span>
              <span className='fw-500'>Rp{delivery}</span>
            </div>
            <hr />
            <div className='price d-flex flex-row justify-content-between'>
              <p className='fw-500'>Shopping Summary</p>
              <p className='text-red fw-500'>Rp{cartTotalSummary}</p>
            </div>
            <Button className='bg-red w-100 border-0 p-1 text-white rounded-pill' onClick={handleModal}>Select Payment</Button>
          </div>

          {/* modal */}
          <div>
            <Modal isOpen={modal}
              onRequestClose={handleModal}
              onHide={handleCloseModal}
              className="modal-style"
              overlayClassName="overlay"
            >
              <div className='navbar justify-content-start'>
                <Button class='bg-white fw-light btn-close p-3' onClick={handleCloseModal} type="button" aria-label="Close">
                </Button>
                <span className='h5 mt-1 fw-normal'>Payment</span>
              </div>
              <div className='p-3'>
                <p className='fw-500'>Payment method</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className="d-flex flex-row">
                    <img className='' src={gopay} alt="" />
                    <h6 className='ms-4 mt-1 fw-500'>Gopay</h6>
                  </div>
                  <Input
                    type="checkbox"
                    className="mt-1 check"
                  />
                </div>
                <div className='d-flex justify-content-between mt-4'>
                  <div className="d-flex flex-row">
                    <img className='me-4' src={pos} alt="" />
                    <h6 className='ms-4 mt-1 fw-500'>Pos Indonesia</h6>
                  </div>
                  <Input
                    type="checkbox"
                    className="mt-1 check"
                  />
                </div>
              </div>
              <hr></hr>
              <div className='p-3'>
                <p className='fw-500'>Shopping Summary</p>
                <div className='price d-flex flex-row justify-content-between'>
                  <span className='fw-light'>Order</span>
                  <span className='fw-500'>Rp{cartTotal}</span>
                </div>
                <div className='price d-flex flex-row justify-content-between mt-1'>
                  <span className='fw-light'>Delivery</span>
                  <span className='fw-500'>Rp{delivery}</span>
                </div>
              </div>
              <div className='navbar p-3 d-flex flex-row justify-content-between mt-5'>
                <div className='d-flex flex-column'>
                  <span className='fw-500'>Shopping summary</span>
                  <span className='text-red fw-500'>Rp{cartTotalSummary}</span>
                </div>
                <Button className='bg-red border-0 p-1 text-white btn-address' onClick={handleModal}>Buy</Button>
              </div>

            </Modal>
            <Modal isOpen={modalAddress}
              onRequestClose={handleModalAddress}
              onHide={handleCloseModalAddress}
              className="modal-style-address"
              overlayClassName="overlay"
            >
              <Button class='float-end bg-white fw-light btn-close p-3' onClick={handleCloseModalAddress} type="button" aria-label="Close">

              </Button>
              <div className='p-4'>
                <h5 className='text-center mt-2'>Choose another address</h5>
                <Button className='add-new w-100 bg-white p-4 my-3 fw-light rounded'>Add new address</Button>
                {address.map((item, index) => {
                  return (
                    <div className='box p-3 rounded border border-danger'>
                      <div className='d-flex flex-column justify-content-between'>
                        <p className='fw-bold'>{item.receiptname}</p>
                        <p>{`${item.address} Perumahan Sapphire Mediterania Blok C3 No.12 Mekarsari, Kec. Cimanggis, Kota Depok`}</p>
                        <a href="#" className='text-decoration-none text-red fw-bold bg-white w-25' onClick={changeAddress}>Change address</a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Checkout;
