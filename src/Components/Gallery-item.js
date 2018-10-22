import React from 'react';
import PropTypes from 'prop-types';

//individual gallery items with unique props
const GalleryItem = props => (
    <li>
      <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>
);

GalleryItem.propTypes = {
  farm: PropTypes.number,
  server: PropTypes.string,
  id: PropTypes.string,
  secret: PropTypes.string,
  search: PropTypes.func
};

export default GalleryItem;
