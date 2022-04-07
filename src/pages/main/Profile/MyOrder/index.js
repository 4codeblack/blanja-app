import React, { useState } from 'react';
import Input from '../../../../components/base/Input';

const MyOrder = () => {
  localStorage.removeItem("PictProducts")
  const [showTabAllItems, setShowTabAllItems] = useState(true)
  const [showTabGetPaid, setShowTabGetPaid] = useState(false)
  const [showTabProcessed, setShowTabProcessed] = useState(false)
  const [showTabSent, setShowTabSent] = useState(false)
  const [showTabCompleted, setShowTabCompleted] = useState(false)
  const [showTabOrderCancel, setShowOrderCancel] = useState(false)

  const toggleTabAllItems = () => {
    if (showTabAllItems === false) {
      setShowTabAllItems(true)
      setShowTabGetPaid(false)
      setShowTabProcessed(false)
      setShowTabSent(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    } else {
      setShowTabGetPaid(false)
      setShowTabProcessed(false)
      setShowTabSent(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    }
  }
  const toggleTabGetPaid = () => {
    if (showTabGetPaid === false) {
      setShowTabGetPaid(true)
      setShowTabAllItems(false)
      setShowTabProcessed(false)
      setShowTabSent(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    } else {
      setShowTabAllItems(false)
      setShowTabProcessed(false)
      setShowTabSent(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    }
  }
  const toggleTabProcessed = () => {
    if (showTabProcessed === false) {
      setShowTabProcessed(true)
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
      setShowTabSent(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    } else {
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
      setShowTabSent(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    }
  }
  const toggleTabSent = () => {
    if (showTabSent === false) {
      setShowTabSent(true)
      setShowTabProcessed(false)
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    } else {
      setShowTabProcessed(false)
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
      setShowTabCompleted(false)
      setShowOrderCancel(false)
    }
  }
  const toggleTabCompleted = () => {
    if (showTabCompleted === false) {
      setShowTabCompleted(true)
      setShowTabSent(false)
      setShowTabProcessed(false)
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
      setShowOrderCancel(false)
    } else {
      setShowTabSent(false)
      setShowTabProcessed(false)
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
      setShowOrderCancel(false)
    }
  }
  const toggleTabOrderCancel = () => {
    if (showTabOrderCancel === false) {
      setShowOrderCancel(true)
      setShowTabCompleted(false)
      setShowTabSent(false)
      setShowTabProcessed(false)
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
    } else {
      setShowTabCompleted(false)
      setShowTabSent(false)
      setShowTabProcessed(false)
      setShowTabAllItems(false)
      setShowTabGetPaid(false)
    }
  }
  

  return (
    <div className="outer bg-light w-75">
      <div className="inner m-5 bg-white rounded">
        <div className="d-flex flex-column">
          <div className="product-upper px-5 pt-5">
            <div className="fw-bold">My Order</div>
            <div className="d-flex mt-3">
              <div onClick={toggleTabAllItems} className={showTabAllItems ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>All Items</div>
              <div onClick={toggleTabGetPaid} className={showTabGetPaid ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>Get Paid</div>
              <div onClick={toggleTabProcessed} className={showTabProcessed ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>Processed</div>
              <div onClick={toggleTabSent} className={showTabSent ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>Sent</div>
              <div onClick={toggleTabCompleted} className={showTabCompleted ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>Completed</div>
              <div onClick={toggleTabOrderCancel} className={showTabOrderCancel ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>Order Cancel</div>
            </div>
            <hr />
          </div>
          <div className="profile-lower px-5 pt-3 my-3">
            <img className="position-absolute px-2 py-2" src={require("../../../../assets/icons/search_loop_myproduct.svg").default} alt="" />
            <Input
              className="rounded-pill border ps-5 py-2"
              placeholder="Search"
              type="text" />
            <div className="border rounded overflow-hidden my-3">
              <table className="w-100">
                <tr className="bg-light rounded-pill border">
                  <th className="py-3">Product Name <img className="px-3 " src={require("../../../../assets/icons/switch-sort.svg").default} alt="" /></th>
                  <th>Price <img className="px-3 " src={require("../../../../assets/icons/switch-sort.svg").default} alt="" /></th>
                  <th>Stock <img className="px-3 " src={require("../../../../assets/icons/switch-sort.svg").default} alt="" /></th>
                </tr>
              </table>
              <div className='text-center p-5'><img src={require("../../../../assets/icons/nihil-order-cancel.svg").default} alt="" /></div>
              <div className="text-center p-5">There are no orders yet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MyOrder;
