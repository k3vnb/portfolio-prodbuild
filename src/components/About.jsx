import React from 'react';

function About() {

  return(
    <div className="main-container">
      <style jsx>{`
          font-family: 'Didact Gothic', sans-serif;
          .aboutUpper {
            display: flex;
            align-items: center;
            height: 100%;
            width: 100%;
          }
          .aboutHalf {
            width: 49%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 2%;
          }
          .aboutLeft {
            border-right: 3px solid black;
            margin-right: 1%;
            text-align: center;
            height: 60%;
          }
          .aboutRight {
            margin-left: 12%;
            display: flex;
            align-items: center;
            font-size: 2vw
          }
          .hi {
            margin-right: 12%;
            font-size: 14vw;
          }
          .leaderText {
            font-size: 3vw;
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
            .leaderText {
              font-size: 4vw;
            }
            .aboutRight {
              font-size: 3vw;
            }
          }
            `}</style>
      <div className="aboutUpper">
        <div className="aboutHalf aboutLeft">
          <h2 className="hi">Hi</h2>
        </div>
        <div className="aboutHalf aboutRight">
          <p><span className="leaderText">Thank you</span> for visiting. My name is Kevin and I design and develop websites.</p>
        </div>
      </div>
      <div className="aboutLower">
          <p>As a student of Anthropology at the University of Toronto, I was immersed in post-structural thought on human communication and interaction. I learned that all human culture is part of a vast interwoven fabric of human communication. And as the semiotician Marshall McLuhan said, "the Medium is the Message." I didn't understand that quote in college, and also I do not understand it now. But sometimes I kind of understand it.</p>
            <p>I have been trained in the art of building apps and making websites at Epicodus. I consider coding to be a craft and artform, and I enjoy enjoy building my Javascript, React, and design toolkits.</p>
              <p>Some of specialties are:
                <ul className="skills-list">
                <li>Javascript</li>
                <li>React</li>
                <li>jQuery</li>
                <li>HTML5/CSS3</li>
                <li>Pair-Programming</li>
                <li>Creative Problem</li>
                <li>Cross-cultural communication</li>
                </ul>
              </p>
      </div>
    </div>
  );
}

export default About;
