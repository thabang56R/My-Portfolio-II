// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Thabang Rakeng. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;

         