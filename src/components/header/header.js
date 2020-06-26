import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = ( ) =>{
    return <div className="header">


       <ul className="header-nav_links">
           <li className="item">
               <Link to="/"> Home</Link>
           </li>
           <li className="item">
               <Link to="/people/">People</Link>
           </li>
           <li className="item">
               <Link to="/starships/">Starships</Link>
           </li>
           <li className="item">
               <Link to="/planets/">Planet</Link>
           </li>
           <li className="item">
               <Link to="/login/">Login</Link>
           </li>
           <li className="item">
               <Link to="/secret/">Secret</Link>
           </li>
       </ul>
    </div>
}

export default Header;