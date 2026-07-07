import React from "react";
import "./Footer.css";
import backImage from "../assets/image1.png";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">

      <div className="footer-feature">

        <div className="logo">
          <h1>AC</h1>
        </div>

        <div className="footer-text">
          <h3>Andy Chibueze</h3>

          <p>
            Frontend Developer creating modern, responsive and
            user-friendly web experiences.
          </p>

          <span>
            © {year} Andy Chibueze. All Rights Reserved.
          </span>
        </div>

      </div>

<div className="back">
      <button 
        className="back-top"
        onClick={scrollToTop}
      >
        BACK TO TOP

        <img 
          src={backImage} 
          alt="Back to top"
        />

      </button>
      </div>


    </footer>
  );
}

export default Footer;