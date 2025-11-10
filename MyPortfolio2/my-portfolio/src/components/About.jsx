// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="py-5 bg-white" id="about">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center">
          I am a passionate Full Stack Developer with experience in the MERN
          stack. I love solving problems and creating impactful
          applications.<p/>
        <p>
          i am also an agentic AI engineer passionate about building intelligent ,
           Autonomous systems that can reason, act ,and adapt in real time.
           My work focuses on integrating AI agents with tools like Langchain,RAG , 
           and LLM to automate complex workflows and decision-making .
           I enjoy designing AI-driven solutions that bridges the gap between human creativity and 
           machine intelligence - from smart assistants to data- driven automation systems. </p>
        <p>
           Lastly im also an aws and devops Engineer with a strong passion for building scalable 
           ,secure , and automated cloud infrastructure . I specialize in designing CI-CD pipeline 
           ,optimising deployments , and managing cloud -native applications using AWS services, Docker , Kubenetes,
           and Terraform . My goal is to streamline development workflows, enhance systems reliability , 
           and enable continuous delivery through automation and best Devops Practices.</p>
        </p>
      </div>
    </section>
  );
};

export default About;
