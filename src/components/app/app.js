import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../service/service';

import { ServiceProvider } from '../service-context';

import { BrowserRouter as Router,Route} from 'react-router-dom';

import './app.css'
import {PeoplePage, PlanetPage, StarshipPage, MainPage} from '../pages';




export default class App extends React.Component{


  swapiService = new SwapiService();



  render(){


    return (
    <ServiceProvider value={this.swapiService}>
        <Router>
          <div className="main-content stars">
          <div className="twinkling"></div>  

            
            <Route path="/" component={MainPage} exact/>
            <Route path="/people" component={PeoplePage}/>
            <Route path="/planets" component={PlanetPage}/>
            <Route path="/starships" exact component={StarshipPage}/>  
      

          </div>
        </Router>
    </ServiceProvider>
    )
}
}
