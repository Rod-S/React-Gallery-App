import React from 'react';
import Search from './Search';
import Nav from './Nav';

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
