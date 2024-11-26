import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Blog = ({ _id, title, image, createdAt }) => {
  const createDate = new Date(createdAt);

  // Formats date and time
  const formattedDate = createDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = createDate.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" });

  return (
    <div className="flex flex-col gap-4 mx-2 my-4 max-w-[350px] min-h-[350px] p-4 border-2 border-gray-300 rounded-lg shadow-lg shadow-slate-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <span className="bg-pink-500 p-2 text-white text-sm rounded-md">
        Posted On: {formattedDate} at {formattedTime}
      </span>

      <img
        className="w-full h-auto mx-auto rounded-md border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
        src={image || "/blog-dummy-image.jpg"}
        alt={title}
        loading="lazy"
        width={350}
        height={200}
      />

      <h1 className="font-semibold text-xl mt-2 text-gray-900">{title}</h1>

      <Link
        className="bg-green-700 hover:bg-green-600 text-center p-2 rounded-md text-white font-semibold transition-colors duration-300"
        to={`/blog/${_id}`}
      >
        Read More
      </Link>

      <Toaster />
    </div>
  );
};

export default Blog;
