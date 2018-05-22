import React from 'react';

function Footer(){
  let footerStyleSheet = {
    width: '100%',
    backgroundColor: 'peachpuff',
    position: 'fixed',
    bottom: '0'
  };
  return (
    <div style={footerStyleSheet}>
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;
