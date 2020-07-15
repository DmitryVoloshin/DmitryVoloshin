import React from 'react';
import './main-page.css'
import LoginHeader from '../login-header';
import LoginPage from './login-page';

const MainPage = ( {isLoggedIn} ) =>{



    return <div className="main-page_body">
        <div className="main-page_head">
    
  

            <div className="main-page_logo">
                <div className="logo_word"><b>Star</b></div>
                <div className="logo_small"><p>Visual guide for funs</p></div>
                <div className="logo_word"><b>Wars</b></div>
            </div>
        </div>
    </div>
}

export default MainPage

