import React from "react";


const Experience = () => {
  return (
    
    <section className="experience" id="experience">
      <h2 className="experience-title">Professional Experience</h2>

      <div className="experience-card">
        {/* Header */}
        <div className="experience-header">
          <div>
            <h3>Frontend Developer (Freelance)</h3>
            <span className="company">Inevitable Accounting & Advisory</span>
          </div>
          <span className="experience-period">2024 – 2025</span>
        </div>

        {/* Description */}
        <p className="experience-description">
          Designed and developed a production-ready company website using
          <strong> React.js</strong>. Delivered an initial version and later
          redesigned and improved the application to a second version with a
          stronger visual identity and enhanced user experience.
        </p>

        {/* Responsibilities */}
        <ul className="experience-list">
          <li>Built and deployed Version 1 based on initial requirements.</li>
          <li>
            Redesigned and rebuilt Version 2 with improved UI/UX and layout
            structure.
          </li>
          <li>Created reusable React components and clean architecture.</li>
          <li>Improved responsiveness, performance, and accessibility.</li>
          <li>Worked closely with the client to apply feedback.</li>
        </ul>

        {/* Screenshots */}
        <div className="screenshots">
          <h4>Project Evolution</h4>

          <div className="screenshots-grid">
            <div className="screenshot-card">
              <h5>Version 1</h5>
              <img
                src="/inevitable 1.png"
                alt="Inevitable Website Version 1"
              />
              <p>
                Initial implementation based on early branding and layout
                requirements.
              </p>
            </div>

            <div className="screenshot-card">
              <h5>Version 2</h5>
              <img
                src="/inevitable 2.png"
                alt="Inevitable Website Version 2"
              />
              <p>
                Redesigned version with improved UI/UX, spacing, typography, and
                responsiveness.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="experience-tech">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Responsive Design</span>
        </div>

        {/* Links */}
        <div className="experience-links">
          <a
            href="https://github.com/thabang56R/Inevitable-Accounting-and-Advisory-Consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub Repository
          </a>

          <a
            href="https://inevitable-accounting-and-advisory.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Live 1
          </a>
        </div>

        <div className="experience-links">
          <a
            href="https://github.com/thabang56R/Inevitable-Consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            GitHub Repository
          </a>

          <a
            href="https://inevitable-consulting-v2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Live 2
          </a>
        </div>


      </div>
    </section>
  );
};

export default Experience;


