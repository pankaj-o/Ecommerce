import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 shadow">
        <div className="container">
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
                <NavLink
                  className="nav-link active fs-4  mx-2"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-4 mx-2"
                  aria-current="page"
                  to="/product"
                >
                  Product
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-4 mx-2"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-4 mx-2"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="buttons ">
            <NavLink to="/signin" className="btn btn-outline-dark ms-1">
              <i className="fa-solid fa-right-to-bracket">Login</i>
            </NavLink>
            <NavLink to="/signup" className="btn btn-outline-dark mx-1">
              <i className="fa-solid fa-user-plus">Register</i>
            </NavLink>

            <NavLink to="/cart" className="btn btn-outline-dark ms -1">
              <i className="fa-solid fa-cart-shopping">Cart()</i>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
