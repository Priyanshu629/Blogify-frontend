import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import { logout } from "../utils/auth";
import { useState,  } from "react";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setUserId, photo } = useUser();
 
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const navigate = useNavigate()
  const pathname=useLocation().pathname

  return (
    <header className="flex w-full fixed justify-between px-4 h-20 bg-blue-950 items-center text-xl text-white font-semibold top-0 ">
      <Link to="/" className="text-2xl font-bold" >
        Blogify
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 items-center">
        <li>
          <Link to="/" className={`${pathname=="/" && "border-2 p-1 rounded-md bg-purple-700"} `} >
            Home
          </Link>
        </li>
        <li>
          <Link to="/blogs" className={`${pathname=="/blogs" && "border-2 p-1 rounded-md bg-purple-700"} `}>
            Read Blogs
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/add-blog" className={`${pathname=="/add-blog" && "border-2 p-1 rounded-md bg-purple-700"} `}>
                Write Blog
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-purple-700" onClick={()=>{
              logout()
              setIsLoggedIn(false)
            }}>
               Logout
              </li>
            <li>
              <img
                onClick={()=> navigate("/account")}
                src={photo}
                alt="user-photo"
                className="w-[50px] rounded-full cursor-pointer hover:border-4 hover:border-green-500 transition-all"
              />
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className={`${pathname=="/login" && "border-2 p-1 rounded-md bg-purple-700"} `}>
              Login
            </Link>
          </li>
        )}
      </ul>

      {/* Hamburger Menu */}

      {
        hamburgerMenu?<button
        className="md:hidden text-2xl cursor-pointer"
        onClick={()=>setHamburgerMenu(false)}
        aria-label="Toggle Menu"
      >
        X
      </button>:<button
        className="md:hidden text-2xl cursor-pointer"
        onClick={()=>setHamburgerMenu(true)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      }
      
     
        <ul className={`fixed max-md:w-[50%] top-20 md:hidden  bg-gray-700 w-48 p-4 flex flex-col space-y-4 transition-all ${hamburgerMenu? "max-md:right-0":"max-md:right-[-50%]"}`}>
          <li>
            <Link to="/" className={`${pathname=="/" && "border-2 p-1 rounded-md bg-purple-700"} `} onClick={()=>setHamburgerMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={`${pathname=="/blogs" && "border-2 p-1 rounded-md bg-purple-700"} `} onClick={()=>setHamburgerMenu(false)}>
              Read Blogs
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/add-blog" className={`${pathname=="/add-blog" && "border-2 p-1 rounded-md bg-purple-700"} `} onClick={()=>setHamburgerMenu(false)}>
                  Write Blog
                </Link>
              </li>
              <li  className="cursor-pointer hover:bg-purple-700" onClick={()=>{
              logout()
              setIsLoggedIn(false)
            }}>
               Logout
              </li>
              <li>
                <div
                  className="relative"
                  onClick={()=>{
                    navigate("/account")
                    setHamburgerMenu(false)
                  }}
                >
                  <img
                    src={photo}
                    alt="user-photo"
                    className="w-[50px] rounded-full cursor-pointer hover:border-4 hover:border-green-500 transition-all"
                  />
                 
                </div>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className={`${pathname=="/login" && "border-2 p-1 rounded-md bg-purple-700"} `} onClick={()=>setHamburgerMenu(false)}>
                Login
              </Link>
            </li>
          )}
        </ul>
     
    </header>
  );
};

export default Header;
