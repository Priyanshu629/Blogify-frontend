import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleSignUp } from "../utils/auth";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ username, email, password }) =>
      handleSignUp({ username, email, password }),
    onSuccess: () => {
      toast.success("Signup successful!");
    },
    onError: (error) => {
      toast.error(error.message || "Signup failed. Please try again.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast.error("All fields are required!");
      return;
    }
    mutate({ username, email, password });
  };

  return (
    <div className="w-[40%] max-sm:w-[90%] flex flex-col mx-auto my-4 border-2 border-black p-4">
      <h1 className="font-bold text-center bg-violet-500 p-2 text-white text-xl">
        Create Your Account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="username" className="font-medium my-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          aria-label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border-2 border-gray-500"
          required
        />

        <label htmlFor="email" className="font-medium my-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          aria-label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border-2 border-gray-500"
          required
        />

        <label htmlFor="password" className="font-medium my-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            aria-label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border-2 border-gray-500"
            required
            minLength="6"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-950 hover:bg-green-800 text-white p-2 my-4 text-lg"
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link className="underline font-bold text-blue-500" to="/login">
          Login
        </Link>
      </p>
      <Toaster />
    </div>
  );
};

export default Signup;
