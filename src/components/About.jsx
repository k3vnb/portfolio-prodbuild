import React from 'react';
import whiteBGHero from '../assets/images/white_bg_hero.jpg';

function About(){
  return(
    <div>
      <style jsx>{`
          .hero-img {
            width: 100%;
            height: 50vh;
          }
        `}</style>
      About Works
      <img className="hero-img" src={whiteBGHero}/>
    </div>
  );
}

export default About;
