import React from "react";
import Navbar from "../Navbar/Navbar";
function ResetPassword(){
    return(
        <div>
            <Navbar/>
            <div className="container card ">
            <h1> Reset your Password?</h1>
            <form onSubmit="" className="form-group">
            <label>New Password</label>
            <input className="form-control mb-3" placeholder="Enter your new password"></input>
            <label>Confirm your Password</label>
            <input className="form-control mb-3" placeholder="Enter your new password"></input>
            <button className="btn btn-primary " >Send</button>

            

           </form>

            </div>
            
           

        </div>
    )

           
          
           
           
           
         
            
           


            

          

}
export default ResetPassword