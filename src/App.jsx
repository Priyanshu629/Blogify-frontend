import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  
 

  return (
    // <div>
    //   <Header />
    //   <div className="mt-[100px]">
    //   <Outlet/>
    //   </div>
    //   <Footer/>
    // </div>
    <div className="flex flex-col min-h-screen">
    <Header />
    
    {/* Main Content */}
    <main className="flex-grow p-6 my-[100px]">
      {/* Your content goes here */}
      <Outlet/>
    </main>

    {/* Footer */}
    <Footer />
  </div>
  );
};

export default App;
