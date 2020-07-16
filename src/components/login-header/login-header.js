import React from 'react';
import { Link } from 'react-router-dom'

import './login-header.css'
import dmaul from './../../img/dmaul.png'


const LoginHeader = ({ isLoggedIn,onLogOut }) =>{



        if(isLoggedIn){
            return(
                <ul className="login-header_list">
                <li className="login-header_item">
                       <img src={dmaul} className="header-avatar"></img>
                       <p>Darth Maul</p>
                </li>
                <li className="login-header_item">
                        <button onClick={onLogOut} className="logout-button">Log out</button>
                </li>
                <li className="login-header_item">
                    <Link to="/secret/" className="secret-color">Secret</Link>
                </li>
                </ul>
                )
        }
    return(
        
            <ul className="login-header_list">
            <li className="login-header_item">
                    <Link to="/login/">Login</Link>
            </li>
            <li className="login-header_item">
                     <Link to="/secret/">Secret</Link>
            </li>
            </ul>
)



}

export default LoginHeader



