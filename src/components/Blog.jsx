import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import { deleteBlog } from "../utils/fetchData";
import { Toaster } from "react-hot-toast";

const Blog = ({ _id, title, body, createdAt, updatedAt, postedBy }) => {
  const { isLoggedIn, userId } = useUser();

  return (
    <div className="blog">
      <div id="blog-delete">
        <span>Writer : {postedBy.username}</span>

        {isLoggedIn === true && userId === postedBy._id ? (
          <button
            onClick={() => {
              const response = confirm("Are You Sure?");
              if (response) deleteBlog(_id);
            }}
          >
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
      <h1>{title}</h1>
      <Link to={`/blog/${_id}`}>Read ➡️</Link>
      <Toaster />
    </div>
  );
};

export default Blog;
