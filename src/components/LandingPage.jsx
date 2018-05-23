import React from 'react';

function LandingPage() {
  let landingPageStyleSheet = {
    margin: '2% 20%',
    padding: '8%',
    backgroundColor: 'white',

    boxShadow: '#303d401c 0px 0px 4px 6px',
    display: 'flex'
  };
  return(
    <div style={landingPageStyleSheet}>
      <style jsx>{`
          font-family: 'Didact Gothic', sans-serif;
          .landingPageHalf {
            width: 49%;
            padding: 2%;
          }
          .landingPageLeft {
            border-right: 3px solid black;
            margin-right: 1%;
            text-align: center;
          }
          .landingPageRight {
            margin-left: 12%;
            display: flex;
            align-items: center;
          }
          .hi {
            margin-right: 12%;
            font-size: 50px;
          }
          .leaderText {
            font-size: 20px;
          }
            `}</style>
          <div className="landingPageHalf landingPageLeft">
            <h2 className="hi">Hi</h2>
          </div>
          <div className="landingPageHalf landingPageRight">
            <p><span className="leaderText">Thank you</span> for visiting. My name is Kevin and I design and develop websites.</p>
          </div>
    </div>
  );
}

export default LandingPage;
