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
    <div className="w-[25%] max-sm:w-[90%] border-2 border-black p-2 mx-auto rounded-md flex flex-col bg-teal-400 my-6">
      <h1 className="bg-violet-700 text-white p-2 font-bold text-center ">Reset Password</h1>
      <input
        type="text"
        onChange={(e) => setOTP(e.target.value)}
        placeholder="Enter OTP"
        className="my-4 w-full p-2 border-2 border-gray-600"
      />

      <input
        type="password"
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
        className="my-4 w-full p-2 border-2 border-gray-600"
      />

      <button
       className="bg-pink-700 hover:bg-pink-500 text-white text-center p-2"
        onClick={() => {
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
