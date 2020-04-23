import React from 'react';


import Header from './../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';

import './app.css'



const App = ( ) =>{
    return <div>
        
   {/* <div className="stars"></div>
  <div className="twinkling"></div>  */}
    <Header/>
    <RandomPlanet/>
    <ItemList/>
    </div>
}

export default App