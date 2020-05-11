import React from 'react';

import ItemDetails,{ Record } from '../item-details';

import { ServiceConsumer } from '../service-context';


const PersonDetails = ( {itemId} ) =>{

    return (
        <ServiceConsumer>
            {
                ({getPerson,getPersonImage}) => {
                    return(
                        <ItemDetails 
                        itemId={itemId}
                        getData={getPerson}
                        getImage={getPersonImage}>
                  
                          <Record field="gender" label="Gender" />
                          <Record field="eyeColor" label="Eye Color" />
                  
                        </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )

}

export { PersonDetails }