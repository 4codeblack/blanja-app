import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './profile.css'

const Profile = () => {
  const [showMenuStore, setShowMenuStore] = useState(false)
  const [showMenuProduct, setShowMenuProduct] = useState(false)
  const [showMenuOrder, setShowMenuOrder] = useState(false)

  const toggleMenuStore = () => {
    if (showMenuStore) {
      setShowMenuStore(false)
    } else {
      setShowMenuStore(true)
      setShowMenuProduct(false)
      setShowMenuOrder(false)
    }
  }
  const toggleMenuProduct = () => {
    if (showMenuProduct) {
      setShowMenuProduct(false)
    } else {
      setShowMenuProduct(true)
      setShowMenuStore(false)
      setShowMenuOrder(false)
    }
  }
  const toggleMenuOrder = () => {
    if (showMenuOrder) {
      setShowMenuOrder(false)
    } else {
      setShowMenuOrder(true)
      setShowMenuStore(false)
      setShowMenuProduct(false)
    }
  }

  return (
    <Fragment>
      <div className="d-flex">
        <div className="w-25 sidebar-menu">
          <div className=" ms-5 mt-5 d-flex flex-column">
            <div className="d-flex mb-5">
              <img src={require("../../../assets/img/johannes-michael-profille-seller.png")} alt="" />
              <div className="ms-3 my-2 row">
                <div className="fw-bold">Johannes Michael</div>
                <div className="text-muted"><img className="px-1" src={require("../../../assets/icons/edit-pen-profile-seller.svg").default} alt="" />Ubah Profile</div>
              </div>
            </div>
            <div className="menu-dropdown my-3">
              {showMenuStore ? (
                <>
                  <div className="d-flex">
                    <img className="position-static" src={require("../../../assets/icons/store-icon-seller.svg").default} alt="" />
                    <div className="mx-3 my-1" onClick={toggleMenuStore}>Store</div>
                    <img className="ms-5" src={require("../../../assets/icons/arrowup-active-profile-seller.svg").default} alt="" />
                  </div>
                  <div className="ms-5"><Link to={"/main/profile/store-profile"} style={{textDecoration: 'none', color: 'grey'}}>Store Profile</Link></div>
                </>
              ) : (
                <>
                  <div className="d-flex">
                    <img className="position-static" src={require("../../../assets/icons/store-icon-seller.svg").default} alt="" />
                    <div className="mx-3 my-1 text-muted" onClick={toggleMenuStore}>Store</div>
                    <img className="ms-5" src={require("../../../assets/icons/arrow-down-muted-profile-seller.svg").default} alt="" />
                  </div>
                </>
              )}
              {showMenuProduct ? (
                <>
                  <div className="d-flex mt-3">
                    <img className="position-static" src={require("../../../assets/icons/product-icon-profile-seller.svg").default} alt="" />
                    <div className="mx-3 my-1" onClick={toggleMenuProduct}>Procuct</div>
                    <img className="ms-5" src={require("../../../assets/icons/arrowup-active-profile-seller.svg").default} alt="" />
                  </div>
                  <div className="ms-5"><Link to={"/main/profile/my-product"} style={{textDecoration: 'none', color: 'grey'}}>My Product</Link></div>
                  <div className="ms-5"><Link to={"/main/profile/selling-product"} style={{textDecoration: 'none', color: 'grey'}}>Selling Product</Link></div>
                </>
              ) : (
                <>
                  <div className="d-flex mt-3">
                    <img className="position-static" src={require("../../../assets/icons/product-icon-profile-seller.svg").default} alt="" />
                    <div className="mx-3 my-1 text-muted" onClick={toggleMenuProduct}>Product</div>
                    <img className="ms-5" src={require("../../../assets/icons/arrow-down-muted-profile-seller.svg").default} alt="" />
                  </div>
                </>
              )}
              {showMenuOrder ? (
                <>
                  <div className="d-flex mt-3">
                    <img className="position-static" src={require("../../../assets/icons/order-icon-profile-seller.svg").default} alt="" />
                    <div className="mx-3 my-1" onClick={toggleMenuOrder}>Order</div>
                    <img className="ms-5" src={require("../../../assets/icons/arrowup-active-profile-seller.svg").default} alt="" />
                  </div>
                  <div className="ms-5"><Link to={"/main/profile/my-order"} style={{textDecoration: 'none', color: 'grey'}}>My Order</Link></div>
                  <div className="ms-5"><Link to={"/main/profile/my-order"} style={{textDecoration: 'none', color: 'grey'}}>Order Cancel</Link></div>
                </>
              ) : (
                <>
                  <div className="d-flex mt-3">
                    <img className="position-static " src={require("../../../assets/icons/order-icon-profile-seller.svg").default} alt="" />
                    <div className="mx-3 my-1 text-muted" onClick={toggleMenuOrder}>Order</div>
                    <img className="ms-5" src={require("../../../assets/icons/arrow-down-muted-profile-seller.svg").default} alt="" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </Fragment>
  )
};

export default Profile;
