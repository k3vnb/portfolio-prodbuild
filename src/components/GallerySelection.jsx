
import React from 'react';
import PropTypes from 'prop-types';

function GallerySelection(props){
  return(
    <div className="gallery-lightbox">
      <style jsx>
        {`
          .gallery-lightbox {
            position: absolute;
            
            top: 0%;
            left: 0%;
            justify-content: center;
            background-color: #000000cc;
            padding-top: 5%;
            height: 100%;
            width: 100%;
            z-index: 6;
            animation: fade-in-image .5s;
          }
          .image {
            height: 200px;
            width: 200px;
          }
        }`}
      </style>
      GALLERY SELECTION TEST
      <img className="image" src={props.imageList[props.imageNumber].imageItself} alt="altLKJ:KLJ:LKJF:KFJ:LKDF"/>
    </div>
  );
}

GallerySelection.propTypes = {
  imageList: PropTypes.object,
  imageNumber: PropTypes.number,
  thisSelectedGalleryItem: PropTypes.object
};



export default GallerySelection;





// <h3>{props.thisSelectedGalleryItem.question}</h3>
