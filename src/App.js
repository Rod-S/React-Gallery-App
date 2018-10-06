import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import apiKey from './.config';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&text=cat&tags=cat&per_page=1&page=1&api_key=${apiKey}`)
        .then(response => {
          this.setState({
            photos: response.data,
            loading: false
          });

            console.log(response.data)
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />
          <Gallery />
        </div>
      </BrowserRouter>
        );
        }
        }

export default App;
