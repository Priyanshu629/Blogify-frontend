import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  
 

  return (
    <div>
      <Header />
      <div className="mt-[100px]">
      <Outlet/>
      </div>
    </div>
  );
};

export default App;
