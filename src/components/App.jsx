import React from 'react';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render(){
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
            margin: 2% 16%;
            padding: 8%;
            background-color: white;
            height: 200px;
          }
          @media screen and (max-width: 500px){
            .main-container {
              margin: 3% 8%;
            }
            `}
        </style>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
