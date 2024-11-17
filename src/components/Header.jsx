import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { logout } from "../utils/auth";
import { useState } from "react";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setUserId } = useUser();
  const [profileMenu, setProfileMenu] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenu((prev) => !prev);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerMenu((prev) => !prev);
  };

  return (
    <header className="flex w-full justify-between px-4 h-20 bg-blue-800 items-center text-xl text-white font-semibold relative">
      <Link to="/" className="text-2xl font-bold">
        Blogify
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Read Blogs</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/add-blog">Write Blog</Link>
            </li>
            <li>
              <button
                onClick={toggleProfileMenu}
              >Account</button>
            </li>
            <div
              className={`absolute top-16 right-4 bg-green-600 rounded shadow-md p-4 flex flex-col items-center space-y-2 transition-transform ${profileMenu ? "scale-100" : "scale-0"
                }`}
            >
              <Link to="/profile" onClick={() => setProfileMenu(false)}>
                Profile
              </Link>
              <button
                onClick={() => {
                  logout(setIsLoggedIn, setUserId);
                  setProfileMenu(false);
                }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleHamburgerMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      {hamburgerMenu && (
        <ul className="absolute top-20 right-0 bg-gray-700 w-48 p-4 flex flex-col space-y-4 md:hidden">
          <li>
            <Link to="/" onClick={toggleHamburgerMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={toggleHamburgerMenu}>
              Read Blogs
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/add-blog" onClick={toggleHamburgerMenu}>
                  Write Blog
                </Link>
              </li>
              <li>
                <div
                  className="relative"
                  onClick={toggleProfileMenu}
                >
                  <button
                    
                  >Account</button>
                  {profileMenu && (
                    <div className="absolute top-12 left-0 w-full bg-green-600 rounded shadow-md p-4 flex flex-col items-center space-y-2 max-h-48 overflow-auto">
                      <Link to="/profile" onClick={toggleHamburgerMenu}>
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          logout(setIsLoggedIn, setUserId);
                          setHamburgerMenu(false);
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" onClick={toggleHamburgerMenu}>
                Login
              </Link>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Header;
