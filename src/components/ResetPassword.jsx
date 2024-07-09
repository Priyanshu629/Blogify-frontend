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
    <div className="login-form">
      <h1>Reset Password</h1>
      <input
        type="text"
        onChange={(e) => setOTP(e.target.value)}
        placeholder="Enter OTP"
      />

      <input
        type="password"
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
      />

      <button
        onClick={() => {
          mutate({ otp, newPassword });
          setOTP("");
          setNewPassword("");
        }}
      >
        Submit
      </button>

      <Toaster />
    </div>
  );
};

export default ResetPassword;
