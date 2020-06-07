import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../service/service';

import { ServiceProvider } from '../service-context';

import { BrowserRouter as Router,Route} from 'react-router-dom';

import './app.css'
import {PeoplePage, PlanetPage, StarshipPage, MainPage, StartPage} from '../pages';
import { StarshipDetails, PersonDetails, PlanetDetails } from '../main-component';




export default class App extends React.Component{


  swapiService = new SwapiService();



  render(){


    return (
    <ServiceProvider value={this.swapiService}>
        <Router>
          <div className="main-content stars">
          <div className="twinkling"></div>  

            <MainPage/>
            <Route path="/" component={StartPage} exact/>
            <Route path="/people"  exact component={PeoplePage}/>
            <Route path="/planets" exact component={PlanetPage}/>
            <Route path="/starships" exact component={StarshipPage}/>
            <Route path="/starships/:id" 
              render={ ( { match } ) => {
                const { id } = match.params
                return <StarshipDetails itemId={id}/>
              }}/>
              <Route path="/people/:id" 
              render={ ( { match } ) => {
                const { id } = match.params
                return <PersonDetails itemId={id}/>
              }}/>
              <Route path="/planets/:id" 
              render={ ( { match } ) => {
                const { id } = match.params
                return <PlanetDetails itemId={id}/>
              }}/>
            

          </div>
        </Router>
    </ServiceProvider>
    )
}
}
