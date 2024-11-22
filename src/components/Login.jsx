import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "../utils/auth";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  const { mutate , isPending } = useMutation({
    mutationFn: ({ username, password }) => handleLogin({ username, password }),
  });
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-[40%] max-sm:w-[90%] flex flex-col mx-auto my-4 border-2 border-black p-4 ">
      <h1 className="font-bold text-center bg-violet-500 p-2 text-white text-xl">Welcome Back !!</h1>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your username"
        className="w-full p-2 border-2 my-2 border-gray-500"
      />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
         className="w-full p-2 border-2 my-2 border-gray-500"
      />

      <button className="bg-green-950 hover:bg-green-800 text-white p-2 text-lg" onClick={() => mutate({ username, password })}>{username!=="" && isPending?<Loading message={"Logging in..."}/>:"Login"}</button>
      
        <Link className="my-2 font-bold text-red-600 underline" to={"/forget-password"}>Forget Password ?</Link>
    
      <p>
        Do not have an account? <Link className="underline font-bold text-blue-500" to={"/signup"}>Create Account</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default Login;
