import React from 'react';
import { Link } from 'react-router-dom';
import skyBG from '../assets/images/sky-bg.jpg';


function Header(){
  let headerStyleSheet = {

  };
  return (
    <div className="background-img">
      <style jsx>{`
          .background-img {
            height: 100%;
            width: 100%;
            background-image: url(${skyBG});
            opacity: .7;
          }
          .header-stylesheet {
            background-color: #0e000e61;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
          }
          .header-main-content {
            color: white;
            text-shadow: 1px 1px 1px black;
            width: 60%;
            background-color: #0e000e61;
            box-shadow: 2px 2px 2px #0e000e;
            font-family: 'Didact Gothic', sans-serif;
          }
          .title-text {
            text-decoration: none;
            color: white;
            text-align: center;
          }
          .link-line {
            margin-top: 15%;
            display: flex;
            justify-content: space-around;
          }
          .nav-links {
            border: 1px solid orange;
            color: white;
            width: 100%;
            box-shadow: inset 1px 1px 1px black;
            padding: 12%;
          }
          h1 {
            margin: 0;
            margin-bottom: -10px;
          }
        `}</style>
      <div className="header-stylesheet">
      <div className="header-main-content">
        <Link to="/"><h1 className="title-text">Kevin Boyle</h1></Link>
        <div className="link-line">
          <Link to="/about"><div className="nav-links">About</div></Link>
          <Link to="/contact"><div className="nav-links">Contact</div></Link>
          <Link to="/gallery"><div className="nav-links">Image Gallery</div></Link>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Header;
