import React from 'react';

function LandingPage() {

  return(
    <div className="main-container">
      <style jsx>{`
          font-family: 'Didact Gothic', sans-serif;
          .landingPageInner {
            display: flex;
            align-items: center;
            height: 100%;
            width: 100%;
          }
          .landingPageHalf {
            width: 49%;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 2%;
          }
          .landingPageLeft {
            border-right: 3px solid black;
            margin-right: 1%;
            text-align: center;
            height: 60%;
          }
          .landingPageRight {
            margin-left: 12%;
            display: flex;
            align-items: center;
            font-size: 2vw
          }
          .hi {
            margin-right: 12%;
            font-size: 14vw;
          }
          .leaderText {
            font-size: 3vw;
          }
          @media screen and (max-width: 650px){
            .leaderText {
              font-size: 4vw;
            }
            .landingPageRight {
              font-size: 3vw;
            }
          }
            `}</style>
        <div className="landingPageInner">
          <div className="landingPageHalf landingPageLeft">
            <h2 className="hi">Hi</h2>
          </div>
          <div className="landingPageHalf landingPageRight">
            <p><span className="leaderText">Thank you</span> for visiting. My name is Kevin and I design and develop websites.</p>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;
