import React, { useEffect, useState } from "react";
import './Navbar.css'
import { commonNavItems, notLoggedInNavItems } from "./NavbarItem";
import {FaHamburger} from "react-icons/fa"
import { useUserContext } from "../../context/userContext";
import { useNavigate } from 'react-router-dom';



function Navbar(){
    const [showMediaIcons,setShowMediaIcons]=useState(false)
    const [activeNavItems, setActiveNavItems] = useState([]);
    const navigate=useNavigate()

    const { isLoggedIn} = useUserContext()

    useEffect(() => {
        if(isLoggedIn){
            setActiveNavItems(commonNavItems)
        }else{  
            setActiveNavItems([...commonNavItems, ...notLoggedInNavItems])
        }
    }, [isLoggedIn])
    async function Logout(){
        localStorage.clear();
        
      

    }

    return(
        <div className="Topbar">
            <div className="TopbarLeft">
            <a href="/"> <img  src="assets/images/Rentsahayak.png"></img></a>
            </div>
            <div className="mobile-menu-link">
            <ul className="TopbarList">
                {activeNavItems.length > 0 && activeNavItems.map((items,index)=>{
                    return(
                    <li  key={index}>
                        <a className={'sidebarListItemText'} href={items.url}>{items.title}</a>
                    </li>
                    )

                })}
                {isLoggedIn && (
               
                    <ul className="addedMenuItem">
                        <li><a href="/login" className={'sidebarListItemText'} onClickCapture={Logout}>Logout</a></li>
                        <li><a href="/dashboard" className={'sidebarListItemText'}>Dashboard</a></li>
                    </ul>
               
                
                )}
            </ul>
            </div>
            <div className="hamburger-menu">
                <span onClick={()=>setShowMediaIcons(!showMediaIcons)}>
                    <FaHamburger/>
                </span>
                {showMediaIcons && (
                   <ul className="TopbarList">
                   {activeNavItems.length > 0 && activeNavItems.map((items,index)=>{
                       return(
                       <li  key={index}>
                           <a className={'sidebarListItemText'} href={items.url}>{items.title}</a>
                       </li>
                       )
   
                   })}
               </ul>
                )}
            </div>
            
            
        </div>
    )

}
export default Navbar;