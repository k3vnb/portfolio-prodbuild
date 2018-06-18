import React from 'react';
import instagramIcon from '../assets/images/icons/instagram-icon.png';
import skyBG from '../assets/images/sky-bg.jpg';
import gmailIcon from '../assets/images/icons/gmail-icon.png';
import githubIcon from '../assets/images/icons/github-icon.png';
import linkedinIcon from '../assets/images/icons/linkedin-icon.png';
import ParallaxContactHeader from './ParallaxContactHeader';
import wallpaper from '../assets/images/body-bg.svg';



function Contact(){
  return(
    <div>
      <div className="before-contact">
        <ParallaxContactHeader />
      </div>

      <style jsx>{`
          .before-contact {
            font-family: 'Carrois Gothic', sans-serif;
            background-image: url(${wallpaper});
            background-repeat: repeat-y;
            background-size: cover;
            opacity: .85;
          }
          .before-contact-overlay {
            height: 100%;
            width: 100%;
            background-color: white;
          }
          .before-contact img {
            opacity: .3;
            height: 205px;
            width: 100%;
            object-fit: cover;
          }
          .contact-container {
            height: 100vh;
            border-bottom: 5.6vh solid #3b3b3b;
            position: relative;
          }
          .contact-page-inner {
            width: 100%;
            height: 100.5%;
            display: flex;
            background-image: url(${skyBG});
            background-size: cover;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .contact-box {
            width: 50%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .icon {
            height: 17vw;
            transition: height .2s ease-out;
          }
          .icon:hover {
            height: 16.1vw
          }
          .github-icon, .instagram-icon, .linkedin-icon {
            border-radius: 23%;
            box-shadow: 3px 2px 8px #0000008c;

          }
          .contact-top-left {
            background-color: #e91e63a8;
          }
          .contact-top-right {
            background-color: #2196f36e;
          }
          .contact-bottom-left {
            background-color: #8bc34a69;
          }
          .contact-bottom-right {
            background-color: #ff9800ad;
          }
          `}</style>
      <div className="contact-container">
        <div className="contact-page-inner">
          <div className="contact-box contact-top-left">
            <a href="mailto:boyle.kevin.michael@gmail?Subject=Hi%20Kevin" title="email boyle.kevin.michael@gmail.com"><img className="gmail-icon icon" src={gmailIcon} alt="boyle.kevin.michael@gmail.com" /></a>
          </div>
          <div className="contact-box contact-top-right">
            <a href="http://www.github.com/lemurriot" target="_blank" title="Go to Kevin's Github"><img className="github-icon icon" src={githubIcon} /></a>
          </div>
          <div className="contact-box contact-bottom-left">
            <a href="http://www.instagram.com/k3vnb33" target="_blank" title="Go to Kevin's Instagram"><img className="instagram-icon icon" src={instagramIcon} /></a>
          </div>
          <div className="contact-box contact-bottom-right">
            <a href="http://www.linkedin.com/in/boylekev" target="_blank" title="Go to Kevin's LinkedIn"><img className="linkedin-icon icon" src={linkedinIcon} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
