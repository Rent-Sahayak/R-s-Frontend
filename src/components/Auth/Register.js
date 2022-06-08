import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Register.css';
import axios from 'axios';


function Register(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }
    function handlePasswordChange(e) {
        setName(e.target.value);
    }
    return(
        <div>
            <Navbar/>
            <div className="containers">
        <div className="login-form">
          <div className="main-div">
            <div className="signup">
              <h2 className="text-design-h2">Register to your account</h2>
              <p>
                Already have an account?{" "}
                <span className="glyphicon glyphicon-log-in " /><a href="/login">Login</a> 
              </p>
            </div>
            <div>
              <h2 className="text-design">Register</h2>
              <b>
                <hr />
              </b>
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                className="form-control mb-3 "
                name="fullname"
                placeholder="enter your fullname"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                className="form-control mb-3"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handlePasswordChange}
                type="password"
                className="form-control mb-3 "
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handlePasswordChange}
                type="password"
                className="form-control mb-3"
                name="confirmpassword"
                placeholder="confirm your Password"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                className="form-control "
                name="address"
                placeholder="Address"
              />
            </div>
            <button className="btn register-button text-white">Regitser</button>
            
          </div>
        </div>
      </div>
      <Footer/>

        </div>
    )
}
export default Register