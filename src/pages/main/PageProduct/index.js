import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import shoe from "../../../assets/img/cruzrone-shoe-l6XXkk 1.svg";
import star from "../../../assets/img/activated.svg";
import Button from "../../../components/base/Button";
import axios from "axios";

const PageProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    namestore: "",
    description: "",
    price: "",
    qty: "",
    condition: "",
    photo: ""
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [num, setNum] = useState(1);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}customer/product/${id}`)
      .then((res) => {
        const result = res.data.data[0];
        setProduct(result);
        console.log(result);
      })
      .catch((err) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBuy = () => {
    navigate("/main/cart");
  };

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    if (num <= 1) {
      setNum(1);
    } else {
      setNum(num - 1);
    }
  };

  return (
    <div className="wrapper">
      <div className="container d-flex flex-column h-100 mt-4">
        <p className="fw-light">Home &gt; Category &gt; Shoes</p>
        <div className="d-flex flex-row mt-3">
          <div className="d-flex w-50 flex-wrap justify-content-around">
            <img className="" src={shoe} alt="" />
            <img className="" src={shoe} alt="" />
            <img className="" src={shoe} alt="" />
            <img className="" src={shoe} alt="" />
            {/* <div className=''>
                            <img className='' src={shoe} alt="" />
                            <img className='mx-3' src={shoe} alt="" />
                        </div>
                        <div className='my-3'>
                            <img className='' src={shoe} alt="" />
                            <img className='mx-3' src={shoe} alt="" />
                        </div> */}
          </div>
          <div className="w-50 d-flex w-50 flex-column">
            <p className="h3">{product.Name}</p>
            <span className="fw-light">{product.namestore}</span>
            <img className="float-left" src={star} alt="" height={"20px"}></img>
            <span className="fw-light mt-2">Price</span>
            <p className="h3">{product.price}</p>
            <p className="mt-2">Color</p>
            <div className="d-flex flex-row my-2">
              <div className="">
                <p>Size</p>
                <div className="d-flex flex-row my-2">
                  <Button
                    className="btn btn-minus rounded-circle text-white"
                    onClick={handleDecrement}
                  >
                    -
                  </Button>
                  <div className="mx-3 mt-1">{num}</div>
                  <Button
                    className="btn bg-white rounded-circle"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="mx-5">
                <p>Jumlah</p>
                <div className="d-flex flex-row my-2">
                  <Button
                    className="btn btn-minus rounded-circle text-white"
                    onClick={handleDecrement}
                  >
                    -
                  </Button>
                  <div className="mx-3 mt-1">{num}</div>
                  <Button
                    className="btn bg-white rounded-circle"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row">
              <Button className="border border-dark bg-white w-25 p-2 rounded-pill">
                Chat
              </Button>
              <Button className="border border-dark bg-white w-25 p-2 rounded-pill mx-2">
                Add bag
              </Button>
            </div>
            <Button
              className="bg-red w-50 border-0 p-2 text-white rounded-pill mt-3"
              onClick={handleBuy}
            >
              Buy now
            </Button>
          </div>
        </div>
        <p className="h4 mt-3">Informasi Produk</p>
        <div className="d-flex flex-column mt-3">
          <span>Condition</span>
          <span className="text-red">{product.conditions}</span>
        </div>
        <p className="h5 mt-3">Description</p>
        <p className="fw-light">{product.description}</p>
        <p className="h4 mt-4">Product Review</p>
        <hr></hr>
        <p className="h3 mt-4">You can also like this</p>
        <p className="m-0 fw-light">You’ve never seen it before!</p>
        {/* <Card></Card> */}
      </div>
    </div>
  );
};

export default PageProduct;
