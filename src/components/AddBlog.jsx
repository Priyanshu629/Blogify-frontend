import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addBlog } from "../utils/fetchData";
import { Toaster } from "react-hot-toast";

import Loading from "./Loading";

const AddBlog = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ title, body, image }) => addBlog({ title, body, image }),
  });

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white my-6 border-2 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Write a New Blog
      </h1>

      {/* Image Selection */}
      <div className="mb-6">
        <label
          htmlFor="image"
          className="text-gray-700 font-medium block mb-2 cursor-pointer hover:border-green-400 transition-all"
        >
          {image ? (
            <span className="text-green-600">{image.name}</span>
          ) : (
            "Choose an Image for your Blog (Optional)"
          )}
        </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          hidden
          id="image"
          className="mt-2"
        />
      </div>

      {/* Title Input */}
      <div className="mb-6">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Blog Title"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* Body Input */}
      <div className="mb-6">
        <textarea
          rows="8"
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your Blog Body"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        onClick={() => mutate({ title, body, image })}
        disabled={isLoading || title === "" || body === ""}
        className={`w-full py-4 text-white rounded-md ${
          isLoading || title === "" || body === ""
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 transition duration-200"
        }`}
      >
        {isLoading ? <Loading message="Adding Blog..." /> : "Add Blog"}
      </button>

      <Toaster />
    </div>
  );
};

export default AddBlog;
