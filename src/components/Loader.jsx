import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();

  return (
    <div className="load-container">
      <div id="loader"></div>
      <span>
        Loading {location.pathname === "/" ? "blogs" : "blog details"} <br />{" "}
        Please wait..
      </span>
    </div>
  );
};

export default Loader;
