import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {  addBlog} from "../utils/fetchData";
import { Toaster } from "react-hot-toast";
import { useUser } from "../context/userContext";


const AddBlog = () => {
  const {isLoggedIn}=useUser()
  const { mutate} = useMutation({
    mutationFn: ({ title,body }) =>
      addBlog({ title,body}),
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

 if(isLoggedIn===false){
    return window.location.href="/"
 }  

  return (
    <div className="add-blog">
      <h1>Write Blog</h1>

      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />
      <textarea
        rows={"8"}
        name=""
        id="text-area"
        placeholder="Enter Body"
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <button onClick={() => mutate({ title, body })} >Submit</button>
      
      <Toaster />
    </div>
  );
};

export default AddBlog;
