import { useEffect, useState } from "react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { datadt } from "./ApiCall";
import { NavLink} from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await datadt();
    
      setData(response);
      setFilter(response);
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
  const filterproduct = (type) => {
    const updateddata = data.filter((x) => x.category === type);
    setFilter(updateddata);
  };
  

  const ShowProduct = () => {
    return (
      <>
        <div className="buttonss d-flex justify-content-center mb-5 pb-5 ">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setData(data);
            }}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterproduct("men's clothing");
            }}
          >
            Mens Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterproduct("women's clothing");
            }}
          >
            Womens Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterproduct("jewelery");
            }}
          >
            jewelary{" "}
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterproduct("electronics");
            }}
          >
            Electronic{" "}
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 ">
                <div className="card h-100 text-centre p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-4">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/sproduct/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="containerproduct mt-4">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-centre">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};
export default Product;
