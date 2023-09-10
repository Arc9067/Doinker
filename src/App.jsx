import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-[#05165E] relative text-white">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default App;
