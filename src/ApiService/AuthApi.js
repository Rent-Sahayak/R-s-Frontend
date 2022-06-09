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

export {apiAuthLogin,apiAuthRegister,apiForgetPassword}