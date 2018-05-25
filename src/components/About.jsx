import React from 'react';
import whiteBGHero from '../assets/images/white_bg_hero.jpg';

function About(){
  return(
    <div className="main-container">
      <style jsx>{`
          .main-container {
            background-image: url(${whiteBGHero});
            background-size: cover;
            background-position: right;
            background-repeat: no-repeat;
          }
          .aboutPageInner {
            width: 100%;
            height: 100%;
          }
          `}</style>
      <div className="aboutPageInner">
        <h3>I am lifelong student with a passion for designing and developing websites.</h3>
        <div>Art, design, javascript, NPM, HTML, CSS, customer service, creative problem solving</div>
      </div>
    </div>
  );
}

export default About;
