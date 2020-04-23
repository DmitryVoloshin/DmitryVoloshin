import React from 'react';

import './random-planet.css'


const RandomPlanet = ( ) =>{
    return <div className="random-planet_block">
            <img alt="some img" className="random-planet_img"></img>
            <ul className="random-planet_list">
                <li className="planet-list_item">
                    <span>1</span>
                    <span>, 1</span>
                </li>
                <li className="planet-list_item">
                    <span>2</span>
                    <span>, 2</span>
                </li>
                <li className="planet-list_item">
                    <span>3</span>
                    <span>, 3 </span>
                </li>
            </ul>

            </div>
}

export default RandomPlanet