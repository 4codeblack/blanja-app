import React, { useState } from 'react';
import "../../../App.css";
import Navbar from "../../../components/module/Navbar"
import Button from "../../../components/base/Button"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Cart = () => {
  const [num, setNum] = useState(1)
  const navigate = useNavigate()
  const handleBuy = () => {
    navigate("/checkout")
  }

  const handleIncrement = () => {
    setNum(num + 1)
  }

  const handleDecrement = () => {
    if (num <= 1) {
      setNum(1)
    } else {
      setNum(num - 1)
    }
  }

  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const parent = (
    <FormControlLabel
      label=""
      control={
        <Checkbox
          defaultChecked color="error"
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleChange1}
        />
      }
    />
  );

  const children = (
    <Box>
      <FormControlLabel
        label=""
        control={<Checkbox defaultChecked color="error" checked={checked[0]} onChange={handleChange2} />}
      />
    </Box>
  );

  return (
    <div className='d-flex flex-column wrapper'>
      <Navbar></Navbar>
      <div className='container d-flex h-100 mt-4'>
        <div className='flex-column d-flex p-2 mx-3 left-side'>
          <h3 className='fw-bold'>My Bag</h3>
          <div className='box shadow-sm p-3 mt-2 rounded'>
            <div className='d-flex flex-row justify-content-between'>
              <div>
                {parent}
                <span className=''>Select all items</span>
                <span className='mx-2 fw-light'>(... items selected)</span>
              </div>
              <span className='text-danger'>Delete</span>
            </div>
          </div>
          <div className='box shadow-sm p-3 mt-2 rounded'>
            <div className='d-flex flex-row justify-content-between'>
              <div className='d-flex flex-row'>
                {children}
                <img src="" alt=""></img>
                <img className='mx-2' src="" alt="product"></img>
                <div>
                  <p className='m-0'>nama product</p>
                  <span className='fw-light'>merk</span>
                </div>
              </div>
              <div className='d-flex flex-row my-2'>
                <Button className='btn btn-minus rounded-circle text-white' onClick={handleDecrement}>-</Button>
                <div className='mx-3 mt-1'>{num}</div>
                <Button className='btn bg-white rounded-circle' onClick={handleIncrement}>+</Button>
              </div>
              <p className='mt-2'>price</p>
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
            <Button className='bg-danger w-100 border-0 p-1 text-white' onClick={handleBuy}>Buy</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
