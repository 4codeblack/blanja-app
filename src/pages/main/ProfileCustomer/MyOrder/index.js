import React, { Fragment } from "react";

const MyOrder = () => {
  return (
    <Fragment>
      <section className="customer-main-content">
        <div className="my-order">
          <h5 className="my-order-title">My Order</h5>
          <nav className="my-order-navbar">
            <ul className="d-flex justify-content-between align-items-center">
              <li className="nav-order-items">All items</li>
              <li>Not yet paid</li>
              <li>Packed</li>
              <li>Sent</li>
              <li>Completed</li>
              <li>Order cancel</li>
            </ul>
          </nav>
        </div>
      </section>
    </Fragment>
  );
};

export default MyOrder;
