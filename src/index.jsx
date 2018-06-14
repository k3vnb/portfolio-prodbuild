import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import favicon from './assets/images/favicon.png';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <div>
      <Favicon url={favicon} />
      <AppContainer>
        <HashRouter>
          <Component/>
        </HashRouter>
      </AppContainer>
    </div>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */







// function liveTime(){
//   var timeSimplified = new Date().toLocaleTimeString().replace(/:\d+ /, ' ');
//   var greeting = React.createElement('h1', {}, 'Hello, World!');
//   var clock = React.createElement('h2', {}, `It is ${timeSimplified}`);
//   var app = React.createElement('div', {}, greeting, clock);
//
//   ReactDOM.render(
//     app,
//     document.getElementById('react-app-root')
//   );
// }
// setInterval(liveTime, 1000);
