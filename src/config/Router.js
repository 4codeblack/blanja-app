import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "../pages/main/Cart";
import Checkout from '../pages/main/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;