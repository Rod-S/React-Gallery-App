import React from 'react';
import GalleryItem from './Gallery-item';
import NoGalleryItem from './NoGallery-item';
import PreSearch from './PreSearch';
import PropTypes from 'prop-types';

//photo gallery
const Gallery = props => {

  const title = props.title;
  const results = props.data;
  let photos;
  //if there are photos and the route is not root route render GalleryItem component
  if (results.length > 0 && !props.root) {
    photos = results.map( photo =>
      <GalleryItem
        farm={photo.farm}
        server={photo.server}
        id={photo.id}
        secret={photo.secret}
        key={photo.id}
        search={props.performSearch}
      />
    );
  //if route is root route render PreSearch component
  } else if (results.length > 0 && props.root) {
    photos = <PreSearch />
  //otherwise display NoGalleryItem component
  } else {
    photos = <NoGalleryItem />
  }

  return (
  <div className="photo-container">
    <h2>{title}</h2>
    <ul>
      {photos}
    </ul>
  </div>
  )
  };

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  root: PropTypes.bool
};

export default Gallery;
