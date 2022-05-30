import React from "react";
import './Navbar.css'
import { NavbarItems } from "./NavbarItem";
function Navbar(){
    return(
        <div className="Topbar">
            <div className="TopbarLeft">
                <img  src="assets/images/Rentsahayak.png"></img>
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