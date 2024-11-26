import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  
 

  return (
    <div>
      <Header />
      <div className="mt-[100px]">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
