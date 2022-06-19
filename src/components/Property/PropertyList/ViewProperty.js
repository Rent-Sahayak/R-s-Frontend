import React,{useState} from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import './viewproperty.css';
function ViewProperty(){
    return(
        <div>
            <Navbar/>
            <div >
                <div className="flex">

                    <img src="/assets/images/office2.jpg"></img>
                    <img src="/assets/images/office3.jpg"></img>
                </div>
                <div className="flex">

                    <img src="/assets/images/office4.jpg"></img>
                    <img src="/assets/images/office5.jpg"></img>
                </div>
                <div className="flex">


                    <img src="/assets/images/office6.jpg"></img>
                    <img src="/assets/images/office8.jpg"></img>
                </div>
            
            </div>
            <Footer/>
            
        </div>
    )
}
export default ViewProperty;