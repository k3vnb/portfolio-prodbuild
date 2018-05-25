import React from 'react';
import wallpaper from '../assets/images/body-bg.svg';
import { Link } from 'react-router-dom';
import skyBG from '../assets/images/sky-bg.jpg';


function Header(){

  return (
    <div className="wallpaper-div">
      <style jsx>{`
          .wallpaper-div {
            background-image: url(${wallpaper});
            height: 68%;
            background-repeat: repeat-y;
            background-size: cover;
          }
          .background-img {
            height: 100%;
            width: 100%;
            background-image: url(${skyBG});
            opacity: .7;
          }
          .header-stylesheet {
            background-color: #0e000e61;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
          }
          .header-main-content {
            text-shadow: 1px 1px 1px black;
            width: 60%;
            background-color: #0e000e61;
            box-shadow: 2px 2px 2px #0e000e;
            font-family: 'Didact Gothic', sans-serif;
            display: flex;
            flex-direction: column;
            padding: 5%;
          }
          .title-text, .tagline {
            text-align: center;
          }
          .title-text {
            text-decoration: none;
            color: white;
            text-shadow: 0px 0px 3px black;
          }
          .tagline {
            text-shadow: .5px .5px 1px white;
          }
          .link-line {
            margin-top: 5%;
            display: flex;
            justify-content: space-around;
          }
          .nav-links {
            border: 1px solid #ffa90e;
            color: #ffa90e;
            width: 100%;
            text-align: center;
            box-shadow: inset 1px 1px 1px black;
            padding: 12%;
            transition: box-shadow .2s;
          }
          .nav-links:hover {
            box-shadow: 2px 2px 2px black;
            text-shadow: 2px 2px 2px black;
            border: 1px solid orange;
          }
          h1 {
            margin: 0;
            margin-bottom: -10px;
          }
          @media screen and (max-width: 450px){
            .nav-links {
              font-size: 3.5vw;
            }
          }
        `}</style>
      <div className="background-img">
      <div className="header-stylesheet">
      <div className="header-main-content">
        <Link to="/"><h1 className="title-text">Kevin Boyle</h1></Link>
        <h2 className="tagline">Web Developer & Designer</h2>
        <div className="link-line">
          <Link to="/about"><div className="nav-links">About</div></Link>
          <Link to="/contact"><div className="nav-links">Contact</div></Link>
          <Link to="/gallery"><div className="nav-links">Gallery</div></Link>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Header;
