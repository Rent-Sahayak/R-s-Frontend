import React, { useState } from "react";
import { apiVerifyOtp } from "../../ApiService/AuthApi";
import { localStorageKey } from "../../Utils/enumconstant";
import { isNumber } from "../../Utils/UtilFunctions";


export const OTP = () => {
    const [otpcode,setOtpcode]=useState('')
    const handleChange=(e)=>{
       const value= e.target.value
       if(isNumber(value) && value.length<=6){
        setOtpcode(value); 
       }
       else{
        return null
       }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const userdata = JSON.parse(localStorage.getItem(localStorageKey.REGISTER))
            console.log(userdata)
            if(userdata){

                const res=await apiVerifyOtp({ otpCode:otpcode, operation:userdata.operation, email:userdata.email })
                if(res.data.success){
                    localStorage.removeItem(localStorageKey.REGISTER)
                }              
            }
        }
        catch(err){
            console.log(err)

        }
    }

    return(
        <div>
            <h1>Otpcode</h1>
        <input placeholder="enter your otp" type="text" value={otpcode} onChange={handleChange} />
        <button onClick={handleSubmit}>Send</button>
        </div>
    )
}