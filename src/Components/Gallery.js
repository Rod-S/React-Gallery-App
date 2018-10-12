import React from 'react';
import GalleryItem from './Gallery-item';
import NoGalleryItem from './NoGallery-item';

const Gallery = props => {

  const title = props.title;
  const results = props.data;
  let photos;
  if (results.length > 0) {
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

export default Gallery;
