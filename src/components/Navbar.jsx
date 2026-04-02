import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import AdminProfile from "./AdminProfile";
import { FaArrowLeftLong } from "react-icons/fa6";

const Navbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-14 bg-white border-b flex items-center justify-between px-4 md:px-6 z-50">

        <div className="flex items-center gap-3">
          <GiHamburgerMenu
            className="text-xl cursor-pointer lg:hidden"
            onClick={toggleSidebar}
          />
          <span className="font-medium hidden sm:block">Admin</span>
        </div>
        <div className="font-semibold text-sm sm:text-lg">
          Shopers Stack
        </div>
        <div className="flex items-center gap-4">
          <IoMdNotificationsOutline className="text-xl cursor-pointer"/>
          <FaRegUser 
            onClick={toggleProfileModal}
            className="text-xl cursor-pointer hover:text-blue-500 transition"
          />
        </div>

      </div>

      {isProfileOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-60" onClick={toggleProfileModal}>
          <div className="bg-white rounded-lg shadow-lg max-w-md w-80 mx-3.5 relative" onClick={(e) => e.stopPropagation()}>
            
            <div className="pt-5 h-100 ">
              <AdminProfile />

                  <div className="flex justify-center">
                      <button 
                         onClick={toggleProfileModal} 
                         className="border  border-gray-500 h-8 w-35 rounded-[7px] text-[10px] text-gray-500 hover:text-gray-700 flex items-center justify-center gap-3"
                        >
                            <FaArrowLeftLong /> Back to Dashboard
                        </button>
                  </div>
            
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;