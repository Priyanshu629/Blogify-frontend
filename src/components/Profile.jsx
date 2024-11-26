import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../utils/auth";

const Profile = () => {
  const { data: user } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <div className="md:w-[75%] w-full md:ml-[25%] p-6 flex flex-col items-center">
      {/* Profile Image */}
      <img
        className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6"
        src={
          user?.photo ||
          "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719964800&semt=ais_user"
        }
        alt="photo"
        loading="lazy"
      />
      
      {/* Profile Form Section */}
      <section className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
        <h2 className="text-2xl font-semibold text-center text-violet-700 mb-4">Profile Details</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="name"
            value={user?.name || ""}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="username"
            value={user?.username || ""}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            id="email"
            value={user?.email || ""}
            readOnly
          />
        </div>
      </section>
    </div>
  );
};

export default Profile;
