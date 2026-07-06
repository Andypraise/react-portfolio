import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <div className="logo">
          <h1>AC</h1>
        </div>


        {/* Navigation links */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>

          <li>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              WORK
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </a>
          </li>

          <li>
            <a href="#blog" onClick={() => setMenuOpen(false)}>
              BLOG
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </a>
          </li>

        </ul>


        {/* Animated Hamburger */}
        <div
          className={`menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >

          <span></span>
          <span></span>
          <span></span>

        </div>


      </div>
    </nav>
  );
}

export default Navbar;