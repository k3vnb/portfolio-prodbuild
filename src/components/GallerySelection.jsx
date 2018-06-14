
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
            justify-content: center;
            background-color: #000000cc;
            padding-top: 5%;
            height: 100%;
            width: 100%;
            z-index: 6;
            display: flex;
            animation: fade-in-image .5s;
          }
          .gallery-invisible {
            display: none;
          }
          .image {
            width: 50vw;
            height: auto;
            object-fit: contain;
          }
          .close-button {
            color: purple;
            font-size: 60px;
            margin-left: 5%;
          }
          .close-button:hover {
            color: white;
            margin-left: 5%;
            cursor: pointer;
          }
        }`}
      </style>
      <img className="image" src={props.imageList[props.imageNumber].imageItself} alt="SVG Illustration"/>
      <h3 className="close-button" onClick={() => {props.onToggleLightbox()}}>X</h3>
      <h3 className="next-button" onClick={() => {props.onChangeLightboxPicture(props.imageNumber)}}>Y</h3>
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
