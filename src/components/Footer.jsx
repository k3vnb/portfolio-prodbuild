import React from 'react';

function Footer(){

  let footerLeftStyleSheet = {
    position: 'absolute',
    bottom: 4,
    left: 8,
  };
  let footerRightStyleSheet = {
    position: 'fixed',
    bottom: 2,
    right: 10,
  };
  return (
    <div className="footer-container">
      <style jsx>{`
          .footer-container {
            position: relative;
            color: white;
            font-family: 'Didact Gothic', sans-serif;
            font-size: 10px;
            text-shadow: -.5px .5px 1px black;
          }
          .copy-to-clipboard:hover {
            cursor: pointer;
          }
          @media screen and (max-width: 430px){
            .display-none-sm-scrn {
              display: none;
            }
          }
          `}</style>
      <div style={footerRightStyleSheet}>
        <h3>Kevin Boyle</h3>
      </div>
      <div style={footerLeftStyleSheet}>
        <h3 className="footer-left"><span className="display-none-sm-scrn">email me at </span> boyle.kevin.michael@gmail.com</h3>
      </div>
    </div>
  );
}

export default Footer;
