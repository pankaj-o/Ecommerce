import React from "react";
import { Navlink } from "react-browser-router";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 shadow">
        <div className="container">
          <Navlink className="navbar-brand fw-bold fs-4 mx-2 " to="/"
            COLLECTION
          ></Navlink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Navlink className="nav-link active fs-4  mx-2" aria-current="page" to="/">
                  Home
                </Navlink>
                  
                
              </li>

              <li className="nav-item">
                <Navlink className="nav-link active fs-4 mx-2"  aria-current="page" to="/product">Product</Navlink>
                  
                
              </li>

              <li className="nav-item">
                <Navlink className="nav-link active fs-4 mx-2" aria-current="page" to="/about">About</Navlink>
                
              </li>

              <li className="nav-item">
                <Navlink className="nav-link active fs-4 mx-2" aria-current="page" to="/contact">Contact</Navlink>
                 
              </li>
              
            </ul>
            
          </div>
          <div className="buttons ">
                <Navlink to="/login" className="btn btn-outline-dark ms-1">
                <i className="fa-solid fa-right-to-bracket">Login</i>
                </Navlink>
                <Navlink to="/register" className="btn btn-outline-dark mx-1">

                <i className="fa-solid fa-user-plus">Register</i>
                </Navlink>
              
                <Navlink to="/cart" className="btn btn-outline-dark ms -1">
                  
                <i className="fa-solid fa-cart-shopping">Cart(0)</i>
                  </Navlink>
                
              
            </div>
        </div>
      </nav>
    </>
  );
}
