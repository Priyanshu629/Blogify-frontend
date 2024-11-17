import { Link, useParams } from "react-router-dom";
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
    <div className="my-2 p-2 w-[90%] mx-auto  rounded-md ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <div className="w-[100%] flex justify-between items-center p-2 font-bold bg-green-500 my-2">
          <span>Writer : {data?.blog?.postedBy.username}</span>
           {isLoggedIn === true && userId === data?.blog?.postedBy._id ? (
          <button 
          className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
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
            alt="blog image"
            loading="lazy"
            className="w-[20%] max-sm:w-[45%]"
          />
          <h1 className="my-2 text-2xl font-bold">{data?.blog?.title}</h1>
          <p className="font-bold italic border-2 border-black p-2 my-4">{data?.blog?.body}</p>
          <p className="my-4 p-2">
          <Link to={'/blogs'} className="border-2 border-black p-2 ">Go Back</Link>
          </p>
        </>
      )}
      
    </div>
  );
};

export default Blogdetail;
