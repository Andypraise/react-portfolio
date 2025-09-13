import React from "react";
import "./Footer.css";
import backImage from "../assets/image1.png"
function Footer() {
     // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer-section">
      <div className="footer-feature">
        <div className="logo">
          <h1>AC</h1>
        </div>
        <p>&copy; 2025 - Andy Chibueze,All Right Reserved.</p>
      </div>
      <div>
        <a href="" onClick={scrollToTop}>BACK TO TOP <img src={backImage} alt="" width="20px" /></a>
      </div>
    </div>
  );
}

export default Footer;
