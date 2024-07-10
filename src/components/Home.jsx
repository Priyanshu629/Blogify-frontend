import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

const Home = () => {
  const { username } = useUser();
  return (
    <div id="home">
      {username ? (
        <h1 id="hello">Hello 👋 {username} .</h1>
      ) : (
        <h1>Welcome To Blogify</h1>
      )}
      <p>Read and Write whatever excites you..</p>
      <div className="cta-container">
        {username ? (
          ""
        ) : (
          <Link to={"/signup"} className="cta">
            Get Started →
          </Link>
        )}
        <Link to={"/blogs"} className="cta">
          Read Blogs →
        </Link>
      </div>
    </div>
  );
};

export default Home;
