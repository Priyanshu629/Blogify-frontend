
import { useUser } from "../context/userContext";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Account = () => {
  const { isLoggedIn } = useUser()
  const pathname = useLocation().pathname
  const [isOpen,setIsOpen]=useState(false)




  useEffect(() => {
    if (isLoggedIn === false) {
      return window.location.href = "/"
    }
  }, [isLoggedIn])


  return (
    <div className="w-[100%] ">
       <span onClick={()=>setIsOpen(true)}  className="font-bold text-xl my-[20px] mx-[10px]">☰</span>

      <aside className={`w-[20%] h-[100vh] bg-blue-600 fixed top-20  max-md:w-[50%] transition-all ${isOpen?"max-md:left-0":"max-md:left-[-50%]"}`}>

           <span onClick={()=>setIsOpen(false)} className="font-bold text-white text-xl float-right border-2 md:hidden p-2 m-2 rounded-md">X</span>

        <section className="w-[100%] p-2 flex flex-col text-white font-bold text-lg items-center my-4 ">
          <Link onClick={()=>setIsOpen(false)} className={`mb-2 p-2 mx-2 ${pathname == "/account" && "bg-green-700"}`} to={'/account'}>My Blogs</Link>
          <Link onClick={()=>setIsOpen(false)} className={`mb-2 p-2 mx-2 ${pathname == "/account/profile" && "bg-green-700"}`} to={'/account/profile'}>Profile</Link>
        </section>
      </aside>

      <Outlet />

    </div>
  );
};

export default Account;
