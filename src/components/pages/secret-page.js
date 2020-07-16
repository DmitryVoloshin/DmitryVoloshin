import React from 'react';
import { Redirect } from 'react-router-dom'
import Header from '../header';

const SecretPage = ( { isLoggedIn }) =>{


    if(isLoggedIn){
        return(
            <div>
                <Header/>
            <h3>Now u on DarkSide</h3>
            </div>
        )
    }
    return <Redirect to="/login"/>
}
export default SecretPage