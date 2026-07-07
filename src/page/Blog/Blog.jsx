import React from "react";
import "./Blog.css";

import reactImage from "../../assets/image8.png";
import gitImage from "../../assets/image9.png";
import netImage from "../../assets/image10.png";

function Blog() {

  const blogs = [
    {
      image: reactImage,
      title: "React",
      description:
        "Building reusable components and managing application state efficiently.",
      date: "20 August 2025",
    },

    {
      image: netImage,
      title: "Netlify",
      description:
        "Using modern deployment platforms for fast hosting and serverless functions.",
      date: "2 September 2025",
    },

    {
      image: gitImage,
      title: "Git + GitHub",
      description:
        "Tracking changes, managing projects, and collaborating effectively with developers.",
      date: "15 February 2025",
    },
  ];


  return (
    <section id="blog" className="blog-section page-section">

      <div className="blog-feature">

        <span className="blog-tag tag-all">
          MY BLOG
        </span>

        <h2>
          Sharing My Development Journey
        </h2>

        <p>
          Explore my experiences building modern websites using
          React, JavaScript, HTML, CSS, and other technologies.
        </p>

      </div>


      <div className="blog-img">

        {blogs.map((blog, index) => (

          <article 
            className="blog-text" 
            key={index}
          >

            <img 
              src={blog.image} 
              alt={blog.title}
            />

            <h4>
              {blog.title}
            </h4>


            <p>
              {blog.description}
            </p>


            <span>
              {blog.date}
            </span>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Blog;