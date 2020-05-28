import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = ( ) =>{
    return <div className="header">

        <div className="head-logo">
            <h2 className="main-link">
                <Link to="/">Star Wars</Link>
            </h2>
        </div>


       <ul className="header-nav_links">
           <li className="item">
               <Link to="/people"> People</Link>
           </li>
           <li className="item">
               <Link to="/planets">Planets</Link>
           </li>
           <li className="item">
               <Link to="/starships">Starships</Link>
           </li>
       </ul>
    </div>
}

export default Header;