import React from 'react';

import SwapiService from '../../service/service';

import './random-planet.css'


class RandomPlanet extends React.Component{

   swapiService = new SwapiService();

    state = {
        planet:{},
    };

    constructor(){
        super();
        this.updatePlanet()
    };

    onPlanetLoaded = ( planet ) => {
        this.setState({planet})
    }

updatePlanet(){
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
}

render(){

    const { planet: {id,name,population,rotationPeriod,diameter} } = this.state

    return <div className="random-planet_block">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="some img" className="random-planet_img"></img>
            <ul className="random-planet_list">

                <li className="planet-list_item">
                    <h3>{name}</h3>
                </li>

                <li className="planet-list_item">
                    <span>Population:</span>
                    <span> {population}</span>
                </li>

                <li className="planet-list_item">
                    <span>Rotation period:</span>
                    <span> {rotationPeriod}</span>
                </li>

                <li className="planet-list_item">
                    <span>Diameter:</span>
                    <span> {diameter} </span>
                </li>

            </ul>

            </div>
}
}

export default RandomPlanet;