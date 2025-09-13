import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/Home/Home";
import Work from "./page/Work/Work";
import "./App.css";
import About from "./page/About/About";
import Blog from "./page/Blog/Blog";
import Contact from "./page/Contact/Contact";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Blog />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
