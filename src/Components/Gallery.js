import React from 'react';
import GalleryItem from './Gallery-item';

const Gallery = props => {

  const results = props.data;
  let photos = results.map( photo =>
    <GalleryItem
      farm={photo.farm}
      server={photo.server}
      id={photo.id}
      secret={photo.secret}
      key={photo.id}
      search={props.performSearch()}
    />
);
  return (
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {photos}
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    </ul>
  </div>
  )
  };

export default Gallery;
