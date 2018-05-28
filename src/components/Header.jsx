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
            position: sticky;
            top: -480px;
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
            box-shadow: 13px 19px 20px 0px #9cece54a;
            font-family: 'Didact Gothic', sans-serif;
            display: flex;
            flex-direction: column;
            padding: 5%;
          }
          .title-text, .tagline {
            text-align: center;
            color: #0e000e;
          }
          .title-text {
            font-family: 'Carrois Gothic SC', sans-serif;
            text-decoration: none;
            color: #fff9f0;
            text-shadow: 3px 3px 5px black;
            letter-spacing: 13px;
          }
          .tagline {
            text-shadow: .5px .5px 1px white;
          }
          .link-line {
            margin-top: 5%;
            display: flex;
            justify-content: space-around;
            position: sticky;
          }
          .nav-links {
            border: 1px solid #ffa90e;
            color: #ffa90e;
            width: 100%;
            text-align: center;
            box-shadow: inset 1px 1px 1px black;
            padding: 1%;
            width: 20%;
            transition: box-shadow .2s;
            height: 20%;
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
            <Link to="/"><h1 className="title-text">Kevin  &nbsp;Boyle</h1></Link>
            <h2 className="tagline">Web Developer & Designer</h2>
            <div className="link-line">
              <div className="nav-links" onClick={(e) => window.scrollTo({top:2000, behavior:'smooth'})}>About</div>
              <div className="nav-links">Gallery</div>
              <div className="nav-links">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
