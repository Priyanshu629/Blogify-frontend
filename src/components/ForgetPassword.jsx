import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { forgetPassword } from "../utils/auth";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const { mutate } = useMutation({
    mutationFn: ({ email }) => forgetPassword({ email }),
  });

  return (
    <div className="w-[100%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto border-2 border-gray-200 p-6 rounded-lg flex flex-col bg-teal-400 my-6 shadow-md">
      <h3 className="bg-violet-700 text-white py-3 text-lg font-semibold text-center rounded-md mb-6">
        Enter Your Email
      </h3>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        className="my-4 w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
        placeholder="Email Id For OTP"
      />
      <button
        className="bg-pink-700 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out"
        onClick={() => {
          if (email === "") return;
          mutate({ email });
        }}
      >
        Send OTP
      </button>
      <Toaster />
    </div>
  );
};

export default ForgetPassword;
