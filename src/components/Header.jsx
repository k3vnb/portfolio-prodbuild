import React from 'react';
import wallpaper from '../assets/images/body-bg.svg';
import skyBG from '../assets/images/sky-bg.jpg';
import HeaderParallax from './HeaderParallax';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navOpacityFull: false
    };
  }
  render(){
    return (
      <div className="header-and-nav">
        <style jsx>{`
            .header-and-nav {
              height: 100vh;
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
              background-position: bottom;
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
            `}</style>
        <div className="header-container">
          <div className="wallpaper-div">
            <div className="background-img">
              <div className="header-overlay">
                <HeaderParallax />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
