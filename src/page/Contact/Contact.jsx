import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import "./Contact.css";
import contactImage from "../../assets/IMG-20260531-WA0074.jpg";
// import locateImage from "../../assets/image11.png";
// import phoneImage from "../../assets/image12.png";
// import emailImage from "../../assets/image13.png";
// import faceImage from "../../assets/image14.png";
// import twiImage from "../../assets/image15.png";
// import webImage from "../../assets/image16.png";

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
        "YZ_Arzau_R4mJZLnL", // Your Public Key
      )

      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // clear form
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        },
      );
  };

  return (
    <div>
      <div id="contact" className="contact-section page-section">
        <div className="contact-feature">
          <h2 className="tag-all">CONTACT ME.</h2>
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
            <div className="line">
              <FaMapMarkerAlt className="contact-icon" />

              <p>
                7 Powerline <br />
                Aba, Abia State.
              </p>
            </div>

            <div className="line">
              <FaPhoneAlt className="contact-icon" />

              <p>
                +2349133277350 <br />
                +2349134820922
              </p>
            </div>

            <div className="line">
              <FaEnvelope className="contact-icon" />

              <p>andypraise890@gmail.com</p>
            </div>
          </div>
  
        </div>
      </div>
              <div className="line-img no-animation">
            <a
              href="https://www.facebook.com/profile.php?id=61578592229212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/2349133277350"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://x.com/AndyPraise8266"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/andy-chibueze-54b653375?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
    </div>
  );
}

export default Contact;
