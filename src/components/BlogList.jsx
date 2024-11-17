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
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-[95%] p-2 my-3 flex flex-wrap mx-auto">
     
      {data?.blogs.map((blog) => (
        <Blog key={blog._id} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
