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
                <label>Name : </label>
                <input type="text" placeholder="Admin"  className="login-form_input"/>
                <label>Password : </label>
                <input type="password" placeholder="Password" className="login-form_input"/>
            </form>
            <button onClick={onLogin} className="form-send_button">
                Login
            </button>
            </div>
        </div>
    )
};

export default LoginPage



