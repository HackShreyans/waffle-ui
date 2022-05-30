import React, {useState} from 'react';
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Register() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    
  });

  const submitHandler=async(e)=>{
       
    e.preventDefault()
   await axios.post(`https://waffle-web.herokuapp.com/register`,{
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    password:user.password
    }).then(res => {
        console.log(res);
        console.log(res.data);
        alert("registration successfully")
        navigate("/login")
      })
    
      setUser(user)
}
const handleInputs = e => {
  setUser({...user, [e.target.id]: e.target.value });
    console.log("CurrentChanges", e.target.id, e.target.value);
  };
  
    return(
      <>
      <form onSubmit={submitHandler}>
      <div className="form">
          <div className="form-body">
              <div className="name">
                  <label className="form__label" for="firstName"> Name </label>
                  <input className="form__input" type="name" id="name" placeholder="First Name" value={user.name} onChange={handleInputs}/>
              </div>
 
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" value={user.email} onChange={handleInputs}/>
              </div>
              <div className="mobile">
                  <label className="form__label" for="password">mobile </label>
                  <input className="form__input" type="mobile"  id="mobile" placeholder="mobile" value={user.mobile} onChange={handleInputs}/>
              </div>
              <div className="password">
                  <label className="form__label" for="confirmPassword"> Password </label>
                  <input className="form__input" type="password" id="password" placeholder="Password" value={user.password}  onChange={handleInputs}/>
              </div>
          </div>
          <div class="footer">
              <button type='submit' class="btn">Register</button>
          </div>
          <Link to="/login">Allready have a account? login</Link>
      </div>   
      </form>  
      
</>
    )       
}
export default Register;