import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";

const Blog = ({ _id, title,  image, createdAt }) => {
  const createDate = new Date(createdAt);
  return (
    <div className="flex flex-col gap-4 mx-2 my-2 max-w-[350px] min-h-[300px] p-2 border-2 border-black rounded-md shadow-md shadow-slate-400">
      <span className="bg-pink-500 p-1 text-white">
        Posted On : {createDate.toDateString()} at{" "}
        {createDate.toLocaleTimeString("en-US",{
          hour12: true,
          hour: "numeric",
          minute: "numeric"
        })}
      </span>

      <img
        className="w-[70%] h-[70%] mx-auto rounded-md border-2 border-black "
        src={image ? image : "/blog-dummy-image.jpg"}
        alt="photo"
        loading="lazy"
      />
      <h1 className="font-bold text-lg"> 👉 {title}</h1>
      <Link className="bg-green-700 hover:bg-green-600 text-center p-1 rounded-md text-white font-sans" to={`/blog/${_id}`}>Read</Link>
      <Toaster />
    </div>
  );
};

export default Blog;
