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
    <div className="max-w-3xl mx-auto p-6 bg-white my-4 border-2 shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Write Blog</h1>

      <div className="mb-4">
        <label htmlFor="image" className="text-gray-700 font-medium block border-2 p-2 cursor-pointer hover:border-green-400">
          {image ? image.name : "Choose Image for your blog + (*optional)"}
        </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          hidden
          id="image"
          className="mt-2"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <textarea
          rows="8"
          name=""
          id="text-area"
          placeholder="Enter Body"
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        onClick={() => mutate({ title, body, image })}
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>

      <Toaster />
    </div>
  );
};

export default AddBlog;
