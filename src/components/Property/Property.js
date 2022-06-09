import { data } from "autoprefixer";
import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Data } from "./data";
import './Property.css';
function Property(){
    const [noOfElement,setnoOfElement]=useState(3);
    const loadMore=()=>{
        setnoOfElement(noOfElement+noOfElement);
    }
    const slice=Data.cardData.slice(0,noOfElement)
    return(
        <div>
        <Navbar/>

        <section className="'py-4 container">
            <div className="row justify-content-center">

                {
                    slice.map((item,index)=>{
                        return(
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                                <div className="card p-0  h-100 shadow">
                                    <img src={item.img} className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.desc}</p>

                                    </div>
                                </div>

                            </div>

                        )
                    })
                }

                
            </div>
           
            <button className="btn btn-dark d-block w-100"
            onClick={loadMore}
            >Loadmore</button>

        </section>
        <Footer/>
        </div>
    )
}
export default Property;