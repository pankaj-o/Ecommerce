import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 shadow">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 mx-2 " href="#">
            COLLECTION
          </a>
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
                <a className="nav-link active fs-4  mx-2" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-4 mx-2"  aria-current="page" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-4 mx-2" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-4 mx-2" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              
            </ul>
            
          </div>
          <div className="buttons ">
                <a href="" className="btn btn-outline-dark ms-1">
                <i className="fa-solid fa-right-to-bracket">Login</i>
                </a>
                <a href="" className="btn btn-outline-dark mx-1">
                <i className="fa-solid fa-user-plus">Register</i>
                </a>
                <a href="" className="btn btn-outline-dark ms -1">
                <i className="fa-solid fa-cart-shopping">Cart(0)</i>
                </a>
              
            </div>
        </div>
      </nav>
    </>
  );
}
