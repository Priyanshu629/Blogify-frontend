
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaUser, FaClipboardList } from "react-icons/fa";


const Account = () => {
  
  const pathname = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <div className="w-[100%]">
      <span
        onClick={() => setIsOpen(true)}
        className="font-bold text-xl my-[20px] mx-[10px] cursor-pointer"
      >
        ☰
      </span>

      <aside
        className={`w-[20%] h-[100vh] left-0 bg-blue-600 fixed top-20 max-md:w-[50%] transition-all ${
          isOpen ? "max-md:left-0" : "max-md:left-[-50%]"
        }`}
      >
        <span
          onClick={() => setIsOpen(false)}
          className="font-bold text-white text-xl float-right border-2 md:hidden p-2 m-2 rounded-md cursor-pointer"
        >
          X
        </span>

        <section className="w-[100%] p-4 flex flex-col text-white font-bold text-lg items-start my-4 space-y-6">
          {/* My Blogs Link */}
          <Link
            onClick={() => setIsOpen(false)}
            className={`flex items-center p-3 mx-2 rounded-md transition-all hover:bg-green-600 ${
              pathname === "/account" && "bg-green-700"
            }`}
            to={"/account"}
          >
            <FaClipboardList className="mr-3 text-xl" /> My Blogs
          </Link>

          {/* Profile Link */}
          <Link
            onClick={() => setIsOpen(false)}
            className={`flex items-center p-3 mx-2 rounded-md transition-all hover:bg-green-600 ${
              pathname === "/account/profile" && "bg-green-700"
            }`}
            to={"/account/profile"}
          >
            <FaUser className="mr-3 text-xl" /> Profile
          </Link>
        </section>
      </aside>

      <Outlet />
      
    </div>
  );
};

export default Account;
