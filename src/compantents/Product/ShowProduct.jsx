import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../App";
import Skeleton from "react-loading-skeleton";
import { useParams, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ShowProduct = () => {
  
  const {Adata,ItemAdded} = useContext(cartContext);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setProduct([Adata[id]]);
      setLoading(false);
    };

    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
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
        </div>
      </>
    );
  };

  const SingleProduct = () => {
    return (
      <>
        <Navbar />
        <div className=" d-flex justify-content-center" key={id}>
          <div className=" d-flex justify-content-center p-3">
            <img
              className=" d-flex justify-content-center p-3 mt-60"
              src={product[0] && product[0].image}
              alt={product[0] && product[0].title}
              height="400px"
              width="400px"
            />
            <div className="col-md-6 p-3">
              <h4 className="text-uppercase text-black-50">
                {product[0] && product[0].category}
              </h4>
              <h1 className="display-5 p-2">
                {product[0] && product[0].title}
              </h1>
              <p className="lead p-1">
                Rating{product[0] && product[0].rating.rate}
                <i className="fa fa-star p-2"></i>
              </p>
              <h3 className="display-6 my-1 p-2 fw-bold">
                ${product[0] && product[0].price}
              </h3>
              <p className="lead ">{product[0] && product[0].description}</p>
              <button
                className="btn p-1 btn-outline-dark px-4 py-2"
                onClick={()=>ItemAdded(id)}>
             
              Add to cart
              </button>
              
              <NavLink to ="/cart" className="btn  ms-3 btn-dark">
                Go to cart
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-2">
        <div className=" row ">{loading ? <Loading /> : <SingleProduct />}</div>
      </div>
    </>
  );
};

export default ShowProduct;





