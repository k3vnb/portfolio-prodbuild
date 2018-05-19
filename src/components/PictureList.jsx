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
]

function PictureList(){
  return (
    <div>
      <hr/>
      {masterPictureList.map((picture, index) =>
      <Picture imageSource = {picture.imageSource}
        imageTitle = {picture.imageTitle} />
      )}
    </div>
  );
}

export default PictureList;
