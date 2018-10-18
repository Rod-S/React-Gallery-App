import React from 'react';
import {Link} from 'react-router-dom';

//404 Route component
const NotFound = () => (

  <div className="main-content not-found">
    <h2>Page Not Found</h2>
    <Link to='/'>Click Here to go back.</Link>
  </div>
);

export default NotFound;
