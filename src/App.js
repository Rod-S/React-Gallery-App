import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from './Components/Gallery';
import apiKey from './.config';
import Header from './Components/Header';

//main container component
class App extends Component {

  //create initial state
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  };

  //on App load setState or performSearch()
  componentDidMount() {
    this.mounted = true;
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

  //on updated component, run performSearch() if updated params.id doesn't match previous params.id
  componentDidUpdate(prevProps) {
      if(this.props.match.params.id !== prevProps.match.params.id) {
        this.performSearch(this.props.match.params.id);
      }
  };

  //added check to avoid potential async data leak
  componentWillUnmount() {
    this.mounted = false;
  };

  //data fetch logic to update state with new set of photos and control loading indicator
  performSearch = (tags) => {
    this.setState(prevState => ({
      loading: true
    }));
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=?&tags=${tags}&safe_search=1&per_page=24&page=1&api_key=${apiKey}`)
        .then(response => {
          if (this.mounted) {
          this.setState(prevState => ({
            photos: response.data.photos.photo,
            loading: false
            }));
          }
          console.log(response.data.photos.photo);
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    };

  //render component with state and props passed to nested components
  render() {
    return (
          <div className="container">
            <Header
              performSearch={this.performSearch}
            />
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
  };
};

export default App;
