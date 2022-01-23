import React, { useState } from 'react';
import "../../../App.css";
import "./checkout.css"
import Button from '../../../components/base/Button';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [modal, setModal] = useState(false);
  const [modalAddress, setModalAddress] = useState(false);

  const handleCloseModal = () => setModal(false);
  const handleModal = () => setModal(true);

  const handleCloseModalAddress = () => setModalAddress(false);
  const handleModalAddress = () => setModalAddress(true);

  return (
    <div className='d-flex flex-column wrapper'>
      <div className='container d-flex h-100 mt-4'>
        <div className='flex-column d-flex p-2 mx-3 left-side'>
          <h3 className='fw-bold'>Checkout</h3>
          <p className='mt-2'>Shipping Address</p>
          <div className='box shadow-sm p-3 rounded'>
            <div className='d-flex flex-column justify-content-between'>
              <p className='fw-bold'>Andreas Jane</p>
              <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
              <Button className='btn-address p-1 bg-white border fw-light' onClick={handleModalAddress}>Choose another address</Button>
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
              <p className='text-red'>Total</p>
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
                <p>Payment method</p>
              </div>
              <hr></hr>
              <div className='p-3'>
                <p>Shopping Summary</p>
                <div className='price d-flex flex-row justify-content-between'>
                  <span className='fw-light'>Order</span>
                  <span>Total</span>
                </div>
                <div className='price d-flex flex-row justify-content-between mt-1'>
                  <span className='fw-light'>Delivery</span>
                  <span>Total</span>
                </div>
              </div>
              <div className='footer navbar p-3 d-flex flex-row justify-content-between'>
                <div className='d-flex flex-column'>
                  <span>Shopping summary</span>
                  <span className='text-red'>Total</span>
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
                <div className='box p-3 rounded border border-danger'>
                  <div className='d-flex flex-column justify-content-between'>
                    <p className='fw-bold'>Andreas Jane</p>
                    <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                    <Link to="/" className='text-decoration-none text-red fw-bold'>Change address</Link>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Checkout;
