import React, { useState } from "react";
import './Navbar.css'
import { NavbarItems } from "./NavbarItem";
import {FaHamburger} from "react-icons/fa"
function Navbar(){
    const [showMediaIcons,setShowMediaIcons]=useState(false)
    return(
        <div className="Topbar">
            <div className="TopbarLeft">
            <a href="/"> <img  src="assets/images/Rentsahayak.png"></img></a>

                

            </div>
            <div className="mobile-menu-link">
            <ul className="TopbarList">
                {NavbarItems.map((items,index)=>{
                    return(

                    <li  className  key={index}>
                        <a className={items.cName} href={items.url}>{items.title}</a>
                    </li>
                    )

                })}
            </ul>
            </div>
            <div className="hamburger-menu">
                <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
                    <FaHamburger/>
                </a>
            </div>
            
            
        </div>
    )

}
export default Navbar;