import React from 'react';
import Search from './Search';
import Nav from './Nav';

//Nested Search and Nav components within Header component
const Header = (props) => (

  <header>
    <Search
      performSearch={props.performSearch}
    />
    <Nav
    />
  </header>
);

export default Header;
