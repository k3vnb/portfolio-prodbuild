import React from 'react';
import instagramIcon from '../assets/images/icons/instagram-icon.png';
import gmailIcon from '../assets/images/icons/gmail-icon.png';
import githubIcon from '../assets/images/icons/github-icon.png';
import linkedinIcon from '../assets/images/icons/linkedin-icon.png';

function Contact(){
  return(
    <div className="main-container contact-container">
      <style jsx>{`
          .contact-container {
            height: 80%;
            margin-top: 5%;
          }
          .contact-page-inner {
            width: 100%;
            height: 60%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .contact-box {
            width: 45%;
            height: 50%;
            border: 1px solid black;
            padding: 1%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .icon {
            height: 20vw;
            transition: height 1s;
          }
          .icon:hover {
            height: 20.1vw
          }
          .github-icon {
            border-radius: 23%;
            box-shadow: 3px 2px 8px #0000008c;
          }
          `}</style>
        <div>REACH OUT TO ME</div>
      <div className="contact-page-inner">
        <div className="contact-box contact-top-left">
          <img className="gmail-icon icon" src={gmailIcon} alt="boyle.kevin.michael@gmail.com" href="mailto:boyle.kevin.michael@gmail?Subject=Hi%20Kevin" />
        </div>
        <div className="contact-box contact-top-right">
          <img className="github-icon icon" src={githubIcon} />
        </div>
        <div className="contact-box contact-bottom-left">
          <img className="instagram-icon icon" src={instagramIcon} />
        </div>
        <div className="contact-box contact-bottom-right">
          <img className="linkedin-icon icon" src={linkedinIcon} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
