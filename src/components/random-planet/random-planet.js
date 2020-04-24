import React from 'react';

import SwapiService from '../../service/service';
import Loader from '../loader';


import './random-planet.css'



class RandomPlanet extends React.Component{

   swapiService = new SwapiService();

    state = {
        planet:{},
        loading:true,
    };

    constructor(){
        super();
        this.updatePlanet()
    };

    onError = ( err ) =>{

    }
    onPlanetLoaded = ( planet ) => {
        this.setState({
            planet,
            loading:false,
        })
    }

updatePlanet(){
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
}

render(){

    const { planet,loading} = this.state

    const loader = loading ? <Loader/> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    return <div className="random-planet_block">
          {loader}
          {content}
            </div>
}
}


const PlanetView = ( {planet} ) => {

    const { id,name,population,rotationPeriod,diameter } = planet;


  return(
      <React.Fragment>
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
    </React.Fragment>
  )
};


export default RandomPlanet;