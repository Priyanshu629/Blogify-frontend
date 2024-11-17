import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {handleSignUp} from "../utils/auth"
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { mutate ,isSuccess} = useMutation({
    mutationFn: ({ photo,username, password,name,email }) => handleSignUp({ photo,username, password,name,email }),
  });
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  return (
    <div className="w-[40%] flex flex-col mx-auto my-4 border-4 border-cyan-500 p-2 max-sm:w-[90%] ">
     
     <h1 className="font-bold text-center bg-violet-500 p-2 text-white text-xl">Register Yourself</h1>

      <label htmlFor="photo">
        <img
          className="w-[35%] mx-auto cursor-pointer"
          src={
            photo
              ? URL.createObjectURL(photo)
              : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719964800&semt=ais_user"
          }
          alt="photo"
        />
      </label>

      <input
        type="file"
        id="photo"
        hidden
        onChange={(e) => setPhoto(e.target.files[0])}
        
      />

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full border-2 border-black p-2 rounded-md my-2"
      />

      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your username"
        className="w-full border-2 border-black p-2 rounded-md my-2"
      />

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full border-2 border-black p-2 rounded-md my-2"
      />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="w-full border-2 border-black p-2 rounded-md my-2"
      />

      <button className="bg-green-500 font-bold p-2 rounded-md hover:bg-green-800 text-white text-lg" onClick={() => mutate({ photo,username, password,name,email })}>Submit</button>
      <p className="my-2">
        Already have an account? <Link to={"/login"} className="underline text-blue-600 font-bold">Login</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignUp;
