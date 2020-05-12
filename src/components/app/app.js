import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';
import Row from '../row';

import { ServiceProvider } from '../service-context';

import {
  PersonList,StarshipList,PlanetList,
  PersonDetails,StarshipDetails,PlanetDetails
} from '../main-component';

import './app.css'
import starshipDetails from '../main-component/starship-details';
import PeoplePage from '../pages/people-page';




export default class App extends React.Component{


  swapiService = new SwapiService();

  state = {
    showRandomPlanet : true,
    hasError:false,
  };


  componentDidCatch(){
    this.setState({hasError:true});
  }

  render(){

    if(this.state.hasError){
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
    <RandomPlanet/> :
    null;


    return <ServiceProvider value={this.swapiService}>

          <div className="main-content stars">
          <div className="twinkling"></div>  

    <Header/>
    {planet}


    <PeoplePage/>
      <Row
        leftRow={<StarshipList/>}
        rightRow={<StarshipDetails itemId={11}/>}
      />

        
     </div>
     </ServiceProvider>
}
}
