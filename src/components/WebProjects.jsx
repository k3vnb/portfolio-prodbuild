import React from 'react';
import sjScrnsht1 from '../assets/images/webprojects/sieve-jobs1.png';
import sjScrnsht2 from '../assets/images/webprojects/sieve-jobs1.png';
import sjScrnshtGIF from '../assets/images/webprojects/sieve-jobsgif.gif';


function WebProjects() {

  return(
    <div className="webprojects-container">
      WebProjects Works
      <style jsx>{`
          .webprojects-container {
            font-family: 'Didact Gothic', sans-serif;
            height: 100%;
          }
          .project-card-container {
            display: flex;
            justify-content: space-between;

          }
          .project-card {
            height: 45vh;
            width: 33%;
            background-color: grey;
          }
          .screenshot {
            height: 100%;
            width: 100%;
          }
          .sievejobs .cardtop {
            background-image: url(${sjScrnsht1});
            background-repeat: no-repeat;
            background-position: center;
            height: 100%;
            background-size: contain;
            transition: background-image .3s;
          }
          .sievejobs .cardtop:hover {
            background-image: url(${sjScrnshtGIF});
          }
            `}</style>
      <div className="project-card-container">
        <div className="project-card sievejobs">
          <div className="cardtop">
          </div>
          <div className="cardbottom"></div>
        </div>
        <div className="project-card">
          <div className="cardtop"></div>
          <div className="cardbottom"></div>
        </div>
        <div className="project-card">
          <div className="cardtop"></div>
          <div className="cardbottom"></div>
        </div>
      </div>
    </div>
  );
}

export default WebProjects;
