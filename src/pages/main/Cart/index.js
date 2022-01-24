/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../../../App.css";
import Button from "../../../components/base/Button"
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/base/Input'

const Cart = () => {
  const navigate = useNavigate()
  const handleBuy = () => {
    navigate("/main/checkout")
    localStorage.setItem('total-item', JSON.stringify(total))
  }
  const cartItem = JSON.parse(localStorage.getItem("item"));
  const [cart, setCart] = useState(cartItem)
  console.log(cartItem);

  const [checkedState, setCheckedState] = useState(
    new Array(cart.length).fill(false)
  )

  const getFormattedPrice = (price) => `${price.toFixed()}`;

  const [total, setTotal] = useState(0);

  const handleOnChange = (id) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === id ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + (cart[index].price * cart[index].qty);
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice)
  }

  const handleIncrement = (index) => {
    const newItems = [...cart];

    newItems[index].qty++;
    setCart(newItems);
    handleOnChange();
  }

  const handleDecrement = (index) => {
    const newItems = [...cart];
    if (newItems[index].qty <= 1) {
      newItems[index].qty = 1;
    } else {
      newItems[index].qty--;
    }

    setCart(newItems);
    handleOnChange();
  };

  const handleDelete = () => {
    localStorage.removeItem('item')
  }

  return (
    <div className='d-flex flex-column wrapper'>
      <div className='container d-flex h-100 mt-4'>
        <div className='flex-column d-flex p-2 mx-3 left-side'>
          <h3 className='fw-bold'>My Bag</h3>
          <div className='box shadow-sm p-3 mt-2 rounded'>
            <div className='d-flex flex-row justify-content-between'>
              <div>
                <Input
                  type="checkbox"
                  className="mt-2 check"
                />
                <span className='fw-500'>Select all items</span>
                <span className='mx-2 fw-light'>(1 item selected)</span>
              </div>
              <Button className='text-red bg-white' onClick={handleDelete}>Delete</Button>
            </div>
          </div>

          {cart.map((product, index) => {
            return (
              <div className='box shadow-sm p-3 mt-2 rounded'>
                <div className='d-flex flex-row justify-content-between'>
                  <label className='d-flex flex-row'>
                    <Input
                      type="checkbox"
                      name={product.Name}
                      value={product.id}
                      className="mt-3 check"
                      onChange={() => handleOnChange(index)}
                      checked={checkedState[index]}
                    />
                    <img className='mx-2 rounded' src={product.photo1} alt="" height="60px"></img>
                    <div className='ms-1 mt-1'>
                      <p className='m-0 fw-500'>{product.Name}</p>
                      <span className='fw-light'>{product.namestore}</span>
                    </div>
                  </label>
                  <div className='d-flex flex-row my-2'>
                    <Button className='btn btn-minus rounded-circle text-white' onClick={() => handleDecrement(index)}>-</Button>
                    <div className='mx-3 mt-1'>{product.qty}</div>
                    <Button className='btn bg-white rounded-circle h-75' onClick={() => handleIncrement(index)}>+</Button>
                  </div>
                  <p className='mt-3 fw-500'>Rp{product.price}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='right-side p-2'>
          <div className='box shadow-sm p-3 mt-5 rounded'>
            <p className='fw-500'>Shopping Summary</p>
            <div className='price d-flex flex-row justify-content-between'>
              <p className='fw-light'>Total price</p>
              <p className='fw-500'>Rp{getFormattedPrice(total)}</p>
            </div>
            <Button className='bg-red w-100 border-0 p-1 text-white rounded-pill' onClick={handleBuy}>Buy</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
