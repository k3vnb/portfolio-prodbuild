import React from 'react';
import { Parallax } from 'react-scroll-parallax';


const ParallaxImageLayer2 = () => (
  <Parallax
    className="projects-parallax-container"
    offsetYMax={-515}
    offsetYMin={-570}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`
      .projects-title {
        color: white;
        font-size: 2.75em;
        text-shadow: 1px 1px 1px #00000073;
        font-family: 'Didact Gothic', sans-serif;
        text-align: right;
        padding-right: 16%;
      }
      `}</style>
    <div >
      <h1 className="projects-title">Projects</h1>
    </div>

  </Parallax>
);

export default ParallaxImageLayer2;
