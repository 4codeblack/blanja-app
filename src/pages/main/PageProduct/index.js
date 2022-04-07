/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../../components/module/Cards"
import Button from "../../../components/base/Button";
import axios from "axios";
import * as AiIcons from "react-icons/ai";

const PageProduct = () => {
    localStorage.removeItem("PictProducts")
    const [product, setProduct] = useState({
    })
    const { id } = useParams()
    const navigate = useNavigate()
    const [num, setNum] = useState(1)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL_BACKEND}customer/product/${id}`)
            .then((res) => {
                const result = res.data.data[0]
                setProduct(result)
            })
            .catch((err) => {
            })
    }, [])

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL_BACKEND}customer/all-product`)
            .then((res) => {
                const result = res.data.data;
                setProducts(result);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const handleIncrement = () => {
        setNum(num + 1)
    }

    const handleDecrement = () => {
        if (num <= 1) {
            setNum(1)
        } else {
            setNum(num - 1)
        }
    }

    const handleBuy = () => {
        navigate("/main/cart")
        localStorage.setItem('item', JSON.stringify([product]))
    }

    const cartItem = JSON.parse(localStorage.getItem("item"));
    const [cart, setCart] = useState(cartItem)

    const handleAdd = () => {
        const newItem = {
            Name: product.Name,
            qty: 1,
            photo1: product.photo1,
            price: product.price,
            namestore: product.namestore
        };
    
        const newItems = [...cart, newItem];

        localStorage.setItem('item', JSON.stringify(newItems))
        setCart(newItems);
    }

    return (
        <div className="wrapper">
            <div className="container d-flex flex-column h-100 mt-4">
                <p className="fw-light">Home &gt; Category &gt; Clothes</p>
                <div className="d-flex flex-row mt-3">
                    <div className="d-flex w-50 flex-wrap">
                        {/* <img className="photo" src={product.photo1} alt="" />
                        <img className="photo" src={product.photo2} alt="" />
                        <img className="photo" src={product.photo3} alt="" />
                        <img className="photo" src={product.photo4} alt="" /> */}
                        <div className=''>
                              <img className='photo' src={product.photo1} alt="" height="250px"/>
                              <img className='mx-3 photo' src={product.photo1} alt="" height="250px"/>
                          </div>
                          <div className='my-3'>
                              <img className='photo' src={product.photo1} alt="" height="250px"/>
                              <img className='mx-3 photo' src={product.photo1} alt="" height="250px"/>
                          </div>
                    </div>
                    <div className="w-50 d-flex w-50 flex-column ms-3">
                        <p className="h3">{product.Name}</p>
                        <span className="fw-light">{product.namestore}</span>
                        <div className="d-flex flex-row mt-1">
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <span className="fw-light ms-1">(10)</span>
                        </div>
                        <span className="fw-light mt-3">Price</span>
                        <p className="h4 fw-bold">Rp{product.price}</p>
                        <p className="mt-2">Color</p>
                        <div>
                            <Button className='btn rounded-circle bg-primary h-100'></Button>
                            <Button className='btn rounded-circle bg-danger h-100 ms-2'></Button>
                            <Button className='btn rounded-circle bg-warning h-100 ms-2'></Button>
                            <Button className='btn rounded-circle bg-secondary h-100 ms-2'></Button>
                        </div>
                        <div className="d-flex flex-row my-2">
                            <div className="mt-3">
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
                            <div className="mx-5 mt-3">
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
                        <div className="d-flex flex-row mt-2">
                            <Button className="border border-dark bg-white w-25 p-2 rounded-pill">
                                Chat
                            </Button>
                            <Button className="border border-dark bg-white w-25 p-2 rounded-pill mx-2" onClick={handleAdd}>
                                Add bag
                            </Button>
                        </div>
                        <Button
                            className="bg-red w-50 border-0 p-2 text-white rounded-pill mt-4"
                            onClick={handleBuy}
                        >
                            Buy now
                        </Button>
                    </div>
                </div>
                <p className="h4 mt-4">Informasi Produk</p>
                <div className="d-flex flex-column mt-3">
                    <span>Condition</span>
                    <span className="text-red">{product.conditions}</span>
                </div>
                <p className="h5 mt-3">Description</p>
                <p className="fw-light">{product.description}</p>
                <p className="h4 mt-4">Product Review</p>
                <p className="h1 fw-500">5.0<span className="fw-light h6">/10</span></p>
                <div className="d-flex flex-row mt-1">
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                            <AiIcons.AiFillStar className="star-icons mt-1" />
                        </div>
                <hr></hr>
                <p className="h3 mt-4">You can also like this</p>
                <p className="m-0 fw-light">You’ve never seen it before!</p>
                <section className="d-flex flex-wrap">
                    {products.map((product, index) => (
                        <Card
                            productPhoto={product.photo1}
                            productName={product.Name}
                            productPrice={product.price}
                            storeName={product.namestore}
                            onClick={() => navigate(`/main/page-product/${product.id}`)}
                        />
                    ))}
                </section>
            </div>
        </div>
    )
};

export default PageProduct;
