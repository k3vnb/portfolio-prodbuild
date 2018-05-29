import React from 'react';
import PropTypes from 'prop-types';

function Picture(props){
  return (
    <div className="gallery-card">
      <style jsx>{`
        .gallery-card {
          width: 45%;
        }
        .gallery-image {
          height: 90%;
          width: 50%;
          margin: 10px 30%;
          object-fit: contain;
        }
        `}</style>
      <h4>{props.imageSource}</h4>
      <h4>{props.imageTitle}</h4>
        <img className="gallery-image" src={props.imageItself} />
      <hr/>
    </div>
  );
}

Picture.propTypes = {
  imageSource: PropTypes.string,
  imageTitle: PropTypes.string,
  imageItself: PropTypes.element
};

export default Picture;
