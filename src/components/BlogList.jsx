import { getBlogs } from "../utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import Blog from "./Blog";
import Loader from "./Loader";

const BlogList = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isError) {
    return <div className="text-red-500">{error.message}</div>;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-[95%] mx-auto p-4">
      {/* Blog List Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.blogs.map((blog) => (
          <Blog key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
