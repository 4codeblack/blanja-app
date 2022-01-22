import React, { useState } from 'react';
import Input from '../../../../components/base/Input';

const MyProduct = () => {
  const [showTabAllItems, setShowTabAllItems] = useState(true)
  const [showTabSoldOut, setShowTabSoldOut] = useState(false)
  const [showTabArchived, setShowTabArchived] = useState(false)

  const toggleTabAllItems = () => {
    if (showTabAllItems === false) {
      setShowTabAllItems(true)
      setShowTabSoldOut(false)
      setShowTabArchived(false)
    } else {
      setShowTabSoldOut(false)
      setShowTabArchived(false)
    }
  }
  const toggleTabSoldOut = () => {
    if (showTabSoldOut === false) {
      setShowTabSoldOut(true)
      setShowTabAllItems(false)
      setShowTabArchived(false)
    } else {
      setShowTabAllItems(false)
      setShowTabArchived(false)
    }
  }
  const toggleTabArchived = () => {
    if (showTabArchived === false) {
      setShowTabArchived(true)
      setShowTabAllItems(false)
      setShowTabSoldOut(false)
    } else {
      setShowTabAllItems(false)
      setShowTabSoldOut(false)
    }
  }

  return (
    <div className="outer bg-light w-75">
      <div className="inner m-5 bg-white rounded">
        <div className="d-flex flex-column">
          <div className="product-upper px-5 pt-5">
            <div className="fw-bold">My Product</div>
            <div className="d-flex mt-3">
              <div onClick={toggleTabAllItems} className={showTabAllItems ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>All Items</div>
              <div onClick={toggleTabSoldOut} className={showTabSoldOut ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>Sold Out</div>
              <div onClick={toggleTabArchived} className={showTabArchived ? "user-pointer text-danger mx-5" : "user-pointer px-5"}>Archived</div>
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
              <div className='text-center p-5'><img src={require("../../../../assets/icons/empty-table.svg").default} alt="" /></div>
              <div className="text-center p-5">You don't have a product yet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MyProduct;
