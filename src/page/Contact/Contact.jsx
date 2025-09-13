import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import contactImage from "../../assets/image7.png";
import locateImage from "../../assets/image11.png"
import phoneImage from "../../assets/image12.png"
import emailImage from "../../assets/image13.png"
import faceImage from "../../assets/image14.png"
import twiImage from "../../assets/image15.png"
import webImage from "../../assets/image16.png"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_o3u0k3m", // Your Service ID
        "template_k7vefdy", // ✅ Correct Template ID
        formData,
        "YZ_Arzau_R4mJZLnL" // Your Public Key
      )

      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // clear form
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact" className="contact-section page-section">
        <div className="contact-feature">
          <h2>CONTACT ME.</h2>
          <p>Have a project in mind, or just want to say hi? Let's connect!</p>
        </div>

        <div className="contact-info">
          <form onSubmit={handleSubmit}>
            <h2>Send Me a Message.</h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />

            <textarea
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="btn">
              <button type="submit">Send Message</button>
            </div>
          </form>

          <div className="contact-img">
            <img src={contactImage} alt="Contact" />
          </div>
        </div>
        <div>
          <div className="location">
            <div className="line"><img src={locateImage} alt="" />
            <p>7 Powerline <br />
            Aba, Abia State.</p>
            </div>
            <div className="line">
              <img src={phoneImage} alt="" />
              <p>+2349133277350</p>
              <p>+2349134820922</p>
            </div>
            <div className="line">
              <img src={emailImage} alt="" />
              <p>andypraise890@gmail.com</p>
            </div>
          </div>
          <div className="line-img">
            <img src={faceImage} alt="" />
            <img src={twiImage} alt="" />
            <img src={webImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
