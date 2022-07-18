import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { NavbarItem } from './NavbarItem'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useState } from 'react'
import './Navbar.css'

export default function Sidebar() {
    const [sidebar,setSidebar]=useState(false)
    const showSidebar=()=>{
        setSidebar(!sidebar)

    }
    const menu=(
        <Menu
        items={[
            {
                key:'1',
                label:(
                    <a href='/change-password'>
                        Change password
                    </a>

                )
            }
        ]}
        />
    )
  return (
    <div className='container '>


    <nav className='nav-menu main-nav'>
        <ul className='nav-menu-items'>
           
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
             <li className='nav-text'>
                <Dropdown overlay={menu}>

                <Link to="/change-password" onClick={(e)=>e.preventDefault()}>
                    <AiIcons.AiFillAppstore/>
                    <Space>Account settings</Space>
                    
                    
                </Link>
                </Dropdown>
            </li>
        </ul>
    </nav>
    </div>
  )
}
