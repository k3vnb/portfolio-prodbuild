import React from 'react';
import PropTypes from 'prop-types';

function Gallery(props){
  return (
    <div className="gallery-card" onClick={() => {props.onGalleryItemSelection(props.imageId);}}>
      <style jsx>{`
        .gallery-card {
          width: 25%;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          transition: transform .3s;
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
          height: 110%;
          object-fit: cover;
          transition: height .3s ease-in;
        }
        .gallery-image:hover {
          height: 100%;
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
