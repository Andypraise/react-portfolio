import React, { useState } from "react";
import homeImage from "../../assets/ChatGPT Image Jul 7, 2026, 12_03_46 PM.png";
import certificate from "../../assets/nomba-certified-NMB-2026-T4MHSO.png";
import "./Home.css";

function Home() {
  const [showCert, setShowCert] = useState(false);

  const phoneNumber = "2349133277350";
  const year = new Date().getFullYear();

  const handleWhatsApp = () => {
    const defaultMessage =
      "Hello, I'd like to know more about your services!";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
      "_blank"
    );
  };

  const handleDownload = () => {
    alert(
      "Download started! Your Nomba Certificate " +
        year +
        " is being downloaded 📜✅"
    );

    const link = document.createElement("a");
    link.href = certificate;
    link.download = `Nomba-Certificate-${year}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            technologies,
            <br />
            and skills such as <strong>React,</strong> <strong>Next.js,</strong><strong> HTML,</strong> <strong>CSS,</strong> and <strong>JavaScript.</strong>
          </p>

          <div className="btn">
            <button onClick={handleWhatsApp}>
              SEND MESSAGE
            </button>

            <button
              className="btn-violet"
              onClick={() => setShowCert(true)}
            >
              Nomba Certificate
            </button>
          </div>
        </div>

        {/* Certificate Popup */}
        {showCert && (
          <div
            className="popup-overlay"
            onClick={() => setShowCert(false)}
          >
            <div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setShowCert(false)}
              >
                ×
              </button>

              <img
                src={certificate}
                alt="Nomba Certificate"
                style={{ width: "100%", borderRadius: "10px" }}
              />

              <button
                onClick={handleDownload}
                className="btn btn-green"
                style={{ marginTop: "16px" }}
              >
                Download Certificate
              </button>
            </div>
          </div>
        )}

        <div>
          <img src={homeImage} alt="Frontend Developer" />
        </div>
      </div>
    </div>
  );
}

export default Home;