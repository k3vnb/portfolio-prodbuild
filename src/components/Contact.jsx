import React from 'react';
import whiteBGHero from '../assets/images/white_bg_hero.jpg';

function Contact(){
  return(
    <div className="main-container">
      <style jsx>{`
          .main-container {
            background-image: url(${whiteBGHero});
            background-size: cover;
            background-position: right;
            background-repeat: no-repeat;
          }
          .contact-page-inner {
            width: 100%;
            height: 100%;
          }
          `}</style>
      <div className="contact-page-inner">
        <div className="contact-line">
          <div className="contact-line-left">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
