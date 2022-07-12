import Home from "./Pages/Home";
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import Navbar from "./compantents/Navbar";
import { Route, Routes } from "react-router-dom";
import Product from "./compantents/Product";
import ShowProduct from "./compantents/ShowProduct";

const App = () => {
  return (
    <div>
      <Routes >
      
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/sproduct/:id" element={<ShowProduct/>} />
      </Routes>
    </div>
  );
};
export default App;
