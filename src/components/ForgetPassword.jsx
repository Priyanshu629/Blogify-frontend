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
    <div className="login-form ">
      <h3>Enter Your Email</h3>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button
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
