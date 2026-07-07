import React, { useState } from "react";
import "./Work.css";

import project1 from "../../assets/web rest.JPG";
import project2 from "../../assets/bank.JPG";
import project3 from "../../assets/web.JPG";
import project4 from "../../assets/login.JPG";
import dropImage from "../../assets/image4.png";

function Work() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "branding",
    "illustrations",
    "web",
  ];

  const projects = [
    {
      id: 1,
      title: "Maison De Taste",
      image: project3,
      category: "branding",
      description: "Modern restaurant website with clean UI design.",
      link: "https://web-food-wars.netlify.app/",
    },

    {
      id: 2,
      title: "Bank Landing Page",
      image: project2,
      category: "illustrations",
      description: "Responsive banking landing page design.",
      link: "https://andypraise.github.io/Hoobank/",
    },

    {
      id: 3,
      title: "Restaurant Website",
      image: project1,
      category: "web",
      description: "Interactive restaurant website experience.",
      link: "https://andypraise.github.io/restaurant-web/",
    },

    {
      id: 4,
      title: "Animated Login",
      image: project4,
      category: "branding",
      description:
        "Animated authentication interface using HTML, CSS and JavaScript.",
      link: "https://your-login-project.netlify.app",
    },

    {
      id: 5,
      title: "Portfolio Website",
      image: project2,
      category: "web",
      description: "Personal developer portfolio website.",
      link: "https://andypraise.github.io/restaurant-web/",
    },

    {
      id: 6,
      title: "Landing Page",
      image: project2,
      category: "web",
      description: "Responsive business landing page.",
      link: "https://your-landing-page.netlify.app",
    },
  ];

  const displayedProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="work" className="work-section page-section">
      <div className="work-feature">
        <h2>WORK SHOWCASE</h2>

        <p>
          Explore some of my recent projects including websites,
          landing pages, and creative frontend solutions.
        </p>
      </div>

      <div className="select-all">
        <div className="btn-main">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="all">
          <ul className="menu-all">
            <li>
              <a href="#">
                NEWEST FIRST
                <img
                  src={dropImage}
                  alt="Dropdown"
                  width="20"
                />
              </a>

              <ul className="link">
                <li>
                  <a href="#">NEWEST</a>
                </li>

                <li>
                  <a href="#">OLDEST</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="portfolio-display">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="project-item"
          >
            <img
              src={project.image}
              alt={project.title}
            />

            <div className="overlay">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="work-cta">
        <h3>Let's Build Something Amazing Together</h3>

        <p>
          Have a project in mind or need a creative frontend developer?
          I'm available for freelance work, remote opportunities,
          and collaborations.
        </p>

        <a
          href="#contact"
          className="work-btn"
        >
          HAVE WORK FOR ME →
        </a>
      </div>
    </section>
  );
}

export default Work;