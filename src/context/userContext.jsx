import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [onPage,setOnPage]= useState(false)
  const [username,setUsername]=useState("")

  
   

  const checkCookie = async () => {
    const response = await fetch(
      "https://blogify-backend-ur0p.onrender.com/api/v1/check",
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();

    if (response.status === 200) {
      setIsLoggedIn(true);
      setUserId(data?.userId);
      setUsername(data?.username)
    } else {
      setIsLoggedIn(false);
      setUserId(null);
      setUsername("")
    }
  };
  useEffect(() => {
    checkCookie();
  }, [isLoggedIn]);

  return (
    <userContext.Provider
      value={{ isLoggedIn, userId, setIsLoggedIn, setUserId ,onPage,setOnPage,username}}
    >
      {children}
    </userContext.Provider>
  );
};
const useUser = () => useContext(userContext);

export { UserProvider, useUser };
