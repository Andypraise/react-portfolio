import React, { useState } from "react";
import "./Work.css";

import project1 from "../../assets/web rest.JPG";
import project2 from "../../assets/bank.JPG";
import project3 from "../../assets/web.JPG";
import project4 from "../../assets/login.JPG";
import dropImage from "../../assets/image4.png";

function Work() {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Maison De Taste",
      image: project3,
      category: "branding",
      description: "Restaurant Website",
    },
    {
      id: 2,
      title: "Bank Landing Page",
      image: project2,
      category: "illustrations",
      description: "Responsive Banking Website",
    },
    {
      id: 3,
      title: "Restaurant Website",
      image: project1,
      category: "web",
      description: "Modern Restaurant UI",
    },
    {
      id: 4,
      title: "Animated Login",
      image: project4,
      category: "branding",
      description: "HTML, CSS & JavaScript",
    },
    {
      id: 5,
      title: "Portfolio Website",
      image: project2,
      category: "branding",
      description: "Personal Portfolio Design",
    },
    {
      id: 6,
      title: "Landing Page",
      image: project2,
      category: "branding",
      description: "Responsive Landing Page",
    },
  ];

  const displayedProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="work" className="work-section page-section">
      <div className="work-feature">
        <h2>WORK SHOWCASE</h2>
      </div>

      <div className="select-all">
        <div className="btn-main">
          <button onClick={() => setActiveCategory("all")}>ALL</button>
          <button onClick={() => setActiveCategory("branding")}>
            BRANDING
          </button>
          <button onClick={() => setActiveCategory("illustrations")}>
            ILLUSTRATIONS
          </button>
          <button onClick={() => setActiveCategory("web")}>WEB</button>
        </div>

        <div className="all">
          <ul className="menu-all">
            <li>
              <a href="/">
                NEWEST FIRST{" "}
                <img src={dropImage} alt="Dropdown" width="20" />
              </a>

              <ul className="link">
                <li>
                  <a href="/">NEWEST</a>
                </li>
                <li>
                  <a href="/">OLDEST</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="portfolio-display">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />

            <div className="overlay">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call To Action */}
      <div className="work-cta">
        <h3>Let's Build Something Amazing Together</h3>

        <p>
          Have a project in mind or need a creative frontend developer?
          I'm available for freelance, remote work, and collaborations.
        </p>

        <a href="#contact" className="work-btn">
          HAVE WORK FOR ME
        </a>
      </div>
    </section>
  );
}

export default Work;