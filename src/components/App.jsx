import React from 'react';
import Header from './Header';
import PictureList from './PictureList';
import Footer from './Footer';
import About from './About';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={PictureList} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
