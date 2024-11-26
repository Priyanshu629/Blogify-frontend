import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../context/userContext";
import { logout } from "../utils/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setUserId, photo } = useUser();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <header className="flex w-full fixed justify-between px-6 md:px-8 h-20 bg-blue-950 items-center text-xl text-white font-semibold top-0 z-50 shadow-lg transition-all duration-300 ease-in-out">
      <Link to="/" className="text-2xl font-bold">
        Blogify
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link
            to="/"
            className={`${
              pathname === "/" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
            } transition-all duration-200`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className={`${
              pathname === "/blogs" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
            } transition-all duration-200`}
          >
            Read Blogs
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link
                to="/add-blog"
                className={`${
                  pathname === "/add-blog" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
                } transition-all duration-200`}
              >
                Write Blog
              </Link>
            </li>
            <li
              className="cursor-pointer hover:bg-purple-700 p-2 rounded-md transition-all duration-200"
              onClick={() => {
                logout();
                setIsLoggedIn(false);
              }}
            >
              Logout
            </li>
            <li>
              <img
                onClick={() => navigate("/account")}
                src={photo}
                alt="user-photo"
                className="w-12 h-12 rounded-full cursor-pointer hover:border-4 hover:border-green-500 transition-all"
              />
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/login"
              className={`${
                pathname === "/login" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
              } transition-all duration-200`}
            >
              Login
            </Link>
          </li>
        )}
      </ul>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-3xl cursor-pointer hover:text-purple-700 transition-all"
        onClick={() => setHamburgerMenu((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {hamburgerMenu ? "X" : "☰"}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`fixed max-md:w-[50%] top-20 md:hidden bg-gray-700 w-48 p-6 flex flex-col space-y-6 transition-all duration-300 ease-in-out ${
          hamburgerMenu ? "right-0" : "right-[-50%]"
        }`}
      >
        <li>
          <Link
            to="/"
            className={`${
              pathname === "/" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
            } transition-all duration-200`}
            onClick={() => setHamburgerMenu(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className={`${
              pathname === "/blogs" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
            } transition-all duration-200`}
            onClick={() => setHamburgerMenu(false)}
          >
            Read Blogs
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link
                to="/add-blog"
                className={`${
                  pathname === "/add-blog" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
                } transition-all duration-200`}
                onClick={() => setHamburgerMenu(false)}
              >
                Write Blog
              </Link>
            </li>
            <li
              className="cursor-pointer hover:bg-purple-700 p-2 rounded-md transition-all duration-200"
              onClick={() => {
                logout();
                setIsLoggedIn(false);
              }}
            >
              Logout
            </li>
            <li>
              <div
                className="relative"
                onClick={() => {
                  navigate("/account");
                  setHamburgerMenu(false);
                }}
              >
                <img
                  src={photo}
                  alt="user-photo"
                  className="w-12 h-12 rounded-full cursor-pointer hover:border-4 hover:border-green-500 transition-all"
                />
              </div>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/login"
              className={`${
                pathname === "/login" ? "border-b-2 border-purple-700" : "hover:border-b-2 hover:border-purple-700"
              } transition-all duration-200`}
              onClick={() => setHamburgerMenu(false)}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
