import React from 'react';

function Header(){
  let headerStyleSheet = {
    backgroundColor: 'peachpuff'
  };
  return (
    <div style={headerStyleSheet}>
      <h1 className="title-text">About Kv</h1>
      <style jsx>{`
          .title-text {
            text-shadow: 1px 1px 1px pink;
          }
            `}</style>
      <hr />
    </div>
  );
}

export default Header;
