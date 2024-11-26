import { useUser } from "../context/userContext";

const Home = () => {
  const { username } = useUser();
  return (
    <div className="max-sm:w-[95%] w-[80%] p-4 flex flex-col justify-center mx-auto">

      {/* Introduction Section */}
      <aside className="mx-4 text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Welcome {username ? username : "to Blogify!"} 😀
        </h1>
        <p className="text-xl italic font-medium my-4 p-4 rounded-md border-2 border-gray-300 shadow-md bg-gray-50">
          Blogify is a platform where you can easily create, manage, and share your blogs. It’s designed to help you express your ideas, tell your stories, and connect with readers in a simple and meaningful way. With an intuitive interface and easy-to-use tools, you’re only a few clicks away from sharing your thoughts with the world.
        </p>
        <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200">
          Start Writing Now
        </button>
      </aside>

      {/* Image Section */}
      <section className="flex justify-center mt-10">
        <img
          className="w-full max-w-2xl border-4 shadow-xl rounded-md border-green-400"
          src="/home image.webp"
          alt="Blogify Home"
        />
      </section>
    </div>
  );
};

export default Home;
