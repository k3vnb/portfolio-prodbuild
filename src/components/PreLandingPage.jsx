import React from 'react';
import wallpaper from '../assets/images/body-bg.svg';


function PreLandingPage() {
  let landingPageStyleSheet = {
    margin: '2% 20%',
    padding: '8%',
    backgroundImage: `url(${wallpaper})`,
    height: 314,
    boxShadow: '#303d401c 0px 0px 4px 6px',
    display: 'flex'
  };
  return(
    <div style={landingPageStyleSheet}>

    </div>
  );
}

export default PreLandingPage;
