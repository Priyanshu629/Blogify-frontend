import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addBlog } from "../utils/fetchData";
import { Toaster } from "react-hot-toast";
import { useUser } from "../context/userContext";

const AddBlog = () => {
  const { isLoggedIn } = useUser();
  const { mutate } = useMutation({
    mutationFn: ({ title, body, image }) => addBlog({ title, body, image }),
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (isLoggedIn === false) {
      return (window.location.href = "/");
    }
  }, [isLoggedIn]);


  return (
    <div className="add-blog">
      <h1>Write Blog</h1>

      <label htmlFor="image" className="image">
        {image ? image.name : "Choose Image for your blog + (*optional)"}
      </label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        hidden
        id="image"
      />

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

      <button onClick={() => mutate({ title, body, image })}>Submit</button>

      <Toaster />
    </div>
  );
};

export default AddBlog;
