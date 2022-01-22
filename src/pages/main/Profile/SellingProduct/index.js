import React from 'react';
import Button from '../../../../components/base/Button';
import Input from '../../../../components/base/Input';

const SellingProduct = () => {
  return (
    <div className="outer bg-light w-75">
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Inventory</div>
            <hr />
          </div>
          <div className="lower px-5 pt-3">
            <div className="text-muted">Name of goods</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="text"
              placeholder="input name of goods" />
          </div>
        </div>
      </div>
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Item Details</div>
            <hr />
          </div>
          <div className="lower px-5 pt-3">
            <div className="text-muted">Unit Price</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="number"
              placeholder="input in rupiah" />
            <div className="text-muted">Stock</div>
            <Input
              className="w-50 border py-2 mt-3 mb-5 rounded-3 border-2"
              type="number"
              placeholder="input in buah" />
          </div>
        </div>
      </div>
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Photo of goods</div>
            <hr />
          </div>
          <div className="lower px-5 pt-3">
            <div className="border rounded-3 my-3">
              <div className="d-flex flex-column">
                <div className="d-flex p-3 align-items-center">
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={190} height={190} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                  <img className="mx-3" src={require("../../../../assets/icons/goods-pic.png")} width={120} height={120} alt="" />
                </div>
                <div className="ms-5 text-muted ">Foto utama</div>
                <div className="w-100 px-5"><hr /></div>
                <div className="text-center my-5"><Button className="w-25 bg-transparent text-muted border rounded-pill p-3">Upload Foto</Button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inner m-5 bg-white rounded-3">
        <div className="d-flex flex-column">
          <div className="upper px-5 pt-5">
            <div className="fw-bold">Description</div>
            <hr />
          </div>
          <div className="lower px-5 pt-3">
            <textarea
              type="text"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum, quis architecto mollitia, aliquam debitis quos iure modi fugiat dicta nostrum deserunt minus possimus praesentium exercitationem doloribus nisi, vero accusamus!"
              className="desc-box mb-5"
            />
          </div>
        </div>
      </div>
      <div className="text-end me-5 mb-5"><Button className="rounded-pill px-5 py-3 text-white bg-danger">Jual</Button></div>
    </div>
  )
};

export default SellingProduct;
