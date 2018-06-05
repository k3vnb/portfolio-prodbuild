import React from 'react';
import Header from './Header';
import PictureList from './PictureList';
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
              height: 150vh;
            }
              `}</style>
        <Header />
        <About />
        <PictureList />
        <Contact />
        <Nav />
      </div>
    );
  }
};
export default LandingPage;
