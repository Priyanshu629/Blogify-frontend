import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../utils/auth";
import { useUser } from "../context/userContext";
import { useEffect } from "react";

const Profile = () => {
  const {isLoggedIn}=useUser()
  const { data: user } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  
 useEffect(()=>{
  if(isLoggedIn===false){
    return window.location.href="/"
 } 
 },[isLoggedIn])

  return (
    <div className="profile ">
      <h1>Your Profile</h1>

      <img
        className="photo"
        src={
          user?.photo
            ? user?.photo
            : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719964800&semt=ais_user"
        }
        alt="photo"
        loading="lazy"
      />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={user?.name || ""} id="name" readOnly />
      </div>
      <div>
        <label htmlFor="">User Name</label>
        <input
          type="text"
          value={user?.username || ""}
          id="username"
          readOnly
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" value={user?.email || ""} id="email" readOnly />
      </div>

      <button>Update</button>
    </div>
  );
};

export default Profile;
