import React, { Component } from 'react';

import './pre-content.css';

import  SwapiService from '../../services/service'

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = { 
    population: null,
    rotationPeriod: null,
    diameter: null,
    name:null,
  };

  constructor(){
    super();
    this.updatePreContent();
  }

  updatePreContent(){
    this.swapiService
      .getPlanet(7)
      .then((planet) => {
        this.setState({
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        });
      });
  }

  render() {


    const { name,population,rotationPeriod,diameter } = this.state; 

    return (
      <div className="pre-content jumbotron rounded">
        <img className="the-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="some-pic" />
        <div>
          <h3>{name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
    }
  }