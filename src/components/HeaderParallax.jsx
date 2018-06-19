import React from 'react';
import { Parallax } from 'react-scroll-parallax';

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
const HeaderParallax = () => (

  <Parallax
    className="parallax-container2"
    offsetYMax={20}
    offsetYMin={-20}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`

    .header-main-content {
      text-shadow: 1px 1px 1px black;
      width: 55vw;
      background-color: #0e000e61;
      box-shadow: 13px 19px 20px 0px #9cece54a;
      font-family: 'Didact Gothic', sans-serif;
      display: flex;
      flex-direction: column;
      padding: 10%;
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
    .title-text, .tagline {
      text-align: center;
      color: #0e000e;
    }
    .title-text {
      font-family: 'Josefin Sans', sans-serif;
      text-decoration: none;
      color: #fff9f0;
      text-shadow: 3px 3px 5px black;
      letter-spacing: 13px;
      font-size: 45px;
    }
    .tagline {
      font-family: 'Didact Gothic', sans-serif;
      text-shadow: .5px .5px 1px white;
    }
    .link-line {
      margin-top: 5%;
      display: flex;
      justify-content: space-around;
      position: sticky;
    }
    .nav-links {
      font-family: 'Josefin Sans', sans-serif;
      border: 1px solid #ffa90e;
      color: #ffa90e;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 1px 1px 1px black;
      padding: 1%;
      width: 30%;
      height: 50px;
      font-size: 20px;
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
      margin: 0%;
      margin-bottom: 4%;
    }
    .nav-component {
      z-index: 0;
    }
    @media screen and (max-width: 520px){
      .link-line {
        flex-direction: column;
      }
      .nav-links {
        width: 100%;
        height: 40px;
        font-size: 5vw;
        margin-bottom: 5%;
      }
      .header-main-content {
        width: 87%;
        margin: auto;
        margin-top: -10%;
      }
    }

      `}</style>
    <div className="header-main-content">
      <h1 className="title-text">Kevin  &nbsp;Boyle</h1>
      <h2 className="tagline">Web Developer & Designer</h2>
      <div className="link-line">
        <div className="nav-links" title="go to about section" onClick={() => scrollToPage('.about-container')}>About</div>
        <div className="nav-links" title="go to gallery section" onClick={() => scrollToPage('.gallery-container')}>Projects</div>
        <div className="nav-links" title="go to contact section" onClick={() => scrollToPage('.contact-container')}>Contact</div>
      </div>
    </div>

  </Parallax>
);

export default HeaderParallax;
