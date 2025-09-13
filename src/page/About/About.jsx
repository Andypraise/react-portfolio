import React from 'react'
import aboutImage from "../../assets/image7.png"
import "./About.css"
function About() {
  return (
    <div>
        <div id='about'    className='about-section page-section' >
            <div className='about-feature'>
                <h2>ABOUT ME.</h2>
                <p>I specialize in modern web developer, and responsive layout ensuring that <br />
                every website i create is both visually appealing and functional.</p>
            </div>
            <div className='about-img'>
                <div className='web'>
                    <img src={aboutImage} alt="" />
                    <div className='web-text'> <h4>Andy Chibueze</h4>
                <p>Web designer</p></div>
                </div>
                <div className='web'>
                    <img src={aboutImage} alt="" />
                    <div className='web-text'> <h4>Andy Chibueze</h4>
                <p>Web developer</p></div>
                </div>
                <div className='web-text-2'>
                   <h2>Little About Me</h2>
                   <p>Whether you are a start up, small business <br />
                   or established brand i'm here to help you <br />
                   establish a strong online presence.</p>
                   <a href="#">Read More</a>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default About