import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';


const AdminLayout = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
            <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
            
                <Sidebar isOpen={isOpen} />
             <div className="mt-10 ml-60 flex-1 overflow-y-auto p-6 bg-gray-50 h-screen">
                <Outlet />
            </div>
    </div>
  )
}

export default AdminLayout