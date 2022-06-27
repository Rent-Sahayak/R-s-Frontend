import React, { useState } from "react";
import { apiVerifyOtp } from "../../ApiService/AuthApi";
import { localStorageKey } from "../../Utils/enumconstant";
import { isNumber } from "../../Utils/UtilFunctions";
import Navbar from "../Navbar/Navbar";
import OtpInput, { OtpInputProps } from 'react-otp-input'

import './OTP.css'
export const OTP = () => {
    const [otpcode, setOtpcode] = useState('')
    // const handleChange=(e)=>{
    //    const value= e.target.value
    //    if(isNumber(value) && value.length<=6){
    //     setOtpcode(value); 
    //    }
    //    else{
    //     return null
    //    }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userdata = JSON.parse(localStorage.getItem(localStorageKey.REGISTER))
            console.log(userdata)
            if (userdata) {

                const res = await apiVerifyOtp({ otpCode: otpcode, operation: userdata.operation, email: userdata.email })
                if (res.data.success) {
                    localStorage.removeItem(localStorageKey.REGISTER)
                }
            }
        }
        catch (err) {
            console.log(err)

        }
    }

    return (
        <div  >
                <Navbar />
            <div className="container card card-flow">


                <h1>Enter email verification code</h1>
                <OtpInput className="otpstyle" separator={<span>-</span>} numInputs={6} inputStyle="foo" isInputNum placeholder="enter your otp" type="text" value={otpcode} onChange={setOtpcode} />

                <div className="d-flex">
                <button className="btn btn-danger btn-design" >Cancel</button>


                <button className="btn btn-primary btn-design2 " onClick={handleSubmit}>Send</button>

                </div>
            </div>
        </div>
    )
}