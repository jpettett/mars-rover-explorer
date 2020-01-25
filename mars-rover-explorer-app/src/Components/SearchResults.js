import React from 'react';

function SearchResults(props) {
  return (
    <div className="pictures">
      {props.images.map(image => (
        <div key={image.id}>
          <img src={image.img_src} alt="" />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
