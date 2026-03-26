import { MdDashboard, MdPeopleOutline, MdStorefront, MdInventory, MdLogout } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen,closeSidebar }) => {
  return (
    <div
      className={`
      fixed top-14 left-0 h-[calc(100vh-56px)] w-64 bg-black text-white z-50
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0  `}
    >
 
 <div className="flex justify-end p-4 lg:hidden">
        <RxCross2
          className="text-2xl cursor-pointer"
          onClick={closeSidebar}
        />
      </div>


      <ul className="space-y-2 px-4">
        
        <Link to="/landingpage" onClick={closeSidebar} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800">
          <MdDashboard size={20}/>
          Dashboard
        </Link>

        <li onClick={closeSidebar} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
          <MdPeopleOutline size={20}/>
          User Management
        </li>

        <Link onClick={closeSidebar} to='/landingpage/merchentmanagement'>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800">
            <MdStorefront size={20}/>
            Merchant Management
          </li>
        </Link>

       <Link onClick={closeSidebar} to="/landingpage/productmanagement">
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800">
          <MdInventory size={20}/>
          Product Management
        </li>
       </Link>

        <li  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
          Coupon Management
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
          <MdLogout size={20}/>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;