import React from 'react';
import sjScrnsht1 from '../assets/images/webprojects/sieve-jobs1.png';
import fbScrnsht1 from '../assets/images/webprojects/fizzbuzz.png';
import hrblScrnsht1 from '../assets/images/webprojects/herbl.png';


function WebProjects() {

  return(
    <div className="webprojects-container">
      <style jsx>{`
          .webprojects-container {
            font-family: 'Carrois Gothic SC', sans-serif;
            background: #ffffff;
            padding-bottom: 10vh;
            position: sticky;
            top: 10px;
          }
          .projects-gallery-header {
            text-align: center;
            color: white;
            text-shadow: 0px 0px 2px black;
            box-shadow: 1px 1px 3px #0000008c;
            background-color: #1bb3a6;
            width: 33%;
            margin-left: 5%;
            padding: 1%;
          }
          .project-card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .project-card {
            height: 100%;
            width: 29%;
            margin: 5% 0% 5% 2%;
            box-shadow: 1px 1px 3px #0000008c;
            transition: transform .1s, box-shadow .21s;
            background-color: white;
          }
          .project-card:last-child {
            margin-right: 2%;
          }
          .project-card:hover {
            transform: scale(1.001);
            box-shadow: 1.2px 1.2px 2.4px #3c3333f5;
          }
          .project-card:hover button {
            box-shadow: .5px .5px 1px #0000008c;
          }
          .project-card:hover h2 {
            border-bottom: .5px solid #3f51b582;
          }
          .project-card:hover .cardtop-overlay {
            box-shadow: inset 1px 1px 10px white;
            border-bottom: .2px solid #3f51b582;
          }
          .screenshot {
            height: 100%;
            width: 100%;
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
          .sievejobs .cardtop {
            background-image: url(${sjScrnsht1});
            background-size: contain;
            background-position: center;
          }
          .fizzbuzz .cardtop {
            background-image: url(${fbScrnsht1});
          }
          .herbl .cardtop {
            background-image: url(${hrblScrnsht1});
          }
          .cardtop-overlay {
            height: 100%;
            width: 100%;
            box-shadow: inset 0 0 33px #00000029;
            transition: box-shadow .2s;
          }
          .cardbottom {
            height: 50%;
            padding: 6%;
            min-height: 35vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .cardbottom h2 {
            font-size: 17px;
            margin-bottom: 2%;
          }
          .cardbottom p {
            font-size: 14px;
            color: #706a79;
          }
          .project-link {
            width: 99.5%;
            min-height: 36px;
            color: white;
            text-shadow: .5px .5px .5px #3f51b59c;
            border: none;
            font-size: 12px;
            font-weight: bold;
            transition: width .2s ease-out, box-shadow .2s ease-out;
          }
          .project-link:hover {
            width: 100%;
            box-shadow: 0px .3px 3px #3f51b59c;
            cursor: pointer;
            text-shadow: .5px .5px .5px black;
          }
          .project-link:active {
            width: 99.4%;
            box-shadow: 0px .1px 1px inset #3f51b59c;
          }
          button:focus {
            outline: 0;
          }
          .project-site-link {
            background-color: #4bf5f4;
            margin-bottom: 3%;
          }
          .project-github-link {
            background-color: #47ff7e;
          }
          @media screen and (max-width: 650px){
            .projects-gallery-header {
              width: 75%;
            }
          @media screen and (max-width: 450px){
            .project-card {
              width: 96%;
              margin: auto;
              margin-top: 8%;
              display: flex;
            }
            .cardtop {
              width: 40%;
              border-right: .5px solid #4bf6f4c7;
            }
            .cardbottom {
              width: 60%;
            }
          }
          `}</style>
      <div className="projects-gallery-header">
        <h2>Websites & Web Apps</h2>
      </div>
      <div className="project-card-container">
        <div className="project-card sievejobs">
          <div className="cardtop">
            <div className="cardtop-overlay">
            </div>
          </div>
          <div className="cardbottom">
            <div className="project-description">
              <h2>Sieve Jobs</h2>
              <p>A job interview flashcard preparation app, built in React</p>
            </div>
            <div className="card-buttons">
              <a href="https://sieve-jobs.herokuapp.com/" title="Go to webpage" target="_blank"><button className="project-site-link project-link">Go to the webpage</button></a>
              <a href="https://github.com/lemurriot/Sieve_Jobs" title="Go to repository" target="_blank"><button className="project-github-link project-link">Go to the repository</button></a>
            </div>
          </div>
        </div>
        <div className="project-card fizzbuzz">
          <div className="cardtop">
            <div className="cardtop-overlay">
            </div>
          </div>
          <div className="cardbottom">
            <div className="project-description">
              <h2>Pumpkin Spice Bot</h2>
              <p>A seasonal-beverage themed version of <em>fizzbuzz</em>, built in pure Javascript and jQuery.</p>
            </div>
            <div className="card-buttons">
              <a href="https://lemurriot.github.io/beepboop2/" title="Go to webpage" target="_blank"><button className="project-site-link project-link">Go to the webpage</button></a>
              <a href="https://github.com/lemurriot/beepboop2" title="Go to repository" target="_blank"><button className="project-github-link project-link">Go to the repository</button></a>
            </div>

          </div>
        </div>
        <div className="project-card herbl">
          <div className="cardtop">
            <div className="cardtop-overlay">
            </div>
          </div>
          <div className="cardbottom">
            <div className="project-description">
              <h2>Herbl</h2>
              <p>A sample responsive website built with Bootstrap and pure CSS.</p>
            </div>
            <div className="card-buttons">
              <a href="https://lemurriot.github.io/herb-grid/" title="Go to webpage" target="_blank"><button className="project-site-link project-link">Go to the webpage</button></a>
              <a href="https://github.com/lemurriot/herb-grid" title="Go to repository" target="_blank"><button className="project-github-link project-link">Go to the repository</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebProjects;
