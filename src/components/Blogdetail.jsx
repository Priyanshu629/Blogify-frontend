import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../utils/fetchData";
import { useUser } from "../context/userContext";
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
    <div className="my-6 p-6 w-[90%] mx-auto max-w-4xl rounded-lg bg-white shadow-xl">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Header Section with Writer */}
          <div className="flex justify-between items-center bg-green-500 text-white p-4 rounded-t-lg mb-6">
            <span className="font-semibold text-lg">
              Writer: {data?.blog?.postedBy.username}
            </span>
          </div>

          {/* Blog Image and Title Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <img
              src={data?.blog?.image ? data?.blog?.image : "/blog-dummy-image.jpg"}
              alt="blog"
              className="w-full sm:w-[45%] max-w-[400px] rounded-lg shadow-md mb-4 sm:mb-0"
              loading="lazy"
            />
            <div className="sm:ml-6 flex flex-col sm:w-[50%]">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{data?.blog?.title}</h1>
            </div>
          </div>

          {/* Blog Content Section */}
          <p className="font-medium text-gray-800 border-l-4 border-green-500 pl-4 py-6 mb-8 bg-gray-50">
            {data?.blog?.body}
          </p>

          {/* Go Back Link */}
          <div className="mt-6 text-center">
            <Link
              to="/blogs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-300"
            >
              Go Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Blogdetail;
