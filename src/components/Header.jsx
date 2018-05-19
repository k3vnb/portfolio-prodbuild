import React from 'react';

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
      <a href="/"><h1 className="title-text">About Kv</h1></a>
      <a href="/about">About</a>
      <hr />
    </div>
  );
}

export default Header;
