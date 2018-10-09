import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';


import Header from './Components/Header';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import apiKey from './.config';
import Search from './Components/Search';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      tags: ''
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (cats) => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=?&tags=${cats}&safe_search=1&per_page=24&page=1&api_key=${apiKey}`)
        .then(response => {
          this.setState(prevState => ({
            photos: response.data.photos.photo,
            loading: false
            })
          );
          console.log(response.data.photos.photo);
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/*<Header
            onSearch={this.performSearch}
          /> */}
          <Search onSearch={this.performSearch}/>
          <Nav />
          <Gallery
            data={this.state.photos}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
