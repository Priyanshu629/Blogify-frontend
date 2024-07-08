import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  
 

  return (
    <div>
      <Header />
      <div className={`space-top `}>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
