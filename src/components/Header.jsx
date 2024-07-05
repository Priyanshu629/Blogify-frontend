import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { logout } from "../utils/auth";

const Header = () => {
  const { isLoggedIn } = useUser();

  return (
    <header>
      <Link to={"/"} className="logo">
        Blogify
      </Link>

      <ul>
        {isLoggedIn === true ? (
          <>
          <li>
              <Link to="/add-blog" className="link">
                Write Blog
              </Link>
            </li>
            <li>
              <Link to="/profile" className="link">
                Profile
              </Link>
            </li>
            <li>
              <button onClick={logout} id="logout">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link">
                SignUp
              </Link>
            </li>
            
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
