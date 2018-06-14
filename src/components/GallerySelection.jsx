
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
            padding-top: 5%;
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
          .image {
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
          }
          .close-button:hover {
            color: white;
            cursor: pointer;
          }
          .next-button {
            color: black;
            text-shadow: 0px 0px 1px white;
            font-size: 40px;
            position: fixed;
            bottom: 2%;
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
      <img className="image" src={props.imageList[props.imageNumber].imageItself} alt="SVG Illustration"/>
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
  imageNumber: PropTypes.number,
  lightboxIsVisible: PropTypes.boolean,
  onToggleLightbox: PropTypes.func,
  onChangeLightboxPicture: PropTypes.func
};



export default GallerySelection;





// <h3>{props.thisSelectedGalleryItem.question}</h3>
