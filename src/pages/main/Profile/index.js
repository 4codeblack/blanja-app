import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const Profile = () => {
  return (
    <Fragment>
      <div>halman profiles indux</div>
      <Link to={"/main/profile/my-order"}>myorder</Link><br/>
      <Link to={"/main/profile/my-product"}>myproduct</Link><br/>
      <Link to={"/main/profile/selling-product"}>sellingproduct</Link><br/>
      <Link to={"/main/profile/store-profile"}>storeprofile</Link><br/>
      <Outlet></Outlet>
    </Fragment>
  )
};

export default Profile;
