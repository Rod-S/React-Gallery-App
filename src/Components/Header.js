import React from 'react';
import Search from './Search';

const Header = (props) => (
  <Search
    onSearch={props.performSearch}
  />

);

export default Header;
