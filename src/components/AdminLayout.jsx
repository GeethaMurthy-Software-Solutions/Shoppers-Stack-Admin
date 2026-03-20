import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
 
const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar - fixed at top */}
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
 
      {/* Body: Sidebar + Main Content side by side */}
      <div className="flex flex-1 overflow-hidden mt-14">
 
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
 
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <Outlet />
        </main>
 
      </div>
    </div>
  );
}
 
export default AdminLayout;
 