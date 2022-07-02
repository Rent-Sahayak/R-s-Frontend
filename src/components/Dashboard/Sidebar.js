import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { NavbarItem } from './NavbarItem'
import { useState } from 'react'
import './Navbar.css'

export default function Sidebar() {
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>{
        setSidebar(!sidebar)

    }
  return (
    <div className='container '>


    <nav className='nav-menu main-nav'>
        <ul className='nav-menu-items'>
            <li className='navbar-toogle'>
                <Link to="#" className='menu-bars'>
                    
                </Link>
            </li>
            {NavbarItem.map((item,index)=>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>

                        {item.title}
                            </span>

                        </Link>

                    </li>
                )

            })}
        </ul>
    </nav>
    </div>
  )
}
