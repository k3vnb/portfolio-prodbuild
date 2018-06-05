
import React from 'react';
import PropTypes from 'prop-types';

function GallerySelection(props){
  return(
    <div>
      <style jsx>
        {`
        h3 {
          width: 300px;
        }`}
      </style>
      GALLERY SELECTION TEST
    </div>
  );
}

GallerySelection.propTypes = {
  thisSelectedGalleryItem: PropTypes.object
};



export default GallerySelection;





// <h3>{props.thisSelectedGalleryItem.question}</h3>
