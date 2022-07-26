import React from "react";
import Navbar from "../compantents/Navbar/Navbar";
import Product from "../compantents/Product/product";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="card bg-dark text-white ">
        <img
          src="https://i.picsum.photos/id/1021/2048/1206.jpg?hmac=fqT2NWHx783Pily1V_39ug_GFH1A4GlbmOMu8NWB3Ts"
          className="card-img"
          height="530px"
          alt=" Not found "
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container ">
            <h5 className="card-title fw-bold fs-1">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">Checkout out New Arrival.</p>
          </div>
        </div>
      </div>
      <Product/>
    </>
  );
}
