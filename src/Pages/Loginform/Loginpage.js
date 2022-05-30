import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import "./LoginScreen.css";

function Loginpage() {
  let navigate = useNavigate();

  const [login, setLogin] = useState({
   
    email: "",
    password: "",
    
  });

  const submitHandler=async(e)=>{
       
    e.preventDefault()
   await axios.post(`https://waffle-web.herokuapp.com/login`,{
    email: login.email,
    password:login.password
    }).then(res => {
        console.log(res);
        console.log(res.data);
        alert("Logging Successfully")
        navigate("/home")
      }).catch((error) =>{
        alert("roung credential")
      })
    
      setLogin(login)
}
const handleInputs = e => {
  setLogin({...login, [e.target.id]: e.target.value });
    console.log("CurrentChanges", e.target.id, e.target.value);
  };
    
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label>email </label>
          <input type="text" name="email" id='email' onChange={handleInputs} value={login.email} required />
          
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" id='password' value={login.password} onChange={handleInputs} required />
         
         
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  
  
}

export default Loginpage;