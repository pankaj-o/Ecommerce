import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { cartContext } from "../../App";
import { NavLink } from "react-router-dom";

export const Cart = ( ) => {
  const {Adata,removeItem,clearcart,Increment,Decrement,CartItem} = useContext(cartContext);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const addData=[]
   

 for(let i=1;i<20;i++){
  let Pdata=JSON.parse(localStorage.getItem(i))
  Pdata!==null?addData.push( Pdata):console.log('')
  
 }

  useEffect(() => {
    
    const getfunction = () => {
      
      setLoading(true);
      
     let Amount=Math.floor(addData.reduce((acc,cur)=>{
    
        let p=cur.price*cur.count
        acc=acc+p;
        return acc
    },0))
    setTotalAmount(Amount)
    
      setLoading(false);
      
      
    };
    getfunction();
  }, [addData]);
  
 
  
  const Loading = () => {
    <h2>Wait for Loading Data</h2>;
  };
  
  
  const GetData1 = () => {
    return (
      <>
        <div className="maincart">
          
          <div className="cartscroll">
            {addData.map((res, index) => {
             
              return (
                <div className="cartitem" key={index}>
                  <div className="imagediv">
                    <img
                      className="imagedivimage"
                      src={res.image}
                      alt={res.title}
                    />
                  </div>
                  <div className="titlediv">
                    <p>{res.title.slice(0, 20)}</p>
                  </div>

                  <div className="quantitydiv">
                    <i className="fa-solid fa-minus" onClick={()=>{Decrement(res.id)}}></i>
                    <input className="quantitydivinput" type="text" placeholder={res.count} disabled />
                    <i className="fa-solid fa-plus" onClick={()=>{Increment(res.id)}}></i>
                  </div>

                  <div className="pricediv">
                    <p> Rs {res.price}</p>
                  </div>

                  <div className="deletediv">
                    <i className="fa-solid fa-trash" onClick={()=>{removeItem(res.id)} }></i>
                   
                  </div>
                </div>
              );
            })}
          </div>
          <div className="chekout">
            <p> Cart Total  = {totalAmount} </p>
            <NavLink to="" className="btn  ms-3 btn-dark" onClick={()=>{clearcart()}}>
              ClearCart
            </NavLink>
            <NavLink to="" className="btn  ms-3 btn-dark">
              CheckOut
            </NavLink>
          </div>
        
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-2">
        <div className=" row ">{loading ? <Loading /> : <GetData1/>}</div>
      </div>
    </>
  );
};
