import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Header />
        <Nav />
        <Gallery />
      </div>
    );
  }
}

export default App;
