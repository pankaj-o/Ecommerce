import Home from "./Pages/Home";
import React, { createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./compantents/Product/product";
import { CartPage } from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
import Login from "./compantents/login/login";
import Signup from "./compantents/login/signup";
import { Apidata } from "./Apidata/apidata";
import reducer from "./compantents/reducer";

export const cartContext = createContext();
const intialstate = {
  Adata: Apidata,
  totalAmount: 0,
  CartItem:[] 
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialstate);

  const removeItem = (index) => {
    return dispatch({
      type: "REMOVEITEM",
      payload: index,
    });
    
  };
 
  const clearcart = (index) => {
    return dispatch({
      type: "CLEARCART",
      payload: index,
    });
    
  };
  const Decrement = (index) => {
    return dispatch({
      type: "DECREMENT",
      payload: index
    });
    
  };
  const Increment = (index) => {
    return dispatch({
      type: "INCREMENT",
      payload: index
      
    });
    
  };
  const ItemAdded = (index) => {
    // console.log("ItemAdded",index)
    return dispatch({
      type: "ITEMADDED",
      payload: index,
      
    });
    
  };

  return (
    <cartContext.Provider value={{ ...state, removeItem,clearcart,Decrement,Increment,ItemAdded}}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/sproduct/:id" element={<ProductPage />} />
        <Route exact path="/cart" element={<CartPage />}/>
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </cartContext.Provider>
  );
};
export default App;
