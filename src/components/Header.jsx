import React from 'react';
import wallpaper from '../assets/images/body-bg.svg';
import { Link } from 'react-router-dom';
import skyBG from '../assets/images/sky-bg.jpg';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navOpacityFull: false
    };
  }
  render(){
    function scrollToPage(pageSelector) {
      const goToPage = document.querySelector(pageSelector);
      const toElement = (element) => {
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };
      toElement(goToPage);
    }

    return (
      <div className="header-and-nav">
        <style jsx>{`
            .header-and-nav {
              height: 68%;
            }
            .header-container {
              height: 100%;
              background-color: white;
              position: relative;
              z-index: 2;
              animation: color-change 14s linear infinite;
            }
            @keyframes color-change {
              0% {
                background-color: #8bd8fb;
              }
              50% {
                background-color: white;
              }
              100% {
                background-color: #8bd8fb;
              }
            }
            .wallpaper-div {
              background-image: url(${wallpaper});
              height: 100%;
              background-repeat: repeat-y;
              background-size: cover;
              position: sticky;
              top: -525px;
            }
            .background-img {
              height: 100%;
              width: 100%;
              background-image: url(${skyBG});
              opacity: .7;
              animation: opacity-change 1.5s ease-in;
            }
            @keyframes opacity-change {
              from {
                opacity: .3;
              }
              to {
                opacity: .7;
              }
            }
            .header-overlay {
              background-color: #0e000e61;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 3;
            }
            .header-main-content {
              text-shadow: 1px 1px 1px black;
              width: 60%;
              background-color: #0e000e61;
              box-shadow: 13px 19px 20px 0px #9cece54a;
              font-family: 'Didact Gothic', sans-serif;
              display: flex;
              flex-direction: column;
              padding: 5%;
              animation: opacity-change-2 3s, box-shadow-glow 6s;
            }
            @keyframes opacity-change-2 {
              from {
                background-color: #0e000e00;
              }
              to {
                background-color: #0e000e61;
              }
            }
            @keyframes box-shadow-glow {
              from {
                box-shadow: 0px 1px 1px 0px #0d0e0e4a;
              }
              to {
                box-shadow: 13px 19px 20px 0px #9cece54a;
              }
            }
            @media screen and (max-width: 330px){
              .header-main-content {
                width: 77%;
              }
            }
            .title-text, .tagline {
              text-align: center;
              color: #0e000e;
            }
            .title-text {
              font-family: 'Carrois Gothic SC', sans-serif;
              text-decoration: none;
              color: #fff9f0;
              text-shadow: 3px 3px 5px black;
              letter-spacing: 13px;
            }
            .tagline {
              text-shadow: .5px .5px 1px white;
            }
            .link-line {
              margin-top: 5%;
              display: flex;
              justify-content: space-around;
              position: sticky;
            }
            .nav-links {
              border: 1px solid #ffa90e;
              color: #ffa90e;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: inset 1px 1px 1px black;
              padding: 1%;
              width: 30%;
              height: 30px;
              transition: box-shadow .2s;
            }
            .nav-links:hover {
              box-shadow: 2px 2px 2px black;
              text-shadow: 2px 2px 2px black;
              border: 1px solid orange;
              cursor: pointer;
              transform: translate(-.5px, -.5px);
            }
            .nav-links:active {
              box-shadow: 3px 3px 5px #fffffe8c;
            }
            h1 {
              margin: 0;
              margin-bottom: -10px;
            }
            .nav-component {
              z-index: 0;
            }
            @media screen and (max-width: 450px){
              .nav-links {
                font-size: 3.5vw;
              }
            }
            `}</style>
        <div className="header-container">
          <div className="wallpaper-div">
            <div className="background-img">
              <div className="header-overlay">
                <div className="header-main-content">
                  <h1 className="title-text">Kevin  &nbsp;Boyle</h1>
                  <h2 className="tagline">Web Developer & Designer</h2>
                  <div className="link-line">
                    <div className="nav-links" onClick={(e) => scrollToPage('.about-container')}>About</div>
                    <div className="nav-links" onClick={(e) => scrollToPage('.gallery-container')}>Gallery</div>
                    <div className="nav-links" onClick={(e) => scrollToPage('.contact-container')}>Contact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
