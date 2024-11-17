
import { useUser } from "../context/userContext";

const Home = () => {
  const { username } = useUser();
  return (
    <div  className="max-sm:w-[95%]  w-[80%] p-2 flex flex-col justify-between  my-4  mx-auto">


      <aside className="mx-2  text-center">
      <h1 className="text-2xl font-bold">Welcome {username?username:"to Blogify!"} 😀</h1>
      <p className="text-lg italic font-semibold my-4  border-2 border-black p-2 rounded-md">Blogify is a platform where you can easily create, manage, and share your blogs. It’s designed to help you express your ideas, tell your stories, and connect with readers in a simple and meaningful way. With an intuitive interface and easy-to-use tools.</p>
      </aside>

     <section className="flex justify-around flex-wrap">
      <img className="max-sm:w-[80%] w-[35%] border-4 shadow-md border-green-400" src="/home image.webp" alt="home image" />

      </section>
      </div>
    
  );
};

export default Home;
