import React from 'react';
import { Redirect } from 'react-router-dom'
import Header from '../header';

import './login-page.css'

const LoginPage = ({ isLoggedIn,onLogin }) =>{

    if(isLoggedIn){
        return <Redirect to="/"/>

    }
    return(
        <div >
            <Header/>
            <div className="login-page_form">
            <p>Now form working just for visib,and dnt have any logic</p>
            <form className="login-form">
                <input type="text" placeholder="Admin"/>
            </form>
            <button onClick={onLogin}>
                Login
            </button>
            </div>
        </div>
    )
};

export default LoginPage