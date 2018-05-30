import React from 'react';

function Footer(){
  let footerStyleSheet = {
    fontFamily: 'Didact Gothic, sans-serif',
    width: '100%',
    position: 'fixed',
    bottom: '0',
    height: 20,
    color: 'white',
    fontSize: 5,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  };
  return (
    <div style={footerStyleSheet}>
      <style jsx>{`
          h1 {
            margin-right: 20px;
          }
            `}</style>
      <h1>Kevin Boyle</h1>
    </div>
  );
}

export default Footer;
