import React from 'react';
import {StarshipList} from '../main-component';
import { withRouter } from 'react-router-dom';

const StarshipPage = ( { history } ) => {
            return(
                <StarshipList onItemSelected={(itemId)=>{
                    const newPath = `/starships/${itemId}`;
                    history.push(newPath)
                }}/>
            );
}
export default withRouter(StarshipPage);