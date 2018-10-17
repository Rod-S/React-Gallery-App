import React from 'react';
import Search from './Search';
import Nav from './Nav';

const Header = (props) => (
  <header>
    <Search
      onSearch={props.onSearch}
    />
    <Nav
    />
  </header>
);

export default Header;
