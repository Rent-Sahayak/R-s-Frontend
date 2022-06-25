import React, { useState, useRef, useEffect } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

import { useNavigate } from 'react-router-dom'
import Footer from "../Footer/Footer";


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { apiAuthLogin } from "../../ApiService/AuthApi";
import { validateEmail } from "../../Utils/validations";
import { toast } from 'react-toastify'
import Loading from "./Loading";


const initialLoginData = { email: "", password: "" }

function Login() {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [loginData, setLoginData] = useState(initialLoginData)
  const [errorState, setErrorState] = useState(null)
  const emailIdRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
 
 
  function handleChange(e) {
    const { name, value } = e.target

    setLoginData(prevState => ({ ...prevState, [name]: value }));
    errorState && delete errorState[name]
  }
  async function handleSubmit(e) {

    e.preventDefault()
    if (validFormState()) {
      setIsSubmitting(true)
      try {
        const config={
          headers:{
            "Content-type":"application/json"
          }
        }
        const { res } = await apiAuthLogin(loginData,config)
        
        localStorage.setItem('userInfo',JSON.stringify(res))
        toast('you have been logged in')
        navigate('/')
      }
      catch (err) {
        const { response } = err
        const errorMessage = response?.data?.message || 'Error login'
        setErrorState({ password: errorMessage })
        passwordRef.current?.focus()
        toast.error(errorMessage)

      }
      setIsSubmitting(false)
    }



  }
  const validFormState = () => {
    let _error = {}
    if (!loginData.password) {
      _error.password = "Password is required"
      passwordRef.current?.focus()
    }
    if (!validateEmail(loginData.email)) {
      _error.email = "Please enter valid emailId address"
      emailIdRef.current?.focus()

    }
    if (!loginData.email) {
      _error.email = "email address is required"
      emailIdRef.current?.focus()
    }
    setErrorState(_error)
    return Object.keys(_error).length === 0


  }

  console.log("state", loginData)
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
            
            
            
            <form onSubmit={handleSubmit} className="form-group">
              <input className="form-control mb-3" ref={emailIdRef} autoFocus={true} error={errorState?.email || null} type='text' name='email' placeholder='Email Address' value={loginData.email} category='small' onChange={handleChange} />
              <input className="form-control" ref={passwordRef} error={errorState?.password || null} type='password' name='password' placeholder='Password' value={loginData.password} category='small' onChange={handleChange} />
              <button className=" button-design" loading={isSubmitting} type='submit' >Submit</button>

            </form>


<<<<<<< HEAD
            <p className="forget-password">
              <a href="/forgetpassword">Forgot Password{" "}</a>
              <span className="glyphicon glyphicon-log-in " /> Signup
            </p>
=======
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
>>>>>>> abc73b95bd770642a1c652fe8c94db1832838588
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
export default Login;