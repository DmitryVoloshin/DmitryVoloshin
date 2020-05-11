import React from 'react';

import ItemDetails,{ Record } from '../item-details';

import { ServiceConsumer } from '../service-context';





const PlanetDetails = ( { itemId } ) =>{
    
    return (
        <ServiceConsumer>
            {
                ({getPlanet,getPlanetImage})=>{
                    return(
                        <ItemDetails 
                        itemId={itemId}
                        getData={getPlanet}
                        getImage={getPlanetImage}>
                  
                          <Record field="population" label="Population"/>
                          <Record field="rotationPeriod" label="Rotation Period"/>
                          <Record field="diameter" label="Diameter"/>
                  
                          </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )

}


export {
    PlanetDetails
}