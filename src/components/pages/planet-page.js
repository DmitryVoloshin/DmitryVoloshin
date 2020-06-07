import React from 'react';
import { PlanetList} from '../main-component';
import { withRouter } from 'react-router-dom';
import Header from './../header'

const PlanetPage = ( { history } ) => {
            return(
                <div>
                    <Header/>
                <PlanetList onItemSelected={(itemId)=>{
                    history.push(itemId)
                }}/>
                </div>
            );
}
export default withRouter(PlanetPage);