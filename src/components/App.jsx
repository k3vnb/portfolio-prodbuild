import React from 'react';
import Header from './Header';
import PictureList from './PictureList';
import Contact from './Contact';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Nav from './Nav';
import About from './About';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){

  const appStyleSheet = {
    height: '150vh',
    width: '100vw',
    position: 'relative'
  };

  return (
    <div style={appStyleSheet}>
      <style jsx global>{`
          @import @import url('https://fonts.googleapis.com/css?family=Carrois+Gothic+SC|Didact+Gothic');
          a {
            text-decoration: none;
          }
          .main-container {
            margin: 2% 20%;
            padding: 8%;
            background-color: white;
            height: 200px;
          }
          @media screen and (max-width: 650px){
            .main-container {
              margin: 3% 10%;
            }
            `}
      </style>
      <Header />
      <About />
      <PictureList />
      <Contact />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
// <Switch>
//   <Route exact path='/' component={LandingPage} />
//   <Route exact path='/a' component={PreLandingPage} />
//   <Route exact path='/gallery' component={PictureList} />
//   <Route path='/about' component={About} />
//   <Route exact path='/contact' component={Contact} />
//   <Route component={Error404} />
// </Switch>
