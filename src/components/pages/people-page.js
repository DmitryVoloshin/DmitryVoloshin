import React from 'react';
import {PersonList} from '../main-component';
import { withRouter } from 'react-router-dom';
import Header from './../header'

const PeoplePage = ( { history } ) => {
            return(
                <div>
                    <Header/>
                <PersonList onItemSelected={(itemId)=>{
                    history.push(itemId)
                }}/>
                </div>
            );
}
export default withRouter(PeoplePage);