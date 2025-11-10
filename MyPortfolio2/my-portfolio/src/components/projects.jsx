// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <section className="py-5 bg-dark" id="projects">
      <div className="container">
        <h2 className="text-light mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <img
                src="/job.png"
                className="card-img-top"
                alt="Job Recruitment App"
              />
              <div className="card-body">
                <h5 className="card-title">Job Recruitment App</h5>
                <p className="card-text">A full-stack Job Recruitment Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows employers to post job openings and job seekers to browse, apply, and manage applications efficiently. </p>
                <a href="https://github.com/thabang56R/job-recruitment-App" className="btn btn-outline-primary btn-sm">GitHub</a>
                <a href="#" className="btn btn-outline-success btn-sm ms-2">Live</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <img
                src="/Eatzer.png"
                className="card-img-top"
                alt="Delivery app Image"
              />
              <div className="card-body">
                <h5 className="card-title">Eatzer Delivery App</h5>
                <p className="card-text">A full-stack food delivery application built using the MERN stack that allows users to browse restaurants, place orders, and track deliveries in real time</p>
                <a href="https://github.com/thabang56R/Eatzer-Delivery-App" className="btn btn-outline-primary btn-sm">GitHub</a>
                <a href="#" className="btn btn-outline-success btn-sm ms-2">Live</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <img
                src="/portfolio.png"
                className="card-img-top"
                alt="Project"
              />
              <div className="card-body">
                <h5 className="card-title">A PortFolio</h5>
                <p className="card-text">A responsive personal portfolio built with React Frontend, Bootstrap, and CSS to showcase projects, skills, and experience with a clean, modern design</p>
                <a href="https://github.com/thabang56R/My-Portfolio2" className="btn btn-outline-primary btn-sm">GitHub</a>
                <a href="#" className="btn btn-outline-success btn-sm ms-2">Live</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <img
                src="/play2.png"
                className="card-img-top"
                alt="Music Playstore App"
              />
              <div className="card-body">
                <h5 className="card-title">Konka Music Playstore App</h5>
                <p className="card-text">A modern music streaming platform built with the MERN stack, featuring user authentication, playlist management, and real-time audio streaming powered by RESTful APIs and cloud storage integration. </p>
                <a href="https://github.com/thabang56R/Konka-Music-App-playStore" className="btn btn-outline-primary btn-sm">GitHub</a>
                <a href="#" className="btn btn-outline-success btn-sm ms-2">Live</a>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
