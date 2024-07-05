import { createContext,useContext, useEffect, useState } from "react";

const userContext = createContext()

const UserProvider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]= useState(false)
    const [userId,setUserId]= useState(null)

    useEffect(()=>{
       const login = localStorage.getItem("login")
       const user= localStorage.getItem("user")
       if(login && user){
        setIsLoggedIn(true)
        setUserId(user)
       }else{
        setIsLoggedIn(false)
        setUserId(null)
       }
    },[])

    return (
        <userContext.Provider value={{isLoggedIn,userId}}>
            {children}
        </userContext.Provider>
    )
}
const useUser =()=> useContext(userContext)

export {UserProvider,useUser}