import React from 'react';
import About from './Components/About';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import Images from './Components/Images';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Mars Rover Explorer</h1>
      </header>
      <div>
        <Link className="links" to="/">
          Home
        </Link>
        &nbsp;&nbsp;
        <Link className="links" to="/about">
          About
        </Link>
        &nbsp;&nbsp;
        <Link className="links" to="/images">
          Images
        </Link>
      </div>
      <div>
        <SearchForm />
        <main className="main">
          <Switch>
            <Route path="/images" component={Images} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
