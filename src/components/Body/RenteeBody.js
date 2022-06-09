import React,{useState} from "react";
import './RenteeBody.css'


function RenteeBody(){
    const [name,setName]=useState('')
    function handleChange(e){
        setName(e.target.value)
 
    }
   
    

    return(
    
            <div className="containers">
                
                <div className="submain-container">
                    <img className="Image"src='assets/images/Rentee.png'></img>


                </div>
                <div className="submain-container2">
                    <h1 className="Heading">
                        Become a Rentee
                    </h1>
                    <p className="paragraph">
                    Start renting your places and Start earning <br></br>passive income
                    </p>
                    <button className="Button-style">List an Spaces</button><br></br>
                    <input className="inputdesign" type="text" name="name" value={name} onChange={handleChange} placeholder="searching for?"></input>

                </div>
                

            </div>


     
    )

}
export default RenteeBody;