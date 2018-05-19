import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyleSheet = {
    backgroundColor: 'peachpuff'
  };
  return (
    <div style={headerStyleSheet}>
      <style jsx>{`
          .title-text {
            text-shadow: 1px 1px 1px pink;
          }
        `}</style>
      <Link to="/"><h1 className="title-text">About Kv</h1></Link>
      <Link to="/about">About</Link>
      <hr />
    </div>
  );
}

export default Header;
