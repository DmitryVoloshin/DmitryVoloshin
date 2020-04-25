import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


import './app.css'



export default class App extends React.Component{

  state = {
    showRandomPlanet : true,
    selectedPerson:null,
  };


 toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = ( id ) =>{
    this.setState( {
      selectedPerson : id
    })
  }

  render(){

    const planet = this.state.showRandomPlanet ?
    <RandomPlanet/> :
    null;

    return <div className="main-content">
        
   {/* <div className="stars"></div>
  <div className="twinkling"></div>  */}
    <Header/>
    {planet}

    <button className="toggle-button" onClick={this.toggleRandomPlanet}>
      Toggle
    </button>

    <main className="main-content_block">
    <ItemList onItemSelected={this.onPersonSelected}/>
    <PersonDetails personId={this.state.selectedPerson}/>
    </main>


    </div>
}
}
