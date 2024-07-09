import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";

const Blog = ({ _id, title, body, image, createdAt, updatedAt, postedBy }) => {
  const createDate = new Date(createdAt);
  return (
    <div className="blog">
      <span id="posted">
        Posted On : {createDate.toDateString()} at{" "}
        {createDate.toLocaleTimeString("en-US",{
          hour12: true,
          hour: "numeric",
          minute: "numeric"
        })}
      </span>

      <img
        className="photo"
        src={image ? image : "/blog-dummy-image.jpg"}
        alt="photo"
      />
      <h1>{title}</h1>
      <Link to={`/blog/${_id}`}>Read ➡️</Link>
      <Toaster />
    </div>
  );
};

export default Blog;
