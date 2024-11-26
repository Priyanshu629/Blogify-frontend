import { deleteBlog } from "../utils/fetchData";

const MyBlogCard = ({ _id, title, image, body, setIsDelete, isDelete }) => {
  const imageId = image?.split("/")[7].split(".")[0];

  const handleDelete = async () => {
    await deleteBlog(_id, imageId);
    setIsDelete(false);
  };

  return (
    <div className="w-full p-4 sm:w-11/12 md:w-9/12 lg:w-7/12 mx-auto my-6 rounded-lg shadow-lg bg-white">
      {/* Confirmation Popup */}
      <div
        className={`w-full sm:w-[80%] md:w-[30%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black p-6 rounded-lg transition-transform ${
          isDelete ? "scale-100" : "scale-0"
        } bg-pink-600 text-white font-semibold z-20`}
      >
        <h1 className="text-xl font-bold mb-4">Are you sure?</h1>
        <div className="flex justify-between">
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition-all"
          >
            Yes
          </button>
          <button
            onClick={() => setIsDelete(false)}
            className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-6 rounded-lg transition-all"
          >
            No
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-4">{title}</h2>
        <img
          src={image ? image : "./blog-dummy-image.jpg"}
          alt="Blog"
          className="w-full h-auto rounded-lg shadow-md mb-4"
        />
        <p className="text-lg text-gray-700 leading-relaxed">{body}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-md transition-all">
          Update
        </button>
        <button
          onClick={() => setIsDelete(true)}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyBlogCard;
