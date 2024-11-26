import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../utils/auth";

const ResetPassword = () => {
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { mutate } = useMutation({
    mutationFn: ({ otp, newPassword }) => resetPassword({ otp, newPassword }),
  });

  return (
    <div className="w-[100%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto border-2 border-gray-200 p-6 rounded-lg flex flex-col bg-teal-400 my-6 shadow-md">
      <h1 className="bg-violet-700 text-white py-3 text-lg font-semibold text-center rounded-md mb-6">
        Reset Password
      </h1>

      <input
        type="text"
        onChange={(e) => setOTP(e.target.value)}
        value={otp}
        placeholder="Enter OTP"
        className="my-4 w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
      />

      <input
        type="password"
        onChange={(e) => setNewPassword(e.target.value)}
        value={newPassword}
        placeholder="Enter new password"
        className="my-4 w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
      />

      <button
        className="bg-pink-700 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out"
        onClick={() => {
          if (otp === "" || newPassword === "") return;
          mutate({ otp, newPassword });
        }}
      >
        Submit
      </button>

      <Toaster />
    </div>
  );
};

export default ResetPassword;
