import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Dashboard/Sidebar'


export default function Adminlayout() {
  return (
    <>
    <Navbar/>
    <div className="d-flex">
      <Sidebar />
      <div className="content flex-grow-1 p-4">
        
    <Outlet/>
       
      </div>
    </div>
    
    
    
    </>
  )
}
