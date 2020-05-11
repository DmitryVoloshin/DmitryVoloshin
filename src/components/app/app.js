import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemDetails, { Record } from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';

import { ServiceProvider } from '../service-context';

import {
  PersonList,StarshipList,PlanetList,
  PersonDetails,StarshipDetails,PlanetDetails
} from '../main-component';

import './app.css'




export default class App extends React.Component{


  swapiService = new SwapiService();

  state = {
    showRandomPlanet : true,
    hasError:false,
  };


 toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
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


    const { getPerson , getStarship,
            getPersonImage, getStarshipImage ,
            getAllPeople
          } = this.swapiService;

    //NEW
    const personDetails = (
      <ItemDetails 
      itemId={2}
      getData={getPerson}
      getImage={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    )
    const starshipDetails = (
      <ItemDetails 
      itemId={5}
      getData={getStarship}
      getImage={getStarshipImage}>

        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>

        </ItemDetails>
    )
 

    return <ServiceProvider value={this.swapiService}>

          <div className="main-content stars">
          <div className="twinkling"></div>  

    <Header/>
    {planet}


      <PersonDetails itemId={3}/>
      <PlanetDetails itemId={3}/>
      <StarshipDetails itemId={9}/>



      <PersonList/>
     
      <PlanetList/>
 

      <StarshipList/>
 

        
     </div>
     </ServiceProvider>
}
}
