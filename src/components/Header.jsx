import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { logout } from "../utils/auth";
import { useState, useEffect } from "react";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setUserId, photo } = useUser();
  const [profileMenu, setProfileMenu] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenu((prev) => !prev);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerMenu((prev) => !prev);
  };

  const closeMenus = () => {
    setProfileMenu(false);
    setHamburgerMenu(false);
  };

  // UseEffect to reset cursor whenever profile or hamburger menu is toggled
  useEffect(() => {
    // Reset the cursor to default when closing the menus
    const resetCursor = () => {
      document.body.style.cursor = "default"; 
    };

    // Reset cursor style on menu close or on link click
    if (!profileMenu && !hamburgerMenu) {
      resetCursor();
    }

    return () => {
      // Cleanup cursor reset if the component unmounts
      document.body.style.cursor = "default";
    };
  }, [profileMenu, hamburgerMenu]);

  return (
    <header className="flex w-full justify-between px-4 h-20 bg-blue-900 items-center text-xl text-white font-semibold relative">
      <Link to="/" className="text-2xl font-bold" onClick={closeMenus}>
        Blogify
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 items-center">
        <li>
          <Link to="/" onClick={closeMenus}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/blogs" onClick={closeMenus}>
            Read Blogs
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/add-blog" onClick={closeMenus}>
                Write Blog
              </Link>
            </li>
            <li>
              <img
                onClick={toggleProfileMenu}
                src={photo}
                alt="user-photo"
                className="w-[50px] rounded-full cursor-pointer hover:border-4 hover:border-green-500 transition-all"
              />
            </li>
            <div
              className={`absolute top-16 right-4 bg-green-600 rounded shadow-md p-4 flex flex-col items-center space-y-2 transition-transform ${profileMenu ? "scale-100" : "scale-0"}`}
            >
              <Link to="/profile" onClick={closeMenus}>
                Profile
              </Link>
              <Link to="/my-blogs" onClick={closeMenus}>
                My Blogs
              </Link>
              <button
                onClick={() => {
                  logout(setIsLoggedIn, setUserId);
                  closeMenus();
                }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <li>
            <Link to="/login" onClick={closeMenus}>
              Login
            </Link>
          </li>
        )}
      </ul>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-2xl cursor-pointer"
        onClick={toggleHamburgerMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      {hamburgerMenu && (
        <ul className="absolute top-20 right-0 bg-gray-700 w-48 p-4 flex flex-col space-y-4 md:hidden">
          <li>
            <Link to="/" onClick={closeMenus}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={closeMenus}>
              Read Blogs
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/add-blog" onClick={closeMenus}>
                  Write Blog
                </Link>
              </li>
              <li>
                <div
                  className="relative"
                  onClick={toggleProfileMenu}
                >
                  <img
                    src={photo}
                    alt="user-photo"
                    className="w-[50px] rounded-full cursor-pointer hover:border-4 hover:border-green-500 transition-all"
                  />
                  {profileMenu && (
                    <div className="absolute top-12 left-0 w-full bg-green-600 rounded shadow-md p-4 flex flex-col items-center space-y-2 max-h-48 overflow-auto">
                      <Link to="/profile" onClick={closeMenus}>
                        Profile
                      </Link>
                      <Link to="/my-blogs" onClick={closeMenus}>
                        My Blogs
                      </Link>
                      <button
                        onClick={() => {
                          logout(setIsLoggedIn, setUserId);
                          closeMenus();
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
              <Link to="/login" onClick={closeMenus}>
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
