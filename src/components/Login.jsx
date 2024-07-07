import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "../utils/auth";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { mutate } = useMutation({
    mutationFn: ({ username, password }) => handleLogin({ username, password }),
  });
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form ">
      <h1>Login</h1>
      <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Enter your username" />
      
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
      
      <button onClick={() => mutate({ username, password })}>Submit</button>
      <p>Do not have an account? <Link to={'/signup'}>Create Account</Link></p>
      <Toaster />
    </div>
  );
};

export default Login;
