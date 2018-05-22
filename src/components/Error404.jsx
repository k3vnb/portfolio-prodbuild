import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h1>ERROR 404</h1>
      <h3>The page {props.location.pathname} is invalid!</h3>
      <h3>Return <Link to="/">Home</Link>?</h3>
    </div>
  )
}

export default Error404;
