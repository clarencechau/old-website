import React from "react";
import "../../App.css";
import Card from "../Card";
import HeroSection from "../HeroSection";
import Footer from "../Footer"
import About from "./About"

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
