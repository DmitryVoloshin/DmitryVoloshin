import React from 'react';
import {StarshipList} from '../main-component';
import { withRouter } from 'react-router-dom';
import Header from './../header'


const StarshipPage = ( { history } ) => {
            return(
                <div>
                    <Header/>
                <StarshipList onItemSelected={(itemId)=>{
                    history.push(itemId)
                }}/>
                </div>
            );
}
export default withRouter(StarshipPage);