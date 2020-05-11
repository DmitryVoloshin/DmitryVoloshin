import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemDetails, { Record } from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';
import Row from '../row';

import './app.css'
import ItemList from '../item-list/item-list';
import PeoplePage from '../people-page/people-page';



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
 
    const peopleList = (
      <ItemList
        getData={getAllPeople}
      >
      </ItemList>
    )

    return <div className="main-content stars">
          <div className="twinkling"></div>  

    <Header/>
    {planet}
    {/* <div className="button-block">
    <button className="toggle-button" onClick={this.toggleRandomPlanet}>
      Toggle
    </button>
    </div> */}
    {/* <PeoplePage/> */}

      {/* <Row
        leftRow={personDetails}
        rightRow={starshipDetails}
      /> */}
      {/* <Row 
        leftRow={peopleList}
        rightRow={peopleList}
        /> */}


        <ItemList
          getData={this.swapiService.getAllPeople}
          onItemSelected={()=>{}}>
            {({name}) => <span>{name}</span>}
          </ItemList>
          <ItemList
          getData={this.swapiService.getAllPeople}
          onItemSelected={()=>{}}>
            {({name}) => <span>{name}</span>}
          </ItemList>
        
     </div>
}
}
