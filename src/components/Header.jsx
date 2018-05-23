import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyleSheet = {
    backgroundColor: '#93d1ff52'
  };
  return (
    <div style={headerStyleSheet}>
      <style jsx>{`
          .title-text {
            text-shadow: 1px 1px 1px pink;
          }
          .link-line {
            display: flex;
            justify-content: space-around;
          }
        `}</style>
      <Link to="/"><h1 className="title-text">About Kv</h1></Link>
      <div className="link-line">
        <Link to="/a">pre</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Image Gallery</Link>
      </div>
      <hr />
    </div>
  );
}

export default Header;
