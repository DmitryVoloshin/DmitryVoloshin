import React from 'react';
import { Redirect } from 'react-router-dom'

const LoginPage = ({ isLoggedIn,onLogin }) =>{

    if(isLoggedIn){
        return <Redirect to="/"/>

        
    }
    return(
        <div>
            <p>Login to see sectet</p>
            <button onClick={onLogin}>
                Login
            </button>
        </div>
    )
};

export default LoginPage