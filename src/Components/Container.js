import React, { Component } from 'react';
import axios from 'axios';

//import Header from './Header';
import Nav from './Nav';
import Gallery from './Gallery';
import apiKey from '../.config';
import Search from './Search';

import { withRouter } from 'react-router-dom';

  class Container extends Component {

    constructor() {
      super();
      this.state = {
        photos: [],
        loading: true,
      };
    }


    componentDidMount() {
      //this.setState();
      this.performSearch(this.props.match.params.id);
    };

    componentDidUpdate(prevProps) {
      if(this.props.match.params.id !== prevProps.match.params.id) {
        this.performSearch(this.props.match.params.id);
      }
    }

    performSearch = (tags) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=?&tags=${tags}&safe_search=1&per_page=24&page=1&api_key=${apiKey}`)
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
            <div className="container">
              {console.log(this.props.match.params.id)}
              {/*<Header
                onSearch={this.performSearch}
              /> */}
              <Search
                onSearch={this.performSearch}
              />
              <Nav />
              {
                (this.state.loading)
                  ? <p>Loading...</p>
                  :
                  <Gallery
                    data={this.state.photos}
                    title={this.props.match.params.id}
                  />
              }
            </div>
      );
    }
  }

export default withRouter(Container);
