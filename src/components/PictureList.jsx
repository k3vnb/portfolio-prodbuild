import React from 'react';
import Picture from './Picture';

var masterPictureList = [
  {
    imageSource: '1A',
    imageTitle: 'Pic1'
  },
  {
    imageSource: '1B',
    imageTitle: 'Pic2'
  },
  {
    imageSource: '1C',
    imageTitle: 'Pic3'
  }
];

function PictureList(){
  return (
    <div className="gallery-container">
      <style jsx>{`
        .gallery-container {
          background-color: black;
          color: white;
        }
        `}</style>
      <hr/>
      {masterPictureList.map((picture, index) =>
        <Picture imageSource = {picture.imageSource}
          imageTitle = {picture.imageTitle}
          key={index}/>
      )}
    </div>
  );
}

export default PictureList;
