import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Gallery from './Components/Gallery';
import apiKey from './.config';
import Header from './Components/Header';

  class App extends Component {

    constructor() {
      super();
      this.state = {
        photos: [],
        loading: true
      };
    }

    componentDidMount() {

      if (this.props.match.path === '/') {
        this.setState( prevState => ({
          loading: false,
          photos: [''],
          root: true
        }));
    } else {
      this.performSearch(this.props.match.params.id);
      }
    };

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
          this.performSearch(this.props.match.params.id);
        }
    }

    performSearch = (tags) => {
      this.setState(prevState => ({
        loading: true
      }));
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=?&tags=${tags}&safe_search=1&per_page=24&page=1&api_key=${apiKey}`)
          .then(response => {
            this.setState(prevState => ({
              photos: response.data.photos.photo,
              loading: false
              }));
            console.log(response.data.photos.photo);
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
      }

    render() {
      return (
            <div className="container">
              {console.log(this.props.match.params.id)}

              <Header
                performSearch={this.performSearch}
              />
              {/*
                <Search
                onSearch={this.performSearch}
                />
                <Nav />
              */}
                {
                (this.state.loading)
                  ? <p>Loading...</p>
                  :
                  <Gallery
                    data={this.state.photos}
                    title={this.props.match.params.id}
                    root={this.state.root}

                  />
              }
            </div>
      );
    }
  }

export default App;
