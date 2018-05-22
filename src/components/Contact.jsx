import React from 'react';
import whiteBGHero from '../assets/images/white_bg_hero.jpg';

function Contact(){
  return(
    <div>
      <style jsx>{`
          .hero-img {
            width: 100%;
            height: 50vh;
          }
        `}</style>
      Contact Works
      <img className="hero-img" src={whiteBGHero}/>
    </div>
  );
}

export default Contact;
