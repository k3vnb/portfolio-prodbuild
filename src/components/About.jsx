import React from 'react';

function About() {

  return(
    <div className="main-container about-container">
      <style jsx>{`
          .main-container {
            font-family: 'Carrois Gothic', sans-serif;
            min-height: 120vh;
            margin-bottom: 55vw;
          }
          .about-upper {
            display: flex;
            align-items: center;
            height: 20%;
            width: 100%;
            margin: 8% 0%;
          }
          .about-upper-half {
            width: 49%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 2%;
            margin-bottom: 5%;
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
            font-size: 1.5vw;
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
            list-style: circle inside;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .skills-list li {
            width: 45%;
            margin-left: 2%;
          }
          .main-container p {
            margin-bottom: 5%;
          }

          @media screen and (max-width: 650px){
            .leader-text {
              font-size: 14px;
            }
            .about-upper-right {
              font-size: 10px;
            }
            .leader-text2 {
              font-size: 14px;
            }
            .about-lower {
              font-size: 11px;
            }
            .about-lower ul {
              font-size: 10px;
              width: 120%;
              margin-left: -10%;
            }
          }
          @media screen and (max-width: 400px){
            .about-lower ul {
              font-size: 7.6px;
            }
          }
            `}</style>
      <div className="about-upper">
        <div className="about-upper-half about-upper-left">
          <h2 className="hi">Hi</h2>
        </div>
        <div className="about-upper-half about-upper-right">
          <p><span className="leader-text">Thank you</span> for visiting. My name is Kevin. I live in Portland, Oregon, where I design & develop websites.</p>
        </div>
      </div>
      <div className="about-lower">
        <p><span className="leader-text2">I consider coding to be a craft and an artform</span>, an opportunity for lifelong learning and for building on life experiences. My personal mission is to contribute and facilitate meaningful art, interaction, and dialogue to society and to build positive relationships with peers, clients, and users.</p>
        <p>My background is in anthropology, education, cross-cultural communication, and community management. As an undergraduate at the University of Toronto, I was immersed in post-structural ideas on human communication in the age of digital media. Later I joined the Peace Corps in Turkmenistan, where I developed an English language program for a remote and isolated village. Over the years I've studied music, art, language, and philosophy. When I first learned to code, I immediately realized that I had found the platform that would combine all of my passions and interests with endless possibilities.</p>
        <p className="leader-text2">Some of my skills are:</p>
        <ul className="skills-list">
          <li>Javascript</li>
          <li>React/Redux</li>
          <li>HTML5/CSS3</li>
          <li>Sass/SCSS</li>
          <li>SVG/Vector Graphic Illustration</li>
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
