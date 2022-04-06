import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const ShippingAddress = () => {
  const customerId = JSON.parse(localStorage.getItem("customerId"));
  const [customerAddress, setCustomerAddress] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}customer/address/${customerId}`)
      .then((res) => {
        const result = res.data.data;
        setCustomerAddress(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <section className="customer-main-content">
        <div className="shipping-address">
          <h5 className="shipping-address-title">Choose another address</h5>
          <p className="shipping-address-text">Manage your shipping address</p>
        </div>

        <div className="add-new-address">
          <h5>Add new address</h5>
        </div>

        {customerAddress.map((address, index) => (
          <div className="default-address">
            <p className="recipient-name mb-0">{address.receiptname}</p>
            <p className="complete-address mt-0">
              {address.address}, {address.city}, {address.postalcode}
            </p>

            <p className="change-address">Change address</p>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default ShippingAddress;
