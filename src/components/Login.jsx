import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "../utils/auth";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ username, password }) => handleLogin({ username, password }),
  });
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full sm:w-[400px] mx-auto my-8 p-8 border-2 border-gray-300 rounded-lg shadow-xl bg-white">
      <h1 className="text-center text-3xl font-semibold bg-gradient-to-r from-violet-500 to-purple-600 text-white py-3 px-6 rounded-t-md shadow-md">
        Welcome Back!
      </h1>

      <div className="mt-8">
        {/* Username Input */}
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />

        {/* Password Input */}
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-4 mb-6 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        />

        {/* Login Button */}
        <button
          className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-md transition-all duration-300 ease-in-out hover:from-green-700 hover:to-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
          onClick={() => mutate({ username, password })}
        >
          {username !== "" && isPending ? (
            <Loading message={"Logging in..."} />
          ) : (
            "Login"
          )}
        </button>

        {/* Forgot Password Link */}
        <Link className="block text-center my-4 text-sm font-medium text-blue-500 hover:text-blue-700" to={"/forget-password"}>
          Forgot Password?
        </Link>

        {/* Signup Link */}
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link className="underline text-blue-500 font-medium hover:text-blue-700" to={"/signup"}>
            Create Account
          </Link>
        </p>
      </div>

      <Toaster />
    </div>
  );
};

export default Login;
