import React from 'react';

function SearchResults(props) {
  const { images } = props;

  return (
    <div className="pictures">
      {images.map(image => (
        <div key={image.id}>
          <img src={image.img_src} alt="" />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
