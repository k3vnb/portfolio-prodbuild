import React from "react";
import PropTypes from "prop-types";

function Picture(props){
  return (
    <div>Picture Works
      <h4>{props.imageSource}</h4>
      <h4>{props.imageTitle}</h4>
      <hr/>
    </div>
  );
}

Picture.propTypes = {
  imageSource: PropTypes.string,
  imageTitle: PropTypes.string
};

export default Picture;
