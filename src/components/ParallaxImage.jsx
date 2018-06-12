import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import pool from '../assets/images/gallery/pool.png';

const ParallaxImage = () => (
    <Parallax
        className="parallax-container"
        offsetYMax={10}
        offsetYMin={-90}
        slowerScrollRate
        tag="figure"
    ><style jsx>{`
      projects-banner-container {
        position: relative;
      }
      .projects-banner {
        height: 250px;
        width: 120%;
        margin-left: -10%;
        object-fit: cover;
      }
      .projects-title {
        color: white;
        text-shadow: 1px 1px 1px #00000073;
        font-family: 'Didact Gothic', sans-serif;
        position: absolute;
        top: 20%;
        left: 60%;
      }
      `}</style>
    <div className="projects-banner-container">
      <img className="projects-banner" src={pool}/>
      <h1 className="projects-title">Projects</h1>
    </div>

    </Parallax>
);

export default ParallaxImage;
