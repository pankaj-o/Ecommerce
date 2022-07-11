import Home from "./Pages/Home";
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./compantents/Navbar";
import { Route, Routes } from "react-browser-router";
import Product from "./compantents/Product";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
      </Routes>
    </>
  );
};
export default App;
