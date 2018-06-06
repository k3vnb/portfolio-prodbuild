import React from 'react';
import Gallery from './Gallery';
import GallerySelection from './GallerySelection';

import mountains from '../assets/images/gallery/mountains.png';
import walrus from '../assets/images/gallery/walrus.png';
import nightDrive from '../assets/images/gallery/nightdrive1.png';
import duckBath from '../assets/images/gallery/duckbath1.png';
import mindBlown from '../assets/images/gallery/mindblown.png';

const masterGalleryList = [
  {
    imageSource: '1A',
    imageTitle: 'Pic1',
    imageItself: `${walrus}`
  },
  {
    imageSource: '1B',
    imageTitle: 'Pic2',
    imageItself: `${mountains}`
  },
  {
    imageSource: '1C',
    imageTitle: 'Pic3',
    imageItself: `${nightDrive}`
  },
  {
    imageSource: '1D',
    imageTitle: 'Pic4',
    imageItself: `${duckBath}`
  },
  {
    imageSource: '1E',
    imageTitle: 'Pic5',
    imageItself: `${mindBlown}`
  }
];

class GalleryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedGalleryItem: '1'
    };

    this.handleGallerySelection = this.handleGallerySelection.bind(this);
  }


  handleGallerySelection() {
    console.log('gallery item seleced');
    console.log(this)
  }
  render(){

  return (
    <div className="gallery-container">
      <style jsx>{`
        .top-buffer {
          height: 7.4vh;
        }
        .gallery-main-content {
          background-color: #010106d6;
          padding: 3%;
          color: white;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        `}</style>
      <div className="top-buffer"></div>
      <div className="gallery-main-content">

        {masterGalleryList.map((picture, index) =>
          <Gallery imageSource = {picture.imageSource}
            imageTitle = {picture.imageTitle}
            imageItself = {picture.imageItself}
            key={index}
            questionId = {index}
            onGalleryItemSelection={this.handleGallerySelection} />
        )}
      </div>
      <div className="GallerySelection-container">
        <GallerySelection onGalleryItemSelection={this.handleGallerySelection}/>
      </div>
    </div>
  );
};
}

export default GalleryList;
