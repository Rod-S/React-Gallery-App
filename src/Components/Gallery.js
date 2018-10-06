import React from 'react';

const Gallery = () => (

<div className="photo-container">
  <h2>Results</h2>
  <ul>
    <li>
      <img src="https://farm2.staticflickr.com/1902/43310387940_9c3e301e6b.jpg" alt="" />
    </li>
    <li>
      <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
    </li>
    <li>
      <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
    </li>
    <li>
      <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
    </li>
    <li>
      <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
    </li>

    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  </ul>
</div>
);

export default Gallery;
