import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import walrus from '../assets/images/gallery/walrus.png';

function Error404(props){
  return (
    <div className="error404-container">
      <style jsx>{`
          .error404-container {
            background-image: url(${walrus});
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
            text-align: center;
            padding: 5%;
            position: relative;
          }
          .error404-container h1 {
            color: #ff5656;
            text-shadow: 1px 1px 1px black;
          }
          .return-home {
            padding: 5%;
            width: 40vw;
            border-radius: 50%;
            background-color: #3f51b5b5;
            -webkit-box-shadow: 1px 1px 3px #000000b0;
            box-shadow: 1px 1px 3px #000000b0;
            text-shadow: 1px 1px 1px #000000b0;
            color: white;
            position: absolute;
            right: 5%;
            top: 50%;
          }
          .go-home:hover {
            color: #ffffffbd;
            text-shadow: 1px 1px 1px purple;
          }
          @media screen and (max-width: 550px){
            .return-home {
              right: 50%;
            }
          }
          `}</style>
        <h1>ERROR 404</h1>
        <div className="return-home">
          <h3>The page {props.location.pathname} is invalid!</h3>
          <h3>Return <Link to="/" ><span className="go-home">Home</span></Link>?</h3>
        </div>
      </div>
    );
  }
  Error404.propTypes = {
    location: PropTypes.string
  };
  export default Error404;
