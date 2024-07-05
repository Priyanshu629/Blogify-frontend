import Header from "./components/Header";

import "./App.css"
import BlogList from "./components/BlogList";
import { Outlet } from "react-router-dom";

const App = () => {
  

  
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;
