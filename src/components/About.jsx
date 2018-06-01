import React from 'react';

function About() {

  return(
    <div className="main-container about-container">
      <style jsx>{`
          .main-container {
            font-family: 'Didact Gothic', sans-serif;
            height: 100%;
          }
          .about-upper {
            display: flex;
            align-items: center;
            height: 20%;
            width: 100%;
          }
          .about-upper-half {
            width: 49%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 2%;
          }
          .about-upper-left {
            border-right: 3px solid black;
            margin-right: 1%;
            text-align: center;
            height: 60%;
          }
          .about-upper-right {
            margin-left: 12%;
            display: flex;
            align-items: center;
            font-size: 2vw
          }
          .about-lower {
            width: 120%;
            margin-left: -10%;
          }
          .hi {
            margin-right: 12%;
            font-size: 14vw;
          }
          .leader-text {
            font-size: 2.5vw;
            margin-left: -4px;
          }
          .leader-text2 {
            font-size: 2.15vw;
          }
          .about-lower {
            font-size: 1.7vw;
          }
          .skills-list {
            width: 110%;
            margin-left: -7%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .skills-list li {
            width: 45%;
            margin-left: 2%;
          }
          @media screen and (max-width: 650px){
            .leader-text {
              font-size: 3.5vw;
            }
            .about-upper-right {
              font-size: 3vw;
            }
          }
            `}</style>
      <div className="about-upper">
        <div className="about-upper-half about-upper-left">
          <h2 className="hi">Hi</h2>
        </div>
        <div className="about-upper-half about-upper-right">
          <p><span className="leader-text">Thank you</span> for visiting. My name is Kevin and I design & develop websites.</p>
        </div>
      </div>
      <div className="about-lower">
        <p><span className="leader-text2">I consider coding to be craft and artform</span>, an opportunity for lifelong learning and for building on life experiences. My personal mission is to contribute and facilitate meaningful art, interaction, and dialogue to society and to build positive relationships with peers, clients, and users.</p>
        <p>I have a background in Anthropology, cross-cultural communication, and community management. I completed my undergraduate degree at the University of Toronto, where I was immersed in post-structural thought on human communication in the age of digital media. After receiving my degree I joined the Peace Corps in Turkmenistan, where I developed an English language program for a remote and isolated village. I have studied music, art, and philosophy. When I first learned to code, I immediately realized that I found the platform that could combine all of my passions and interests with endless possibilities.</p>
        <h4>Some of my skills are:</h4>
          <ul className="skills-list">
            <li>Javascript</li>
            <li>React/Redux</li>
            <li>HTML5/CSS3</li>
            <li>Sass/SCSS</li>
            <li>Vector Graphic Illustration</li>
            <li>MVC</li>
            <li>API Integration</li>
            <li>NodeJS/NPM</li>
            <li>jQuery</li>
            <li>Mobile Responsive Design</li>
            <li>SEO</li>
            <li>Behavior Driven Development</li>
            <li>Creative Problem Solving</li>
            <li>Cross-cultural Communication</li>
          </ul>
      </div>
    </div>
  );
}

export default About;
