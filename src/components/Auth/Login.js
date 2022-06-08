import React, { useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  function handleUsernameChange(e) {
    setName(e.target.value);
  }
  function handlePasswordChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="containers">
        <div className="login-form">
          <div className="main-div">
            <div className="signup">
              <h2 className="text-design-h2">Login to your account</h2>
              <p>
                Need an account?{" "}
                <span className="glyphicon glyphicon-log-in " /> <a href="/register">Signup</a>
              </p>
            </div>
            <div>
              <h2 className="text-design">Login</h2>
              <b>
                <hr />
              </b>
            </div>

            <div className="form-group">
              <input
                onChange={handleUsernameChange}
                type="text"
                className="form-control mb-3"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handlePasswordChange}
                type="password"
                className="form-control "
                name="password"
                placeholder="Password"
              />
            </div>
            <button className=" button-design ">Login</button>
            <p className="forget-password">
               <a className="link-danger" href="/forget">Forgot Password?{" "}</a>
               
              </p>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}
export default Login;