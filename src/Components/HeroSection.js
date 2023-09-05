import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { ContactMe } from "./pages/ContactMe"

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/backgroundvideo.mp4" autoPlay loop muted />
      <div className="font-link">Clarence Chau</div>
      <p className="font-link">An Aspiring Developer</p>
      <div className="hero-btns">
      </div>
    </div>
  );
}

export default HeroSection;
