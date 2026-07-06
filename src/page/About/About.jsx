import React from "react";
import aboutImage from "../../assets/IMG-20260531-WA0074.jpg";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section page-section">

      <div className="about-feature">
        <h2>ABOUT ME</h2>

        <p>
          I am a passionate Frontend Developer who specializes in creating
          modern, responsive, and user-friendly websites. I focus on building
          digital experiences that are visually appealing, functional, and
          easy to use.
        </p>
      </div>


      <div className="about-img">

        <div className="web">
          <img src={aboutImage} alt="Andy Chibueze" />

          <div className="web-text">
            <h4>Andy Chibueze</h4>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="web">
          <img src={aboutImage} alt="Andy Chibueze" />

          <div className="web-text">
            <h4>Andy Chibueze</h4>
            <p>Web designer</p>
          </div>
        </div>


        <div className="web-text-2">
          <h2>Little About Me</h2>

          <p>
            I create responsive websites using modern technologies like
            React,Next.js JavaScript, HTML, and CSS. I enjoy transforming ideas into
            interactive and engaging web experiences.
          </p>

          <p>
            Whether you are a startup, small business, or established brand,
            I can help you build a strong online presence with clean and
            scalable solutions.
          </p>

          <a href="#contact" className="link-about">
            Let's Talk
          </a>
        </div>

      </div>

    </section>
  );
}

export default About;