import React from 'react';

import ItemDetails,{ Record } from '../item-details';

import { withService } from '../HOC'
import Header from '../header';




const PlanetDetails = ( props ) =>{
    
                    return(
                        <div>
                         <Header/>
                          <ItemDetails {...props}>
                          <Record field="population" label="Population"/>
                          <Record field="rotationPeriod" label="Rotation Period"/>
                          <Record field="diameter" label="Diameter"/>
                  
                          </ItemDetails>
                          </div>
                    )
                }
     


const mapMethodsToProps = (swapiService) =>{
    return{
        getData:swapiService.getPlanet,
        getImageUrl:swapiService.getPlanetImage,
    }
}

export default withService(mapMethodsToProps)(PlanetDetails);