import React from 'react';
import Search from './Search';
import Nav from './Nav';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  performSearch: PropTypes.func.isRequired
};

export default Header;
