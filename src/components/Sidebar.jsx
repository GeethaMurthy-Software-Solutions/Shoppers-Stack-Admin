import {
  MdDashboard,
  MdPeopleOutline,
  MdStorefront,
  MdInventory,
  MdLogout,
  MdLocalOffer,
} from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop - closes sidebar when clicking outside on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
           h-[calc(100vh-56px)] w-64 bg-black text-white z-40 fixed top-14
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0 fixed top-14 left-0" : "-translate-x-full"}
          md:relative md:top-0 md:translate-x-0 md:z-auto md-shrink-0
        `}
      >
        <ul className="mt-6 space-y-2 px-4">
          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            <MdDashboard size={20} />
            Dashboard
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            <MdPeopleOutline size={20} />
            User Management
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            <MdStorefront size={20} />
            Merchant Management
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            <MdInventory size={20} />
            Product Management
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            <MdLocalOffer size={20} />
            Coupon Management
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            <MdLogout size={20} />
            Logout
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;