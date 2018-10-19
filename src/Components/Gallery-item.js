import React from 'react';

//individual gallery items with unique props
const GalleryItem = props => (
    <li>
      <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>
);

export default GalleryItem;
