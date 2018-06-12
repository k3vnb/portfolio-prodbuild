import React from 'react';
import sjScrnsht1 from '../assets/images/webprojects/sieve-jobs1.png';
import sjScrnsht2 from '../assets/images/webprojects/sieve-jobs1.png';
import sjScrnshtGIF from '../assets/images/webprojects/sieve-jobsgif.gif';
import fbScrnsht1 from '../assets/images/webprojects/fizzbuzz.png';
import hrblScrnsht1 from '../assets/images/webprojects/herbl.png';


function WebProjects() {

  return(
    <div className="webprojects-container">
      <style jsx>{`
          .webprojects-container {
            font-family: 'Carrois Gothic SC', sans-serif;
            height: 100%;
          }
          .project-card-container {
            display: flex;
            justify-content: space-between;
            min-height: 60vh;
          }
          .project-card {
            width: 33%;
            height: 100%;
            margin: 5% 0% 5% 5%;
            border: 1px solid black;
            overflow: hidden;
          }
          .project-card:last-child {
            margin-right: 5%;
          }
          .screenshot {
            height: 100%;
            width: 100%;
          }
          .sievejobs .cardtop {
            background-image: url(${sjScrnsht1});
          }
          .fizzbuzz .cardtop {
            background-image: url(${fbScrnsht1});
          }
          .herbl .cardtop {
            background-image: url(${hrblScrnsht1});
          }
          .cardtop {
            background-repeat: no-repeat;
            background-position: top;
            height: 50%;
            min-height: 160px;
            width: 100%;
            background-size: cover;
            transition: background-image .3s;
          }
          .sievejobs .cardtop:hover {
            background-image: url(${sjScrnshtGIF});
          }
          .cardbottom {
            height: 50%;
            padding: 5%;
          }
            `}</style>
      <div className="project-card-container">
        <div className="project-card sievejobs">
          <div className="cardtop">
          </div>
          <div className="cardbottom">
            <h2>Sieve Jobs</h2>
            <p>A job interview flashcard preparation app, built in React</p>
          </div>
        </div>
        <div className="project-card fizzbuzz">
          <div className="cardtop"></div>
          <div className="cardbottom">
            <h2>Pumpkin Spice Bot</h2>
            <p>A seasonal-beverage themed version of <em>fizzbuzz</em>, built in pure Javascript and jQuery.</p>
          </div>
        </div>
        <div className="project-card herbl">
          <div className="cardtop"></div>
          <div className="cardbottom">
            <h2>Herbl</h2>
            <p>A sample responsive website built with Bootstrap and pure CSS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebProjects;
