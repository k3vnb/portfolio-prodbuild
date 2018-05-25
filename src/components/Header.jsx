import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyleSheet = {
    backgroundColor: '#0e000e61',
    position: 'sticky',
    top: -77
  };
  return (
    <div style={headerStyleSheet}>
      <style jsx>{`
          .title-text {
            font-family: 'Didact Gothic', sans-serif;
            text-decoration: none;
            color: white;
          }
          .link-line {
            display: flex;
            justify-content: space-around;
          }
          .nav-links {
            color: white;
          }
        `}</style>
      <Link to="/"><h1 className="title-text">Kevin Boyle</h1></Link>
      <Link to="/a"><div className="nav-links">.</div></Link>
      <div className="link-line">
        <Link to="/about"><div className="nav-links">About</div></Link>
        <Link to="/contact"><div className="nav-links">Contact</div></Link>
        <Link to="/gallery"><div className="nav-links">Image Gallery</div></Link>
      </div>
      <hr />
    </div>
  );
}

export default Header;
