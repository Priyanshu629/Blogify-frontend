import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {handleSignUp} from "../utils/auth"
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { mutate ,isSuccess} = useMutation({
    mutationFn: ({ photo,username, password,name,email }) => handleSignUp({ photo,username, password,name,email }),
  });
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  return (
    <div className="login-form">
     
      <h1>Register</h1>

      <label htmlFor="photo">
        <img
          className="photo"
          src={
            photo
              ? URL.createObjectURL(photo)
              : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719964800&semt=ais_user"
          }
          alt="photo"
        />
      </label>

      <input
        type="file"
        id="photo"
        hidden
        onChange={(e) => setPhoto(e.target.files[0])}
      />

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your username"
      />

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <button onClick={() => mutate({ photo,username, password,name,email })}>Submit</button>
      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignUp;
