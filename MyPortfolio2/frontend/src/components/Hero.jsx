// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <header className="vh-100 d-flex align-items-center bg-light" id="home">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Hi, I'm Thabang Rakeng</h1>
        <p className="lead">Agentic AI Engineer | Full Stack Developer | AWS & DevOps Engineer </p>
        <a href="#projects" className="btn btn-primary btn-lg mt-3">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Hero;
