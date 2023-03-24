import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


import "./App.css";


function App() {
  

  return (
    
      <div className="app-container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    
  );
}

export default App;
