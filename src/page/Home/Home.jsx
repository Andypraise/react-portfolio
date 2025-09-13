import React from "react";
import homeImage from "../../assets/image7.png";
import "./Home.css";
function Home() {
  const phoneNumber = "2349133277350"; 

  const handleWhatsApp = () => {
    const defaultMessage = "Hello, I’d like to know more about your services!";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
      "_blank"
    );
  };
  return (
    <div>
      <div className="home-section">
        <div className="home-feature">
          <h2>
            Hello!!! <br />
            I Am Creative <br />
            Frontend Developer.
          </h2>
          <p>
            A passionate web developer with experience in relevant tools,
            techonologies, <br /> or skills-e.g React,HTML,CSS and JavaScript.
          </p>
          <div className="btn">
            <button onClick={handleWhatsApp}>SEND MESSAGE</button>
          </div>
        </div>
        <div>
          <img src={homeImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
