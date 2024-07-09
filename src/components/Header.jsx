import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { logout } from "../utils/auth";

const Header = () => {
  const { isLoggedIn,setIsLoggedIn,setUserId } = useUser();

  

  const toggleMenu=(e)=>{
    let menu = document.getElementById("hamburger")

     if(menu.style.display==="none"){
      menu.style.display="flex"
    
     }else{
     
      menu.style.display="none"
     }
  }

  const toggleLink=()=>{
    let menu = document.getElementById("hamburger")
    menu.style.display="none"
  }
  
  return (
    <header>
      <Link to={"/"} className="logo">
        Blogify
      </Link>
      
      <ul>
      
      <li>
        <Link to={"/"} className="link" >Home</Link>
      </li>
        {isLoggedIn === true ? (
          <>
          <li>
              <Link to="/add-blog" className="link" >
                Write Blog
              </Link>
            </li>
            <li>
              <Link to="/profile" className="link" >
                Profile
              </Link>
            </li>
            <li>
              <button onClick={()=>logout(setIsLoggedIn,setUserId)} id="logout">
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
<>     <i onClick={toggleMenu}>Menu</i>
      <ul id="hamburger" >
      <li>
        <Link to={"/"} className="link" onClick={toggleLink}>Home</Link>
      </li>
        {isLoggedIn === true ? (
          <>
          <li>
              <Link to="/add-blog" className="link" onClick={toggleLink}>
                Write Blog
              </Link>
            </li>
            <li>
              <Link to="/profile" className="link" onClick={toggleLink}>
                Profile
              </Link>
            </li>
            <li>
              <button onClick={()=>{
                logout(setIsLoggedIn,setUserId)
                toggleLink()
              }} id="logout" >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="link" onClick={toggleLink}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link" onClick={toggleLink}>
                SignUp
              </Link>
            </li>
            
          </>
        )}
      </ul>
      </>
    </header>
  );
};

export default Header;
