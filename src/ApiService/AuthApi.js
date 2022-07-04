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
const apiResetPassword=(data)=>{
    return sendRequest('POST',apiEndPoints.auth.resetPassword,true,data)
}
const apiUserProfile=(data)=>{
    return sendRequest('GET',apiEndPoints.auth.profile,true,data)
}
const apiUserUpdateProfile=(data)=>{
  
    return sendRequest('PUT',apiEndPoints.auth.update,true,data)
    
}
const apiFetchHouse=(id)=>{
    return sendRequest('GET',apiEndPoints.auth.fetchHouse(id),true)
}
const apiFetchAllHouse=()=>{
    return sendRequest("GET",apiEndPoints.auth.fetchAllHouse,true)
}
const apiPostHouse=(data)=>{
    return sendRequest("POST",apiEndPoints.auth.insertHouse,true,data)
}
const apiUpdateHouse=(data,id)=>{
    return sendRequest("PUT",apiEndPoints.auth.updateHouse(id),true,data)
}
  
export {apiAuthLogin,apiAuthRegister,apiForgetPassword, apiAuthGetUser,apiVerifyOtp,apiResetPassword,apiUserProfile,apiUserUpdateProfile,apiFetchHouse,apiPostHouse,apiUpdateHouse,apiFetchAllHouse}