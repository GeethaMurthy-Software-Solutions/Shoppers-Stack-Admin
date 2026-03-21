import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="flex">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="mt-10 flex-1 overflow-y-auto p-6 bg-gray-50 h-screen transition-all duration-300 ml-0 md:ml-60">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default AdminLayout