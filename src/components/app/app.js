import React from 'react';

import Header from '../header';
import ItemList from '../item-list';
import PersonAbout from '../person-about';
import RandomPlanet from '../random-planet/random-planet';

import './app.css';


const App = () => {
  return (
    <div className="main-block">
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
        <PersonAbout />

        </div>
        <div className="col-md-6">
        <ItemList />
        </div>
      </div>
    </div>
  );
};

export default App;