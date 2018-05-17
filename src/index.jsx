import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <h3>from a computer interface</h3>
    <p>Direct to you</p>
  </div>,
  document.getElementById('react-app-root')
);






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
