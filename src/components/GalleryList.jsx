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
    imageSource: '0',
    imageTitle: 'Pic1',
    imageItself: `${walrus}`
  },
  {
    imageSource: '1',
    imageTitle: 'Pic2',
    imageItself: `${duckBath}`
  },
  {
    imageSource: '2',
    imageTitle: 'Pic3',
    imageItself: `${nightDrive}`
  },
  {
    imageSource: '3',
    imageTitle: 'Pic4',
    imageItself: `${mindBlown}`
  }
];

class GalleryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterIllustrationList: {
        '0':   {
            imageItself: `${walrus}`
          },
          '1':  {
            imageItself: `${duckBath}`
          },
          '2': {
            imageItself: `${nightDrive}`
          },
          '3': {
            imageItself: `${mindBlown}`
          },
      },
      selectedGalleryItem: '1',
      lightboxIsVisible: false
    };
    this.handleGallerySelection = this.handleGallerySelection.bind(this);
    this.handleLightboxToggle = this.handleLightboxToggle.bind(this);
    this.handleChangingLightboxPicture = this.handleChangingLightboxPicture.bind(this);
  }


  handleGallerySelection(newSelectedGalleryItem) {
    this.setState({selectedGalleryItem: newSelectedGalleryItem});
    this.setState({lightboxIsVisible: true});
    console.log(this.state);
  }
  handleLightboxToggle(){
    console.log(this.state);
    this.setState({lightboxIsVisible: false});
  }
  handleChangingLightboxPicture(imageNumber){
    if (imageNumber < 3){
      let newImageNumber = parseInt(imageNumber) + 1;
      this.setState({selectedGalleryItem: newImageNumber.toString()});
    } else {
      this.setState({selectedGalleryItem: '0'});

    }
  }
  render(){

    return (
      <ParallaxProvider>
        <div className="gallery-container">
          <style jsx>{`
        .top-buffer {
          height: 14.4vh;
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

        .gallery-main-content {
          background-color: #2020a7d6;
          color: white;
          text-align: center;
          padding: 1%;
          font-family: 'Didact Gothic', sans-serif;
        }
        .illustration-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        `}</style>
          <div className="top-buffer"></div>
          <ParallaxImage />
          <div className="web-projects">
            <WebProjects />
          </div>
          <div className="gallery-main-content">
            <h2>Sample Illustrations</h2>
            <div className="illustration-container">
              {masterGalleryList.map((picture, index) =>


                <Gallery imageSource = {picture.imageSource}
                  imageTitle = {picture.imageTitle}
                  imageItself = {picture.imageItself}
                  key={index}
                  imageId = {index}
                  onGalleryItemSelection={this.handleGallerySelection} />
              )}

            </div>
            <div className="GallerySelection-container">
              <GallerySelection onToggleLightbox={this.handleLightboxToggle}
              imageList={this.state.masterIllustrationList}
              imageNumber={this.state.selectedGalleryItem}
              lightboxIsVisible={this.state.lightboxIsVisible }
              onChangeLightboxPicture={this.handleChangingLightboxPicture} />
            </div>
            </div>
        </div>
      </ParallaxProvider>
    );
  }
}

export default GalleryList;

// {Object.keys(this.state.masterIllustrationList).map(function(galleryItemId) {
//
//   return <div className="galleryItem"><Gallery
//     imageSource ={galleryItemId.imageSource}
//     imageTitle = {galleryItemId.imageTitle}
//     imageItself = {galleryItemId.imageItself}
//     key={galleryItemId}
//     questionId = {galleryItemId}
//
//   /></div>;
// })}
