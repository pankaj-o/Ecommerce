import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar";

const Signup = () => 

  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <>
      <Navbar />
        <div className="main">
          <form className=" signupform" action="">
            <h2>Create Account</h2>


            <div className="field">
              <input
                type="text"
                placeholder="Username"
                required
                
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="field">
              <input
                type="email"
                placeholder=" E-mail Address"
                required
                
                
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
  
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                required
                
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>


            <div className="field">
              <input type="password" placeholder="Confirm Password" required />
            </div>


            <div className="signupdiv">
              <button className="signup">REGISTER</button>
            </div>
  
            <p>
              If you have already an account,{" "}
              <Link to="/signin">login here.</Link>
            </p>
          </form>
        </div>
      </>
    );
  }
  export default Signup

