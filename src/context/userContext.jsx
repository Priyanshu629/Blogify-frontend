import { createContext,useContext, useEffect, useState } from "react";


const userContext = createContext()

const UserProvider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]= useState(false)
    const [userId,setUserId]= useState(null)

    const checkCookie=async()=>{
         const response = await fetch("https://blogify-backend-ur0p.onrender.com/api/v1/check",{
            method:"GET",
            credentials:"include"
         })
         const data = await response.json()
           console.log(data);
         if(response.status===200){

            setIsLoggedIn(true)
            setUserId(data.userId)
         }
         else{
            setIsLoggedIn(false)
            setUserId(null)
         }

    }
    useEffect(()=>{   
       checkCookie()
    },[])

console.log(isLoggedIn,userId);
    return (
        <userContext.Provider value={{isLoggedIn,userId}}>
            {children}
        </userContext.Provider>
    )
}
const useUser =()=> useContext(userContext)

export {UserProvider,useUser}