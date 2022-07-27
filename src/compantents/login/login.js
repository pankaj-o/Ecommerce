import React, { useState } from "react";
import "./login.css";
import {  Link } from "react-router-dom";
 import Navbar from "../Navbar/Navbar";
import { getEmp } from "../../Service/Service";
 
const Login = () =>  {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allentry, setallentry] = useState([]);
  
    const submitted = function(de) {
      de.preventDefault();
      const newentry = { email: email, password: password };
  
      setallentry([...allentry, newentry]);
    };
    const login  = async () =>{
     

      localStorage.setItem(email,password)
      
      sessionStorage.setItem(email,password)
      await getEmp(email,password);
      
      

    }
    return (
      <>
      <Navbar />
        <div className="formdiv">
          <form className="formd" action="" onSubmit={submitted}>
            <h1>Welcome</h1>
  
            <div className="emaildiv">
              <input
                required
                type="email"
                name="email"
                className="emailpass"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="  Username"
                autoComplete="off"
              />
            </div>
            <div className="passworddiv">
              <input
                required
                type="password"
                name="password"
                className="emailpass"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="  Password"
                autoComplete="off"
              />
            </div>
            <div className="button-container">
              <button type="submit" onClick={login} className="signin" >
                Sign-In
              </button>
            </div>
  
            <p>
              If you don't have any account,{" "}
              <Link to="/signup">Sign up here.</Link>
            </p>
          </form>
        </div>
      </>
    );
  }
  export default  Login