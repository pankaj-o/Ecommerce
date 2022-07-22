import Home from "./Pages/Home";
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./compantents/product";
import { CartPage } from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
import Login from "./compantents/login/login"
import Signup from "./compantents/login/signup"

const App = () => {
  return (
    <div>
      <Routes >
      
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/sproduct/:id" element={<ProductPage/>} />
        <Route exact path="/cart" element={<CartPage/>} />
        <Route exact path="/signin" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
};
export default App;
