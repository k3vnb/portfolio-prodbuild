import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Gallery from './Gallery';
import GallerySelection from './GallerySelection';
import ParallaxImage from './ParallaxImage';
import WebProjects from './WebProjects';
import pool from '../assets/images/gallery/pool.png';
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
    imageItself: `${duckBath}`
  },
  {
    imageSource: '1C',
    imageTitle: 'Pic3',
    imageItself: `${nightDrive}`
  },
  {
    imageSource: '1D',
    imageTitle: 'Pic4',
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
    console.log(this);
  }
  render(){

    return (
      <ParallaxProvider>
      <div className="gallery-container">
        <style jsx>{`
        .top-buffer {
          height: 7.4vh;
        }
        .gallery-hero {
          height: 200px;
          width: 100%;
          background-image: url(${pool});
          background-position: 11% 14%;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .gallery-title {
          color: white;
          text-shadow: 1px 1px 1px #00000073;
          font-family: 'Didact Gothic', sans-serif;
          padding: 10% 50%;
        }
        .gallery-main-content {
          background-color: #2020a7d6;
          color: white;
          display: flex;
          flex-wrap: wrap;
          padding: 1%;
        }
        `}</style>
        <div className="top-buffer"></div>
        <ParallaxImage />
        <div className="web-projects">
          <WebProjects />
        </div>
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
      </ParallaxProvider>
    );
  }
}

export default GalleryList;
