import React from 'react';
import Header from './Header';
import GalleryList from './GalleryList';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';




class LandingPage extends React.Component {

  render(){
    return (
      <div className="landingpage-container">
        <style jsx>{`
            .landingpage-container {

            }
              `}</style>
        <Header />
        <About />
        <GalleryList />
        <Contact />
        <Nav />
      </div>
    );
  }
};
export default LandingPage;
