import React, { Component } from 'react';

import './pre-content.css';

import  SwapiService from '../../services/service'

export default class PreContent extends Component {

  swapiService = new SwapiService();

  state = { 
    id:null,
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
    const id = Math.floor(Math.random()*25)+2;
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState();
      });
  }

  render() {


    const { id,name,population,rotationPeriod,diameter } = this.state; 

    return (
      <div className="pre-content jumbotron rounded">
        <img className="the-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="some-pic" />
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