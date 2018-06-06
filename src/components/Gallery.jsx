import React from 'react';
import PropTypes from 'prop-types';

function Gallery(props){
  return (
    <div className="gallery-card" onClick={() => {props.onGalleryItemSelection(props.imageId);}}>
      <style jsx>{`
        .gallery-card {
          width: 25%;
          height: 200px;
        }
        @media screen and (max-width: 500px){
          .gallery-card {
            width: 50%;
            height: 150px;
          }
        }
        .gallery-image {
          background-color: white;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        `}</style>
      <img className="gallery-image" src={props.imageItself} alt={props.imageTitle} />
    </div>
  );
}

Gallery.propTypes = {
  imageSource: PropTypes.string,
  imageTitle: PropTypes.string,
  imageItself: PropTypes.element,
  imageId: PropTypes.string,
  onGallerySelection: PropTypes.func
};

export default Gallery;
