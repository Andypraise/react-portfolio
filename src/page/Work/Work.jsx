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
  { id: 1, title: "Maison De Taste", image: project3, category: "branding", description: "WEB" },
  { id: 2, title: "Project 2", image: project2, category: "illustrations", description: "Illustration project" },
  { id: 3, title: "Project 3", image: project1, category: "web", description: "Web project" },
  { id: 4, title: "Animated Login", image: project4, category: "branding", description: "Branding project" },
  { id: 5, title: "WEB", image: project2, category: "branding", description: "DESIGN" },
  { id: 6, title: "WEB", image: project2, category: "branding", description: "DESIGN" },
];


  // Filter projects based on active category
  const displayedProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div  id="work"    className="work-section page-section" >
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
              <a href="#">
                NEWEST FIRST <img src={dropImage} alt="" width="20px" />
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
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h2>{project.title}</h2>

              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn">
        <a href="#contact"><button>HAVE WORK FOR ME</button></a>
      </div>
    </div>
  );
}

export default Work;
