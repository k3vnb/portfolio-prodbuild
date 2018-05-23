import React from 'react';

function LandingPage() {
  let landingPageStyleSheet = {
    margin: '2% 20%',
    padding: '8%',
    backgroundColor: 'white',
    border: '1px solid black',
    boxShadow: '10px 10px 10px black'
  };
  return(
    <div style={landingPageStyleSheet}>
      <h2>Landing Page</h2>
    </div>
  );
}

export default LandingPage;
