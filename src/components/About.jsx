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
            font-size: 3vw;
            margin-left: -4px;
          }
          .leader-text2 {
            font-size: 2.15vw;
          }
          .about-lower {
            font-size: 1.7vw;
          }
          .skills-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
          }
          .skills-list li {
            width: 50%;
          }
          @media screen and (max-width: 650px){
            .leader-text {
              font-size: 4vw;
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
          <p><span className="leader-text">Thank you</span> for visiting. My name is Kevin and I design and develop websites.</p>
        </div>
      </div>
      <div className="about-lower">
          <p><span className="leader-text2">As a student of Anthropology</span> at the University of Toronto, I was immersed in post-structural thought on human communication and interaction. I learned that all human culture is part of a vast interwoven fabric of human communication. And as the semiotician Marshall McLuhan said, "the Medium is the Message." I didn't understand that quote in college, and also I do not understand it now. But sometimes I kind of understand it.</p>
            <p>I have been trained in the art of building apps and making websites at Epicodus. I consider coding to be a craft and artform, and I enjoy enjoy building my Javascript, React, and design toolkits.</p>
              <p>Some of specialties my are:
                <ul className="skills-list">
                <li>Javascript</li>
                <li>React</li>
                <li>jQuery</li>
                <li>HTML5/CSS3</li>
                <li>Pair-Programming</li>
                <li>Creative Problem Solving</li>
                <li>Cross-cultural communication</li>
                </ul>
              </p>
      </div>
    </div>
  );
}

export default About;
