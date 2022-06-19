import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Register.css'
import { apiAuthRegister } from "../../ApiService/AuthApi";
import { userCategory } from "../../Utils/enumconstant";
const initialRegisterData={fullName:"",email:"",password:"",category:userCategory.TENANT}
function Register(){
    const [registerData, setRegisterData] = useState(initialRegisterData);
    const [isSubmitting, setIsSubmitting] = useState(false)
    function handleChange(e) {
      const {name,value}=e.target
        setRegisterData(prevState=>({...prevState,[name]:value}))

    }
    async function handleSubmit(e) {
        e.preventDefault();
        const {fullName,...remainingData}=registerData
        
        const res=await apiAuthRegister({...remainingData,profile:{fullName}});
        console.log(res)

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
                <span className="glyphicon glyphicon-log-in " /> Login
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
                name="fullName"
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
                onChange={handleChange}
                type="password"
                className="form-control mb-3 "
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleChange}
                type="password"
                className="form-control mb-3"
                name="confirmpassword"
                placeholder="confirm your Password"
              />
            </div>
            <div className="form-group d-flex ">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Tenant
                </label>
                
            
              </div>
              <div class="form-check ml-3" >
                <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Renter
                </label>
            
              </div>
            </div>
            <button className="btn register-button text-white" onClick={handleSubmit}>Regitser</button>
            
          </div>
        </div>
      </div>
      <Footer/>

        </div>
    )
}
export default Register