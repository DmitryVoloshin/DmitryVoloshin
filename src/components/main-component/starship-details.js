import React from 'react';

import ItemDetails,{ Record } from '../item-details';

import { ServiceConsumer } from '../service-context';



const StarshipDetails = ( { itemId } ) =>{

    return (
        <ServiceConsumer>
            {
                ({getStarship,getStarshipImage}) =>{
                    return(
                        <ItemDetails 
                        itemId={itemId}
                        getData={getStarship}
                        getImage={getStarshipImage}>
                  
                          <Record field="model" label="Model"/>
                          <Record field="length" label="Length"/>
                          <Record field="costInCredits" label="Cost"/>
                  
                          </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )

}

export { StarshipDetails }