import { MdDashboard, MdPeopleOutline, MdStorefront, MdInventory, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`
      fixed top-14 left-0 h-[calc(100vh-56px)] w-64 bg-black text-white
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
      `}
    >

      <ul className="mt-6 space-y-2 px-4">

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
          <MdDashboard size={20}/>
          Dashboard
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
          <MdPeopleOutline size={20}/>
          User Management
        </li>

        <Link to='/landingpage/merchentmanagement'>
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            <MdStorefront size={20}/>
            Merchant Management
          </li>
        </Link>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
          <MdInventory size={20}/>
          Product Management
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
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