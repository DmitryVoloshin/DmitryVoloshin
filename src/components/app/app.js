import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../service/service';

import { ServiceProvider } from '../service-context';


import './app.css'
import {PeoplePage, PlanetPage} from '../pages';




export default class App extends React.Component{


  swapiService = new SwapiService();



  render(){


    return (
    <ServiceProvider value={this.swapiService}>
          <div className="main-content stars">
          <div className="twinkling"></div>  

            <Header/>
            <RandomPlanet/>


                <PeoplePage/>
                <PlanetPage/>

            init
            </div>
            </ServiceProvider>
    )
}
}
