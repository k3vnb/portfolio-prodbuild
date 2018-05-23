import React from 'react';
import Header from './Header';
import wallpaper from '../assets/images/body-bg.svg';
import PictureList from './PictureList';
import Contact from './Contact';
import Footer from './Footer';
import LandingPage from './LandingPage';
import About from './About';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){

  const appStylesSheet = {
    backgroundImage: `url(${wallpaper})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw'
  }
  return (
    <div style={appStylesSheet}>

      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/gallery' component={PictureList} />
        <Route path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
