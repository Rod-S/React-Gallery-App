import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
  <div className="main-content not-found">
    <h2>Page Not Found</h2>
    <Link to='/'>Click Here to Search Again.</Link>
  </div>
);

export default NotFound;
