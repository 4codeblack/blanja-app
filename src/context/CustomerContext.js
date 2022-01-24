import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CustomerContext = createContext(null);
const CustomerProvider = (props) => {
  const [customer, setCustomer] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const customerId = JSON.parse(localStorage.getItem("customerId"));
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}customer/profile/${customerId}`)
      .then((res) => {
        setLoading(false);
        const result = res.data.data[0];
        setCustomer(result);
        console.log(result);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, []);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
