import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'
import {BsPlusCircleFill} from 'react-icons/bs'
import './ViewRequest.css'
export default function ViewRequest() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <BsPlusCircleFill className='icon-design'/>
        <div className='container req-contain'>
            
            <h1 className='text-warning font'>Pending</h1>
            <h1 className='text-primary font'>Inprogress</h1>
            <h1 className='text-success font'>Resolved</h1>
        </div>
      
    </div>
  )
}

