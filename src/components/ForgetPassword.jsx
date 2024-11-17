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
    
    <div className="w-[25%] max-sm:w-[90%] border-2 border-black p-2 mx-auto rounded-md flex flex-col bg-teal-400 my-6">
      <h3 className="bg-violet-700 text-white p-2 font-bold text-center ">Enter Your Email</h3>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        required
        className="my-4 w-full p-2 border-2 border-gray-600"
        placeholder="Email Id For OTP"
      />
      <button
      className="bg-pink-700 hover:bg-pink-500 text-white text-center p-2"
        onClick={() => {
          if (email === "") return;
          mutate({ email });
        }}
        
      >
        Send Otp
      </button>
      <Toaster />
    </div>
    
  );
};

export default ForgetPassword;
