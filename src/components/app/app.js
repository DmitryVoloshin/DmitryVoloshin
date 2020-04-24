import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


import './app.css'



const App = ( ) =>{
    return <div className="main-content">
        
   {/* <div className="stars"></div>
  <div className="twinkling"></div>  */}
    <Header/>
    <RandomPlanet/>


    <main className="main-content_block">
    <ItemList/>
    <PersonDetails/>
    </main>


    </div>
}

export default App