import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../utils/fetchData";
import { deleteBlog } from "../utils/fetchData";
import {useUser} from "../context/userContext"

import Loader from "./Loader";

const Blogdetail = () => {
  const { isLoggedIn, userId } = useUser();
  const { blogId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlog(blogId),
  });
  const imageId = data?.blog?.image?.split("/")[7].split(".")[0];

  return (
    <div className="blog-details ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <div className="blog-delete">
          <span>Writer : {data?.blog?.postedBy.username}</span>
           {isLoggedIn === true && userId === data?.blog?.postedBy._id ? (
          <button
            onClick={() => {
              const response = confirm("Are You Sure?");
              if (response) deleteBlog(blogId,imageId);
            }}
          >
            Delete
          </button>
        ) : (
          ""
        )}
        </div>

          <img
            src={
              data?.blog?.image ? data?.blog?.image : "/blog-dummy-image.jpg"
            }
            alt=""
          />
          <h1>{data?.blog?.title}</h1>
          <p>{data?.blog?.body}</p>
        </>
      )}
      
    </div>
  );
};

export default Blogdetail;
