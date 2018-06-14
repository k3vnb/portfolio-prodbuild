import React from 'react';
import Gallery from './Gallery';
import GallerySelection from './GallerySelection';
import ParallaxImage from './ParallaxImage';
import WebProjects from './WebProjects';
import pool from '../assets/images/gallery/pool.png';
import walrus from '../assets/images/gallery/walrus.png';
import nightDrive from '../assets/images/gallery/nightdrive1.png';
import duckBath from '../assets/images/gallery/duckbath1.png';
import mindBlown from '../assets/images/gallery/mindblown.png';
import wallpaper from '../assets/images/body-bg.svg';

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
  }
  handleLightboxToggle(){
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
          width: 92%;
          margin: auto;
          box-shadow: 1px 1px 3px #0000008c;
          color: white;
          background-image: url(${wallpaper});
          font-family: 'Josefin Sans', sans-serif;
          letter-spacing: 3px;
          margin-bottom: 50vh;
          border: 2px solid #00000078;
        }
        .gallery-overlay {
          padding: 1% 1% 5%;
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg,rgba(2,0,36,1) 0%,rgba(1, 1, 2, 0.79) 0%,rgba(177, 0, 255, 0.53) 100%)
        }
        .gallery-main-content h2 {
          margin: 0% 0% 5% 5%;
          text-shadow: 1px 1px 1px #00000082;
          z-index: 2;
        }
        .illustration-container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          z-index: 2;
        }
        `}</style>
        <div className="top-buffer"></div>
        <ParallaxImage />
        <div className="web-projects">
          <WebProjects />
        </div>
        <div className="gallery-main-content">
          <div className="gallery-overlay">
            <h2>Sample &nbsp;Illustrations</h2>
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
      </div>

    );
  }
}

export default GalleryList;
