import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import pool from '../assets/images/gallery/pool.png';

const ParallaxImage = () => (
    <Parallax
        className="projects-banner"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    ><style jsx>{`
      .banner {
        height: 100px;
      }
      h1 {
        background-color: blue;
      }
      `}</style>
    <img className="banner" src={pool} />
        <h1>HELLO HELLO</h1>
    </Parallax>
);

export default ParallaxImage;
