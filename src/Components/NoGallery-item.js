import React from 'react';

//component to display when data fetch does not return data
const NoGalleryItem = props => (

  <li className="not-found">
    <h3>No Results Found</h3>
    <p>That search did not return any results. Please try again.</p>
  </li>
);

export default NoGalleryItem;
