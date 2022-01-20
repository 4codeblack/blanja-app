import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./pages/main/Cart"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
