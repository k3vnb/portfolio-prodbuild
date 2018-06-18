import React from 'react';
import PropTypes from 'prop-types';

function Gallery(props){
  return (
    <div className="gallery-card" onClick={() => {props.onGalleryItemSelection(props.imageId);}}>
      <style jsx>{`
        .gallery-card {
          width: 18vw;
          height: 18vw;
          border-radius: 50%;
          border: .5px solid black;
          overflow: hidden;
          transition: box-shadow .5s;
          box-shadow: 0px 0px 8px 2px #ffffff94;
        }
        .gallery-card:hover {
          box-shadow: 0px 0px 10px 4px #ffffff85;
        }

        @media screen and (max-width: 500px){
          .gallery-card {
            width: 75px;
            height: 75px;
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
  imageItself: PropTypes.string,
  imageId: PropTypes.number,
  onGalleryItemSelection: PropTypes.func
};

export default Gallery;
