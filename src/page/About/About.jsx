import React from "react";
import aboutImage from "../../assets/IMG-20260531-WA0074.jpg";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section page-section">

      <div className="about-feature">
        <span className="about-tag">
          ABOUT ME
        </span>

        <h2>
          Creative Frontend Developer Building Modern Web Experiences
        </h2>

        <p>
          I am a passionate Frontend Developer focused on creating modern,
          responsive, and user-friendly websites. I combine clean design with
          efficient code to build digital experiences that are fast,
          accessible, and enjoyable to use.
        </p>

        <p>
          My goal is to transform ideas into beautiful, functional web
          applications that help businesses and individuals establish a strong
          online presence.
        </p>
      </div>


      <div className="about-img">

        <div className="web">
          <img 
            src={aboutImage} 
            alt="Andy Chibueze Frontend Developer" 
          />

          <div className="web-text">
            <h4>Andy Chibueze</h4>
            <p>Frontend Developer</p>
          </div>
        </div>


        <div className="web">
          <img 
            src={aboutImage} 
            alt="Andy Chibueze Web Designer" 
          />

          <div className="web-text">
            <h4>Andy Chibueze</h4>
            <p>Web Designer</p>
          </div>
        </div>


        <div className="web-text-2">

          <h2>
            Little About Me
          </h2>

          <p>
            I create responsive websites using modern technologies such as
            React, Next.js, JavaScript, HTML, and CSS. I enjoy turning concepts
            into interactive and engaging digital experiences.
          </p>


          <p>
            Whether you are a startup, small business, or an established brand,
            I can help you create a professional online presence with clean,
            scalable, and maintainable solutions.
          </p>


          <div className="about-skills">
            <span>React</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>


          <a 
            href="#contact" 
            className="link-about"
          >
            Let's Talk →
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;