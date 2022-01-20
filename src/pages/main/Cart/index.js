import React from 'react';
import "../../../App.css";
import Navbar from "../../../components/module/Navbar"
import Button from "../../../components/base/Button"

const Cart = () => {
  return (
    <div className='d-flex flex-column wrapper'>
      <Navbar></Navbar>
      <div className='container d-flex h-100 mt-4'>
        <div className='flex-column d-flex p-2 mx-3 left-side'>
          <h3 className='fw-bold'>My Bag</h3>
          <div className='box shadow-sm p-3 mt-2 rounded'>
            <div className='d-flex flex-row justify-content-between'>
              <div>
                <img src="" alt=""></img>
                <span className='mx-3'>Select all items</span>
                <span className='fw-light'>(... items selected)</span>
              </div>
              <span className='text-danger'>Delete</span>
            </div>
          </div>
          <div className='box shadow-sm p-3 mt-2 rounded'>
            <div className='d-flex flex-row justify-content-between'>
              <div className='d-flex flex-row'>
                <img src="" alt=""></img>
                <img className='mx-2' src="" alt="product"></img>
                <div>
                  <p className='m-0'>nama product</p>
                  <span className='fw-light'>merk</span>
                </div>
              </div>
              <div>
                plus minus
              </div>
              <p className='m-0'>price</p>
            </div>
          </div>
        </div>
        
        <div className='right-side p-2'>
          <div className='box shadow-sm p-3 mt-5 rounded'>
            <p>Shopping Summary</p>
            <div className='price d-flex flex-row justify-content-between'>
              <p className='fw-light'>Total price</p>
              <p>Total</p>
            </div>
            <Button className='button w-100 border-0 p-1 text-white'>Buy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
