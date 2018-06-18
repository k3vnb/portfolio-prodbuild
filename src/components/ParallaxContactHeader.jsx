import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import wallpaper from '../assets/images/body-bg.svg';

const ParallaxContactHeader = () => (
  <Parallax
    className="contact-parallax-container1"
    offsetYMax={90}
    offsetYMin={-90}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`
    .contact-parallax-container1 {
      height: 250px;
    }
      .contact-banner-container {
        position: relative;
      }
      .contact-banner {
        height: 250px;
        width: 100%;
        opacity: .3;
        object-fit: cover;
      }
      .contact-title {
        color: white;
        text-shadow: 1px 1px 1px #000000c2;
        font-family: 'Didact Gothic', sans-serif;
        position: absolute;
        top: 45%;
        right: 16%;
      }
      `}</style>
    <div className="contact-banner-container">
      <img className="contact-banner" src={wallpaper}/>
      <h1 className="contact-title">Contact</h1>
    </div>

  </Parallax>
);

export default ParallaxContactHeader;
