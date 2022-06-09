import React from "react";
import './Navbar.css'
import { NavbarItems } from "./NavbarItem";
function Navbar(){
    return(
        <div className="Topbar">
            <div className="TopbarLeft">
            <a href="/"> <img  src="assets/images/Rentsahayak.png"></img></a>

                

            </div>
            <ul className="TopbarList">
                {NavbarItems.map((items,index)=>{
                    return(

                    <li   key={index}>
                        <a className={items.cName} href={items.url}>{items.title}</a>
                    </li>
                    )

                })}
            </ul>
            
            
        </div>
    )

}
export default Navbar;