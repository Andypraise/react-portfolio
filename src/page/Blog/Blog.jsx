import React from "react";
import "./Blog.css";
import reactImage from "../../assets/image8.png"
import gitImage from "../../assets/image9.png"
import netImage from "../../assets/image10.png"
function Blog() {
  return (
    <div>
      <div id="blog"     className="blog-section page-section" >
        <div className="blog-feature">
          <h2>MY BLOG</h2>
          <p>
            In this post, I'll walk you through how I built mine <br />
            using React, JavaScript, HTML and CSS.
          </p>
        </div>
        <div className="blog-img">
          <div className="blog-text">
            <div><img src={reactImage} alt="" /></div>
            
            <h4>React</h4>
            <p>
              For building resuable components <br />
              and managing state.
            </p>
            <span>20 August 2025</span>
          </div>

          <div  className="blog-text">
            <div><img src={netImage} alt="" /></div>
            
            <h4>Netlify</h4>
            <p>
              As an alternative for fast hosting <br />
              and serverless functions.
            </p>
            <span>2 September 2025</span>
          </div>
          <div  className="blog-text">
            <div>  <img src={gitImage} alt="" /></div>
          
            <h4>Git + Github</h4>
            <p>
              For tracking changes and <br />
              collaborating on code.
            </p>
            <span>15 Febuary 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
