import sendRequest from "./httpRequest";
import { apiEndPoints } from "./ApiConstants";

const apiAuthLogin=(data)=>{
    return sendRequest('POST',apiEndPoints.auth.login,false,data)
}
const apiAuthRegister=(data)=>{
    return sendRequest("POST",apiEndPoints.auth.register,false,data)
}
const apiForgetPassword=(data)=>{
    return sendRequest("POST",apiEndPoints.auth.forgotPassword,false,data)
}
const apiAuthGetUser = () => {
    return sendRequest('GET', apiEndPoints.auth.getUser, true )
  }
const apiVerifyOtp=(data)=>{
    return sendRequest('POST',apiEndPoints.auth.verifyUser,false,data)
}
  
export {apiAuthLogin,apiAuthRegister,apiForgetPassword, apiAuthGetUser,apiVerifyOtp}