import React, { useState } from 'react';
import "../../../App.css";
import "./checkout.css"
import Navbar from "../../../components/module/Navbar"
import Button from '../../../components/base/Button';
import Modal from 'react-modal';

const Checkout = () => {
  // const [modal, setModal] = useState(false)

  // const handleModal = () => {
  //   if (!modal) {
  //     setModal(true)
  //   }
  // }

  // const handleCloseModal = () => {
  //   if (modal) {
  //     setModal(false)
  //   }
  // }

  const [modal, setModal] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleModal = () => setModal(true);

  return (
    <div className='d-flex flex-column wrapper'>
      <Navbar></Navbar>
      <div className='container d-flex h-100 mt-4'>
        <div className='flex-column d-flex p-2 mx-3 left-side'>
          <h3 className='fw-bold'>Checkout</h3>
          <p className='mt-2'>Shipping Address</p>
          <div className='box shadow-sm p-3 rounded'>
            <div className='d-flex flex-column justify-content-between'>
              <p>Andreas Jane</p>
              <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
              <Button className='btn-address p-1 bg-white border fw-light'>Choose another address</Button>
            </div>
          </div>
          <div className='box shadow-sm p-3 mt-2 rounded'>
            <div className='d-flex flex-row justify-content-between'>
              <div className='d-flex flex-row'>
                <img className='mx-2' src="" alt="product"></img>
                <div>
                  <p className='m-0'>nama product</p>
                  <span className='fw-light'>merk</span>
                </div>
              </div>
              <p className='mt-2'>price</p>
            </div>
          </div>
        </div>
        <div className='right-side p-2'>
          <div className='box shadow-sm p-3 mt-5 rounded'>
            <p>Shopping Summary</p>
            <div className='price d-flex flex-row justify-content-between'>
              <span className='fw-light'>Order</span>
              <span>Total</span>
            </div>
            <div className='price d-flex flex-row justify-content-between mt-1'>
              <span className='fw-light'>Delivery</span>
              <span>Total</span>
            </div>
            <hr />
            <div className='price d-flex flex-row justify-content-between'>
              <p className=''>Shopping Summary</p>
              <p className='text-danger'>Total</p>
            </div>
            <Button className='button w-100 border-0 p-1 text-white' onClick={handleModal}>Select Payment</Button>
          </div>
          <div>
            <Modal isOpen={modal}
              onRequestClose={handleModal}
              contentLabel="My dialog">
              <div>My modal dialog.</div>
              <button onClick={handleCloseModal}>Close modal</button>
            </Modal>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Checkout;
