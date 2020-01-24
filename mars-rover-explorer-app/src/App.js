import React from 'react';
import About from './Components/About';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

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

function App() {
  return (
    <div>
      <header className="header">
        <h1>Mars Rover Explorer</h1>
      </header>
      <div>
        <Link className="links" to="/about">
          About
        </Link>
        &nbsp;&nbsp;
        <Link className="links" to="/">
          Home
        </Link>
      </div>
      <div>
        <SearchForm />

        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <main className="main">
          <SearchResults images={images} />
          <Switch>
            <Route exact path="/about" component={About} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
