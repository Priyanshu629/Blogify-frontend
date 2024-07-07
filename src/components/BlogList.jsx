import { getBlogs } from "../utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import Blog from "./Blog";

const BlogList = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-list ">
      {data?.blogs.map((blog) => (
        <Blog key={blog._id} {...blog} />
      ))}
      
    </div>
  );
};

export default BlogList;
