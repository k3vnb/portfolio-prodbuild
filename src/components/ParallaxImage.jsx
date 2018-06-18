import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import pool1 from '../assets/images/gallery/pool1.png';


const ParallaxImage = () => (
  <Parallax
    className="projects-parallax-container"
    offsetYMax={10}
    offsetYMin={-90}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`
    .projects-parallax-container {
      margin-bottom: 5%;
    }
      .projects-banner-container {
        position: relative;
      }
      .projects-banner {
        height: 250px;
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
      .projects-title {
        color: white;
        text-shadow: 1px 1px 1px #00000073;
        font-family: 'Didact Gothic', sans-serif;
        position: absolute;
        top: 20%;
        right: 16%;
      }
      `}</style>
    <div className="projects-banner-container">
      <img className="projects-banner" src={pool1}/>
      <h1 className="projects-title">Projects</h1>
    </div>

  </Parallax>
);

export default ParallaxImage;
