import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

const images = [
  {
    id: 425078,
    sol: 1000,
    camera: {
      id: 22,
      name: 'MAST',
      rover_id: 5,
      full_name: 'Mast Camera'
    },
    img_src:
      'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630440405141E02_DXXX.jpg',
    earth_date: '2015-05-30'
  },
  {
    id: 425076,
    sol: 1000,
    camera: {
      id: 22,
      name: 'MAST',
      rover_id: 5,
      full_name: 'Mast Camera'
    },
    img_src:
      'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630450405142E01_DXXX.jpg',
    earth_date: '2015-05-30'
  }
];

function Images() {
  //   const searchParams = {
  //     key: process.env.MARS_ROVER_EXPLORER_NASA_KEY,

  //     api: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity',
  //     endpoint: '/photos?sol='
  //   };

  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     getImages();
  //   }, []);

  //   function getImages() {
  //     const searchForm = '1000';
  //     const url = `${searchParams.api}${searchParams.endpoint}${searchForm}&api_key=DEMO_KEY`;

  //     fetch(url)
  //       .then(response => response.json())
  //       .then(response => {
  //         setImages(response.data);
  //       })
  //       .catch(console.error);
  // }
  return (
    <div>
      <SearchResults images={images} />
    </div>
  );
}

export default Images;
