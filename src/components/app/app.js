import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';
import Row from '../row';

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
            getPersonImage, getStarshipImage 
          } = this.swapiService;

    //NEW
    const personDetails = (
      <ItemDetails itemId={2}
      getData={getPerson}
      getImage={getPersonImage}/>
    )
    const starshipDetails = (
      <ItemDetails itemId={5}
      getData={getStarship}
      getImage={getStarshipImage}/>
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

      <Row
        leftRow={personDetails}
        rightRow={starshipDetails}
      />
    </div>
}
}
