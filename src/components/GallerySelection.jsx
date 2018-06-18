
import React from 'react';
import PropTypes from 'prop-types';

function GallerySelection(props){

  return(
    <div className={props.lightboxIsVisible ? 'gallery-lightbox' : 'gallery-invisible'}>
      <style jsx>
        {`
          .gallery-lightbox {
            position: fixed;
            top: 0%;
            left: 0%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #000000cc;
            font-family: 'Didact Gothic', sans-serif;
            height: 100%;
            width: 100%;
            z-index: 6;
            animation: fade-in-image .5s;
          }
          @keyframes fade-in-image {
            0% {
              opacity: 0; }
            100% {
              opacity: 100; }
            }
          .gallery-invisible {
            display: none;
          }
          .lightbox-image {
            width: 75vw;
            height: auto;
            object-fit: contain;
          }
          .lightbox-buttons {
            display: flex;
            flex-direction: column;
          }
          .close-button {
            color: purple;
            font-size: 27.6px;
            height: 40px;
            width: 40px;
            border: 1px solid white;
            border-radius: 50%;
            position: fixed;
            top: 2%;
            right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0% 0% .5% .5%;
          }
          .close-button h3 {
            position: absolute;
            top: -20%;
            right: 24%;
          }
          .close-button:hover {
            color: white;
            cursor: pointer;
          }
          .next-button {
            color: black;
            text-shadow: 0px 0px 1px white;
            font-size: 62px;
            position: fixed;
            bottom: 15%;
            right: 5%;
          }
          .next-button:hover {
            color: white;
            text-shadow: 0px 0px 1px black;
            cursor: pointer;
          }
          .next-button:active {
            color: yellow;
            text-shadow: 0px 0px 3px white;
          }
        }`}
      </style>
      <div className="close-button" onClick={() => {props.onToggleLightbox();}}>
        <h3>X</h3>
      </div>
      <img className="lightbox-image" src={props.imageList[props.imageNumber].imageItself} alt="SVG Illustration"/>
      <div className="next-button" onClick={() => {props.onChangeLightboxPicture(props.imageNumber);}}>
        <h3>
          Next
        </h3>
      </div>
    </div>
  );
}

GallerySelection.propTypes = {
  imageList: PropTypes.object,
  imageNumber: PropTypes.string,
  lightboxIsVisible: PropTypes.bool,
  onToggleLightbox: PropTypes.func,
  onChangeLightboxPicture: PropTypes.func
};



export default GallerySelection;





// <h3>{props.thisSelectedGalleryItem.question}</h3>
