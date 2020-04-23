import React from 'react';
import './header.css'

const Header = ( ) =>{
    return <div className="header">

        <div className="head-logo">
            <h2 className="main-link">
                <a href="#">All about SW</a>
            </h2>
        </div>


       <ul className="header-nav_links">
           <li className="item">
               <a href="#"> People</a>
           </li>
           <li className="item">
               <a href="#"> Planets</a>
           </li>
           <li className="item">
               <a href="#"> Starships</a>
           </li>
       </ul>
    </div>
}

export default Header;