import React from 'react';
import {NavLink} from 'react-router-dom';

//Navigation component with links to 3 default Topics
const Nav = () => (

  <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/sunglasses'>Sunglasses</NavLink></li>
      <li><NavLink to='/search/hats'>Hats</NavLink></li>
      <li><NavLink to='/search/'>Computers</NavLink></li>
    </ul>
  </nav>
  );

export default Nav;
