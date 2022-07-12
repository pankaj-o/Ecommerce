import React, { useState, useEffect } from "react";
import { datadt } from "./ApiCall";
import  Skeleton  from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const ShowProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => { 
      setLoading(true);
      const response = await datadt();
      
      setProduct(response[id]);
      setLoading(false);
    };
    getProduct();
  }, [loading]);
  const Loading = () => {
    return <>
    <div className="col md-3">
          <Skeleton height={350} />
        </div>
        <div className="col md-3">
          <Skeleton height={350} />
        </div>
        <div className="col md-3">
          <Skeleton height={350} />
        </div>
        <div className="col md-3">
          <Skeleton height={350} />
        </div></>;
  };

  const SingleProduct = () => {
    return (
      <>
      <Navbar/>
        <div className="col-md-6 ">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead">
              Rating{product.rating}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 my-3 fw-bold">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark px-4 py-2">
              Add to cart
            </button>
            <NavLink to="/cart" className="btn btn-dark">
              Go to cart
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className=" row py-5">
          {loading ? <Loading /> : <SingleProduct />}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
