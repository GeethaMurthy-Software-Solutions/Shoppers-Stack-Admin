import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

      <div className="flex">
        
        {/* Sidebar */}
        <Sidebar isOpen={isOpen}  />

        {/* Main Content */}
        <div className={`mt-14 flex-1 p-6 transition-all duration-300 
          ${isOpen ? "ml-60" : "ml-0"} md:ml-60`}>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default AdminLayout