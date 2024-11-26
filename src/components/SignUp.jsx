import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleSignUp } from "../utils/auth";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { mutate, isLoading, isPending } = useMutation({
    mutationFn: (formData) => handleSignUp(formData),
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfilePicture(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a valid image file.");
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !profilePicture) {
      toast.error("All fields, including a profile picture, are required!");
      return;
    }

    mutate({ name, username, email, password, profilePicture });
  };

  return (
    <div className="w-[100%] sm:w-[400px] mx-auto my-8 p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <h1 className="text-center text-2xl font-semibold bg-gradient-to-r from-violet-500 to-purple-600 text-white p-4 rounded-t-md">
        Create Your Account
      </h1>

      {/* Image Upload Section at the Top */}
      <div className="relative mb-6">
        <input
          type="file"
          id="profilePicture"
          aria-label="Profile Picture"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"  // Hide default file input
        />
        <button
          type="button"
          onClick={() => document.getElementById("profilePicture").click()}
          className="w-full py-3 border-2 border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          {profilePicture ? "Change Profile Picture" : "Upload Profile Picture"}
        </button>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4 text-center">
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-gray-300"
            />
          </div>
        )}
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="flex flex-col">

        <label htmlFor="name" className="font-medium my-2">Name</label>
        <input
          type="text"
          id="name"
          aria-label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <label htmlFor="username" className="font-medium my-2">Username</label>
        <input
          type="text"
          id="username"
          aria-label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <label htmlFor="email" className="font-medium my-2">Email</label>
        <input
          type="email"
          id="email"
          aria-label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <label htmlFor="password" className="font-medium my-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            aria-label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
          className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-md transition-all hover:from-green-700 hover:to-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
          disabled={isLoading}
        >
          {isPending ? <Loading message="Signing up..." /> : "Sign Up"}
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link className="underline font-bold text-blue-500 hover:text-blue-700" to="/login">
          Login
        </Link>
      </p>

      <Toaster />
    </div>
  );
};

export default Signup;
