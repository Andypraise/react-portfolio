import React from "react";
import homeImage from "../../assets/image7.png";
import certificate from "../../assets/nomba-certified-NMB-2026-T4MHSO.png"; // Update with your actual file name
import "./Home.css";

function Home() {
  const phoneNumber = "2349133277350";

  const handleWhatsApp = () => {
    const defaultMessage =
      "Hello, I'd like to know more about your services!";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
      "_blank"
    );
  };

  return (
    <div>
      <div className="home-section">
        <div className="home-feature">
          <div className="button-group">
            <span className="btn-green">
              <span className="pulse-dot"></span>
              Available for Remote Work
            </span>

            <span className="btn-green">
              <span className="pulse-dot"></span>
              Open for Collaboration
            </span>
          </div>

          <h2>
            Hello!!! <br />
            I Am Creative <br />
            Frontend Developer.
          </h2>

          <p>
            A passionate web developer with experience in relevant tools,
            technologies, <br />
            and skills such as React, HTML, CSS, and JavaScript.
          </p>

          <div className="btn">
            <button onClick={handleWhatsApp}>
              SEND MESSAGE
            </button>

            <a
              href={certificate}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-violet"
            >
              Nomba Certificate
            </a>
          </div>
        </div>

        <div>
          <img src={homeImage} alt="Frontend Developer" />
        </div>
      </div>
    </div>
  );
}

export default Home;