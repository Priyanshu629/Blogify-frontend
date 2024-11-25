import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../utils/auth";



const Profile = () => {

    const { data: user } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
      });

  return (
    <div className={`md:w-[75%] w-[100%] md:ml-[25%] p-2 `}>

<img
        className="w-[20%] max-md:w-[50%] rounded-full"
        src={
          user?.photo
            ? user?.photo
            : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719964800&semt=ais_user"
        }
        alt="photo"
        loading="lazy"
      />
      <section className="flex flex-col my-4 font-bold items-start border-2 border-black p-2 rounded-md">


        <input className="w-[100%] p-2 my-2 text-lg text-violet-700" type="text" value={user?.name || ""} id="name" readOnly />


        <input
          type="text"
          value={user?.username || ""}
          id="username"
          readOnly
          className="w-[100%] my-2 text-lg p-2 text-violet-700"
        />


        <input type="email" value={user?.email || ""} id="email" readOnly className="w-[100%] my-2 text-lg text-violet-700 p-2" />

      </section>

      
    </div>
  )
}

export default Profile
