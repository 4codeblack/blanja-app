import React from 'react';
import Button from '../../../../components/base/Button';
import Input from '../../../../components/base/Input';

const StoreProfile = () => {
  return (
    <div className="outer bg-light w-75">
      <div className="inner m-5 bg-white rounded">
        <div className="d-flex flex-column">
          <div className="profile-upper px-5 pt-5">
            <div className="fw-bold">My Profile Store</div>
            <div className="text-muted mt-1">Manage your profile information</div>
            <hr />
          </div>
          <div className="profile-lower d-flex justify-content-between px-5 pt-3">
            <div className="w-75">
              <div className="d-flex mb-3 ms-5">
                <div className="w-50 text-muted">Store Name</div>
                <Input
                  type="text"
                  placeholder="Johannes Michael"
                />
              </div>
              <div className="d-flex mb-3 ms-5">
                <div className="w-50 text-muted">Email</div>
                <Input
                  type="email"
                  placeholder="johanes@gmail.com"
                />
              </div>
              <div className="d-flex mb-3 ms-5">
                <div className="w-50 text-muted">Phone number</div>
                <Input
                  type="number"
                  placeholder="08901289012"
                />
              </div>
              <div className="d-flex mb-5 ms-5">
                <div className="w-50 text-muted">Store description</div>
                <textarea
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum, quis architecto mollitia, aliquam debitis quos iure modi fugiat dicta nostrum deserunt minus possimus praesentium exercitationem doloribus nisi, vero accusamus!"
                  className="desc-box"
                />
              </div>
              <Button className="bg-danger text-white rounded-pill px-5 py-2 mb-5">Save</Button>
            </div>
            <span className="flex-shrink-1 vertical-line" />
            <div className="flex-shrink-1">
              <div className="my-3 mx-1"><img src={require("../../../../assets/img/johannes-michael-big-pp.png")} alt="" /></div>
              <Button className="bg-transparent border rounded-pill border-2 px-3 py-1 text-muted">Select Image</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StoreProfile;
