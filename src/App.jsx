import Login from "./auth/Login"
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
     <Login /> <Sidebar isOpen={isOpen} />
    </div>
  );
};
export default App;