import React from 'react';
import PropTypes from 'prop-types';

function Gallery(props){
  return (
    <div className="gallery-card" onClick={() => {props.onGalleryItemSelection(props.imageId);}}>
      <style jsx>{`
        .gallery-card {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          transition: transform .3s;
        }

        @media screen and (max-width: 500px){
          .gallery-card {
            width: 50px;
            height: 50px;
          }
        }
        .gallery-image {
          background-color: white;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: height .3s ease-in;
        }
        .gallery-image:hover {
          height: 160%;
          cursor: pointer;
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
