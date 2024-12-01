import { createContext, useContext, useEffect, useState } from "react";
import {BLOG_BACKEND_URL,CHECK_URL} from "../utils/constants"

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [onPage,setOnPage]= useState(false)
  const [username,setUsername]=useState("")
  const [photo,setPhoto]=useState("")
  const [userBlogs,setUserBlogs]=useState(null)

  
   const myBlogs = async ()=>{
    const response = await fetch(BLOG_BACKEND_URL+"my-blogs",{
      method: "GET",
      credentials: "include"
    })

    const data = await response.json();
    setUserBlogs(data.blogs)
   }


  const checkCookie = async () => {
    const response = await fetch(
      CHECK_URL,
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
      setPhoto(data?.photo)
    } else {
      setIsLoggedIn(false);
      setUserId(null);
      setUsername("")
      setPhoto("")
    }
  };

  useEffect(() => {
    checkCookie();
  }, []);

  useEffect(()=>{
   myBlogs()
  },[])

  return (
    <userContext.Provider
      value={{ isLoggedIn, userId, setIsLoggedIn, setUserId ,onPage,setOnPage,username,photo,userBlogs , setUserBlogs}}
    >
      {children}
    </userContext.Provider>
  );
};
const useUser = () => useContext(userContext);

export { UserProvider, useUser };
