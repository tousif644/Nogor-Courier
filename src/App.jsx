import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WhyChooseUs from "./Components/WhyChooseUs";
import Service from "./Components/Service";
import RenderLine from "./Components/RenderLine";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Service />
      <RenderLine />
    </div>
  );
}

export default App;
