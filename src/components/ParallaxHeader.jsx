import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import wallpaper from '../assets/images/body-bg.svg';

const ParallaxHeader = () => (
  <Parallax
    className="parallax-container1"
    offsetYMax={90}
    offsetYMin={-90}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`
    .parallax-container1 {
      margin-top: 5%;
      margin-bottom: 5%;
      background-color: black;
    }
      .projects-banner-container {
        position: relative;
      }
      .projects-banner {
        height: 250px;
        width: 100%;
        opacity: .3;
        object-fit: cover;
      }
      .projects-title {
        color: white;
        text-shadow: 1px 1px 1px #000000c2;
        font-family: 'Didact Gothic', sans-serif;
        position: absolute;
        top: 45%;
        right: 16%;
      }
      `}</style>
    <div className="projects-banner-container">
      <img className="projects-banner" src={wallpaper}/>
      <h1 className="projects-title">Contact</h1>
    </div>

  </Parallax>
);

export default ParallaxHeader;
