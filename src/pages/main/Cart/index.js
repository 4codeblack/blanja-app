import React, { useState } from 'react';
import "../../../App.css";
import Button from "../../../components/base/Button"
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/base/Input'

const Cart = () => {
  const navigate = useNavigate()
  const handleBuy = () => {
    navigate("/main/checkout")
  }

  const [cart, setCart] = useState([{
    id: 1,
    name: "nike",
    price: 1000000,
    qty: 1
  }, {
    id: 2,
    name: "adidas",
    price: 2500000,
    qty: 1
  }])


  const [array, setArray] = useState([])

  const [checkedState, setCheckedState] = useState(
    new Array(cart.length).fill(false)
  )

  const [total, setTotal] = useState(0);

  const handleOnChange = (id) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index + 1 === id ? !item : item
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

  const handleCheckedValue = (e) => {
    if (e.target.checked) {
      let id = e.target.value;
      setArray([...array, id])
    }
  }
  console.log(array);



  const handleIncrement = (id) => {
    const index = cart.findIndex(item => item.id === id)
    let cartItem = cart[index]
    console.log(cartItem);
    cartItem.qty++
    updatecartItem()
    handleOnChange()
  }


  const handleDecrement = (id) => {
    const index = cart.findIndex(item => item.id === id)
    let cartItem = cart[index]
    if (cartItem.qty <= 0) {
      cartItem.qty = 0;
    } else {
      cartItem.qty--
    }
    updatecartItem()
    handleOnChange()
  };

  const updatecartItem = () => {
    setCart(cart)
    console.log(cart);
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
                  className="me-3"
                />
                <span className=''>Select all items</span>
                <span className='mx-2 fw-light'>(... items selected)</span>
              </div>
              <span className='text-red'>Delete</span>
            </div>
          </div>

          {cart.map((product, index) => {
            return (
              <div className='box shadow-sm p-3 mt-2 rounded'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='d-flex flex-row'>
                  <Input 
                      type="checkbox" 
                      name={product.name} 
                      value={product.id} 
                      className="me-3 mt-3"
                      onChange={(e) => { handleCheckedValue(e); handleOnChange(product.id) } }
                      defaultChecked={false}
                      />
                    <img src="" alt=""></img>
                    <img className='mx-2' src="" alt=""></img>
                    <div>
                      <p className='m-0'>{product.name}</p>
                      <span className='fw-light'>{product.seller}</span>
                    </div>
                  </div>
                  <div className='d-flex flex-row my-2'>
                    <Button className='btn btn-minus rounded-circle text-white' onClick={() => handleDecrement(product.id)}>-</Button>
                    <div className='mx-3 mt-1'>{product.qty}</div>
                    <Button className='btn bg-white rounded-circle' onClick={() => handleIncrement(product.id)}>+</Button>
                  </div>
                  <p className='mt-2'>{product.price}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='right-side p-2'>
          <div className='box shadow-sm p-3 mt-5 rounded'>
            <p>Shopping Summary</p>
            <div className='price d-flex flex-row justify-content-between'>
              <p className='fw-light'>Total price</p>
              <p>{total}</p>
            </div>
            <Button className='bg-red w-100 border-0 p-1 text-white rounded-pill' onClick={handleBuy}>Buy</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
