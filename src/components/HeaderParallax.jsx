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
      width: 82vw;
      background: -webkit-linear-gradient(233deg,#ff021936,rgba(0, 0, 0, 0.2) 27.71%),-webkit-linear-gradient(323deg,rgba(50,57,132,0.06),rgba(3, 169, 244, 0.45) 70.71%),-webkit-linear-gradient(253deg,rgba(125, 30, 156, 0.37),rgba(0, 0, 0, 0.28) 81.71%),-webkit-linear-gradient(61deg,rgba(0, 149, 236, 0.43),rgba(0,255,0,0) 41.71%);
      background: -o-linear-gradient(233deg,#ff021936,rgba(0, 0, 0, 0.2) 27.71%),-o-linear-gradient(323deg,rgba(50,57,132,0.06),rgba(3, 169, 244, 0.45) 70.71%),-o-linear-gradient(253deg,rgba(125, 30, 156, 0.37),rgba(0, 0, 0, 0.28) 81.71%),-o-linear-gradient(61deg,rgba(0, 149, 236, 0.43),rgba(0,255,0,0) 41.71%);
      background: linear-gradient(217deg,#ff021936,rgba(0, 0, 0, 0.2) 27.71%),linear-gradient(127deg,rgba(50,57,132,0.06),rgba(3, 169, 244, 0.45) 70.71%),linear-gradient(197deg,rgba(125, 30, 156, 0.37),rgba(0, 0, 0, 0.28) 81.71%),linear-gradient(389deg,rgba(0, 149, 236, 0.43),rgba(0,255,0,0) 41.71%);
      -webkit-box-shadow: 6px 6px 13px 0px #000000ad;
              box-shadow: 6px 6px 13px 0px #000000ad;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      padding: 5%;
      -webkit-animation: opacity-change-2 1.5s ease-out, box-shadow-glow 1.5s ease-out;
              animation: opacity-change-2 1.5s ease-out, box-shadow-glow 1.5s ease-out;
    }
    @-webkit-keyframes opacity-change-2 {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes opacity-change-2 {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-webkit-keyframes box-shadow-glow {
      0% {
        -webkit-box-shadow: 0px 1px 1px 0px #0d0e0e4a;
                box-shadow: 0px 1px 1px 0px #0d0e0e4a;
      }
      50% {
        -webkit-box-shadow: 0px 1px 1px 0px #0d0e0e4a;
                box-shadow: 0px 1px 1px 0px #0d0e0e4a;
      }
      100% {
        -webkit-box-shadow: 6px 6px 13px 0px #000000ad;
                box-shadow: 6px 6px 13px 0px #000000ad;
      }
    }
    @keyframes box-shadow-glow {
      0% {
        -webkit-box-shadow: 0px 1px 1px 0px #0d0e0e4a;
                box-shadow: 0px 1px 1px 0px #0d0e0e4a;
      }
      50% {
        -webkit-box-shadow: 0px 1px 1px 0px #0d0e0e4a;
                box-shadow: 0px 1px 1px 0px #0d0e0e4a;
      }
      100% {
        -webkit-box-shadow: 6px 6px 13px 0px #000000ad;
                box-shadow: 6px 6px 13px 0px #000000ad;
      }
    }
    .title-text, .tagline {
    }
    .title-text {
      font-family: 'Josefin Sans', sans-serif;
      text-decoration: none;
      text-align: center;
      color: #fff9f0;
      text-shadow: 3px 3px 5px black;
      letter-spacing: 13px;
      font-size: 57px;
    }
    .tagline {
      text-align: center;
      color: #171717;
      font-weight: bold;
      font-family: 'Work Sans', sans-serif;
      text-shadow: .5px .5px 1px white;
      font-size: 2em;
    }
    .link-line {
      margin-top: 5%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
          justify-content: space-around;
      position: -webkit-sticky;
      position: sticky;
    }
    .nav-links {
      font-family: 'Josefin Sans', sans-serif;
      border: 1px solid #eaeaea;
      color: #fdfdfd;
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-shadow: inset 1px 1px 1px black;
              box-shadow: inset 1px 1px 1px black;
      padding: 1%;
      width: 30%;
      height: 44px;
      font-size: 24px;
      background: #e91e630d;
      -webkit-transition: -webkit-box-shadow .2s;
      transition: -webkit-box-shadow .2s;
      -o-transition: box-shadow .2s;
      transition: box-shadow .2s;
      transition: box-shadow .2s, -webkit-box-shadow .2s;
    }
    .nav-links:hover {
      -webkit-box-shadow: 2px 2px 2px #0000009e;
              box-shadow: 2px 2px 2px #0000009e;
      text-shadow: 2px 2px 2px #000000d4;
      cursor: pointer;
      -webkit-transform: translate(-.5px, -.5px);
          -ms-transform: translate(-.5px, -.5px);
              transform: translate(-.5px, -.5px);
    }
    .nav-links:active {
      -webkit-box-shadow: 3px 3px 5px #fffffe8c;
              box-shadow: 3px 3px 5px #fffffe8c;
    }
    h1 {
      margin: 0%;
      margin-bottom: 4%;
    }
    .nav-component {
      z-index: 0;
    }
    @media screen and (max-width: 420px){
      .link-line {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }
      .nav-links {
        width: 100%;
        height: 40px;
        font-size: 5vw;
        margin-bottom: 4%;
      }
      .header-main-content {
        width: 87%;
        height: 72vh;
        margin: auto;
        margin-top: -10%;
      }
    }

      `}</style>
    <div className="header-main-content">
      <h1 className="title-text">Kevin &nbsp;Boyle</h1>
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
