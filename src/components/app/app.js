import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';


import './app.css'
import SwapiService from '../../service/service';
import Row from '../row';


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


    const { getPerson , getStarship , getPlanet } = this.swapiService;

    //NEW
    const personDetails = (
      <ItemDetails itemId={2}
      getData={getPerson}/>
    )
    const starshipDetails = (
      <ItemDetails itemId={2}
      getData={getStarship}/>
    )
    const planetDetails = (
      <ItemDetails itemId={1}
      getData={getPlanet}/>
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
        rightRow={planetDetails}
      />
    </div>
}
}
