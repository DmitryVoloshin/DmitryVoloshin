import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';


import './app.css'
import PeoplePage from '../people-page';
import SwapiService from '../../service/service';
import Row from '../row';
import StarShip from '../starship-page';




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



    //NEW
    const personDetails = (
      <ItemDetails itemId={11}/>
    )
    const starshipDetails = (
      <ItemDetails itemId={3}/>
    )


    return <div className="main-content stars">
          <div className="twinkling"></div>  

    <Header/>
    {planet}
    <div className="button-block">
    <button className="toggle-button" onClick={this.toggleRandomPlanet}>
      Toggle
    </button>
    </div>
    {/* <PeoplePage/> */}

      <Row
        leftRow={personDetails}
        rightRow={starshipDetails}
      />
    </div>
}
}
